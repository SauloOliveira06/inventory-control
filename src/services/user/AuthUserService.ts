import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";
import { IAuthRequest } from "../../models/interfaces/auth/AuthRequest";

class AuthUserService {
  async execute({ email, password }: IAuthRequest) {
    if (!email) {
      throw Error("O email precisa ser criado!");
    }

    if (!password) {
      throw Error("A senha precisa ser criada!");
    }

    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw Error("Usuário ou senha incorreto!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw Error("A senha não confere!");
    }

    const token = sign(
      {
        name: user?.name,
        email: user?.email,
      },
      process.env.JWT_SECRET as string,
      {
        subject: user?.id,
        expiresIn: "30d",
      }
    );
    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      token: token,
    };
  }
}

export { AuthUserService };
