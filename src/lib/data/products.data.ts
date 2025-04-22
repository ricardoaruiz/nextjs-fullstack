"use server";

import { revalidateTag, unstable_cache } from "next/cache";

import { redirect } from "next/navigation";
import db from "../db";

export const getProducts = unstable_cache(
  async () => {
    console.log("getProducts called");
    return db.product.findMany();
  },
  ["products"],
  {
    revalidate: 480,
    tags: ["products"],
  }
);

export const createProduct = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  await db.product.create({
    data: {
      name: data.name as string,
    },
  });
  revalidateTag("products");
  redirect("/products");
};
