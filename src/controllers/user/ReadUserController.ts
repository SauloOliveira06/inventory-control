import { Request, Response } from "express";
import { ReadUserService } from "../../services/user/ReadUserService";

class ReadUserController {
  async handle(request: Request, response: Response) {
    const { name, email } = request.query;

    const readUserService = new ReadUserService();

    const users = await readUserService.execute({
      name: name?.toString(),
      email: email?.toString(),
    });
    return response.json(users);
  }
}

export { ReadUserController };
