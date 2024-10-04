import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { IUserRequest } from "../../models/interfaces/user/UserRequest";

class CreateUserService {
  async execute({ name, email, password }: IUserRequest) {
    if (!email) {
      throw new Error("Email incorrect!");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("Email already exists!");
    }

    const hashPassword = await hash(password, 8);

    const user = prismaClient.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
