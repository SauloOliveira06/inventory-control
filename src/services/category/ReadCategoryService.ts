import { ICategoryRequest } from "../../models/interfaces/category/CategoryRequest";
import prismaClient from "../../prisma";

class ReadCategoryService {
  async execute({ name }: ICategoryRequest) {
    const categories = await prismaClient.category.findMany({
      where: {
        ...(name && { name }),
      },
    });
    return categories;
  }
}

export { ReadCategoryService };
