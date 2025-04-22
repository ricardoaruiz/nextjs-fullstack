import { ProductMenu } from "./components/menu/menu.view";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ProductMenu />
      <div className="p-4 container mx-auto">{children}</div>
    </section>
  );
}
