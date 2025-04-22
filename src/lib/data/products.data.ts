"use server";

import { revalidateTag, unstable_cache } from "next/cache";

import { redirect } from "next/navigation";
import prisma from "../prisma";

export const getProducts = unstable_cache(
  async () => {
    console.log("getProducts called");
    return prisma.product.findMany();
  },
  ["products"],
  {
    revalidate: 480,
    tags: ["products"],
  }
);

export const createProduct = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  await prisma.product.create({
    data: {
      name: data.name as string,
    },
  });
  revalidateTag("products");
  redirect("/products");
};
