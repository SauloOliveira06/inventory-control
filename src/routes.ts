import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { ReadUserController } from "./controllers/user/ReadUserController";
import { FindByUserController } from "./controllers/user/FindByUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";

const router = Router();

// user
router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/users", new ReadUserController().handle);
router.get("/user-id", isAuthenticated, new FindByUserController().handle);
router.delete("/user/remove", new RemoveUserController().handle);

// category
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

export { router };
