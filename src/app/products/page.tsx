import { getProducts } from "@/lib/data/products-postgres.data";
// import { getProducts } from "@/lib/data/products-prisma.data";

export default async function ProductsPage() {
  const products = await getProducts();
  // const products = await getProducts();

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-2xl">Products</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
