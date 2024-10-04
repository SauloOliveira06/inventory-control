import { Request, Response } from "express";
import { FindByUserService } from "../../services/user/FindByUserService";

class FindByUserController {
  async handle(request: Request, response: Response) {
    const userId = request.user_id;
    const userService = new FindByUserService();
    const user = await userService.execute(userId);
    return response.json(user);
  }
}

export { FindByUserController };
