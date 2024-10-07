import { Request, Response } from "express";
import { IEditCategoryRequest } from "../../models/interfaces/category/EditCategoryRequest";
import { EditCategoryService } from "../../services/category/EditCategoryService";

class EditCategoryController {
  async handle(request: Request, response: Response) {
    const { name }: IEditCategoryRequest = request.body;
    const category_id = request.query.category_id as string;
    const editCategoryService = new EditCategoryService();
    const productEdited = editCategoryService.execute({
      category_id,
      name,
    });
    return response.json(productEdited);
  }
}

export { EditCategoryController };
