import { Request, Response } from "express";
import { ICategoryRequest } from "../../models/interfaces/category/CategoryRequest";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name }: ICategoryRequest = request.body;
    const createCategory = new CreateCategoryService();
    const category = await createCategory.execute({
      name,
    });
    return response.json(category);
  }
}

export { CreateCategoryController };
