import { IProductRequest } from "../../models/interfaces/product/ProductRequest";
import prismaClient from "../../prisma";

class CreateProductService {
  async execute({
    name,
    price,
    description,
    banner,
    category_id,
    amount,
  }: IProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name,
        price: Number(price),
        description,
        banner,
        category_id,
        amount: Number(amount),
      },
    });
    return product;
  }
}

export { CreateProductService };
