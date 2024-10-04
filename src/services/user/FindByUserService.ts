import prismaClient from "../../prisma";

class FindByUserService {
  async execute(user_id: string) {
    if (user_id) {
      const findUser = await prismaClient.user.findFirst({
        where: {
          id: user_id,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });
      return findUser;
    }
  }
}

export { FindByUserService };
