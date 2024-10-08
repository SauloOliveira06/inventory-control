import { Request, Response } from "express";
import { ReadCategoryService } from "../../services/category/ReadCategoryService";

class ReadCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.query;

    const readCategoryService = new ReadCategoryService();
    const readCategory = await readCategoryService.execute({
      name: name ? name.toString() : undefined,
    });

    return response.json(readCategory);
  }
}

export { ReadCategoryController };
