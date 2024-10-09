import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { ReadUserController } from "./controllers/user/ReadUserController";
import { FindByUserController } from "./controllers/user/FindByUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { EditCategoryController } from "./controllers/category/EditCategoryController";
import { ReadCategoryController } from "./controllers/category/ReadCategoryController";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController";

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
router.put(
  "/category/edit",
  isAuthenticated,
  new EditCategoryController().handle
);
router.get("/categories", isAuthenticated, new ReadCategoryController().handle);
router.delete(
  "/category/remove",
  isAuthenticated,
  new RemoveCategoryController().handle
);

export { router };
