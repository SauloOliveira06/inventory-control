import { IRemoveCategoryRequest } from "../../models/interfaces/category/RemoveCategoryRequest";
import prismaClient from "../../prisma";

class RemoveCategoryService {
  async execute({ id_category }: IRemoveCategoryRequest) {
    if (!id_category) {
      throw new Error("A categoria não existe!");
    }

    if (id_category) {
      const category = await prismaClient.category.delete({
        where: {
          id: id_category,
        },
      });
      return category;
    }
  }
}

export { RemoveCategoryService };
