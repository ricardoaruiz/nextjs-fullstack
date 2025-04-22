"use server";

import { revalidateTag } from "next/cache";
import { cacheLife } from "next/dist/server/use-cache/cache-life";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import { redirect } from "next/navigation";
import sql from "../postgres";

type Product = {
  name: string | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export const getProducts = async () => {
  "use cache";
  cacheTag("products");
  cacheLife({
    revalidate: 60,
  });

  console.log("==== getProducts[postres] called");
  const products = await sql<Product[]>`
    SELECT * FROM public."Product"
  `;
  return products;
};

export const createProduct = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  const name = data.name as string;

  await sql`
    INSERT INTO public."Product" (id, name, "updatedAt")
    VALUES (${crypto.randomUUID()}, ${name}, ${new Date()})`;

  revalidateTag("products");
  redirect("/products");
};
