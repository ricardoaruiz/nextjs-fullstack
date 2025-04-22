import { Prisma, PrismaClient } from "../src/prisma/client";

const prisma = new PrismaClient();

const products: Prisma.ProductCreateInput[] = [
  {
    name: "Product 1",
  },
  {
    name: "Product 2",
  },
  {
    name: "Product 3",
  },
  {
    name: "Product 4",
  },
  {
    name: "Product 5",
  },
  {
    name: "Product 6",
  },
  {
    name: "Product 7",
  },
  {
    name: "Product 8",
  },
];

async function main() {
  console.log("Start seeding ...");
  for (const p of products) {
    const product = await prisma.product.create({
      data: p,
    });
    console.log(`Created product with id: ${product.id}`);
  }
  console.log("Seeding finished.");
}

main();
