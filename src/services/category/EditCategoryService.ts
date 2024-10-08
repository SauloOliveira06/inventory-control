import { IEditCategoryRequest } from "../../models/interfaces/category/EditCategoryRequest";
import prismaClient from "../../prisma";

class EditCategoryService {
  async execute({ category_id, name }: IEditCategoryRequest) {
    if (!category_id || !name) {
      throw new Error("Invalid arguments to edit category!");
    }
    const productEdited = await prismaClient.category.update({
      where: {
        id: category_id,
      },
      data: {
        name: name,
      },
    });
    return productEdited;
  }
}

export { EditCategoryService };
