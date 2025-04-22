import { MenuItem } from "./menu-item.view";

export function ProductMenu() {
  return (
    <nav className="bg-gray-500">
      <ul className="flex items-center w-full">
        <MenuItem href="/products">Lista de Produtos</MenuItem>
        <MenuItem href="/products/create">Novo Produto</MenuItem>
      </ul>
    </nav>
  );
}
