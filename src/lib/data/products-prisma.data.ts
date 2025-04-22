"use server";

import { revalidateTag } from "next/cache";

import { cacheLife } from "next/dist/server/use-cache/cache-life";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import { redirect } from "next/navigation";
import db from "../db";

export const getProducts = async () => {
  "use cache";
  cacheTag("products");
  cacheLife({
    revalidate: 60,
  });

  console.log("==== getProducts[prisma] called");
  return db.product.findMany();
};

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
