import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";

const app = express();
const port = 3333;

app.use(express.json());
app.use(router);

app.use(
  (error: Error, _request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json({
        error: error.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal server error.",
    });
  }
);

app.listen(port, () => {
  return console.log(
    `Servidor rodando na porta: ${port} - Controle de Estoque`
  );
});
