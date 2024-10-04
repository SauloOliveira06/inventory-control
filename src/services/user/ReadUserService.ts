import prismaClient from "../../prisma";

class ReadUserService {
  async execute({ name, email }: { name?: string; email?: string }) {
    const users = await prismaClient.user.findMany({
      where: {
        ...(name && { name }),
        ...(email && { email }),
      },
    });

    return users;
  }
}

export { ReadUserService };
