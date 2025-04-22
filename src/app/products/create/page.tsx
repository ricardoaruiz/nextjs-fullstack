import { createProduct } from "@/lib/data/products-postgres.data";
// import { createProduct } from "@/lib/data/products-prisma.data";

export default async function CreateProductPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="flex flex-col items-center gap-6">
      <h1>Create Product</h1>

      <form action={createProduct} className="flex flex-col gap-4">
        <label className="flex flex-col gap-2">
          Name:
          <input type="text" name="name" className="px-4 py-2 border-1 " />
        </label>

        <button
          type="submit"
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
