import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { ReadUserController } from "./controllers/user/ReadUserController";
import { FindByUserController } from "./controllers/user/FindByUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { RemoveUserController } from "./controllers/user/RemoveUserController";

const router = Router();

router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/users", new ReadUserController().handle);
router.get("/user-id", isAuthenticated, new FindByUserController().handle);
router.delete("/user/remove", new RemoveUserController().handle);

export { router };
