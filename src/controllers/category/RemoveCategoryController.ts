import { Request, Response } from "express";
import { RemoveCategoryService } from "../../services/category/RemoveCategoryService";

class RemoveCategoryController {
  async handle(request: Request, response: Response) {
    const id_category = request.query.id_category as string;
    const categoryService = new RemoveCategoryService();
    const removeCategory = categoryService.execute({
      id_category,
    });
    return response.json(removeCategory);
  }
}

export { RemoveCategoryController };
