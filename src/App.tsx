import { useShallow } from "zustand/react/shallow";
import { useStore } from "./store/store";
import { User } from "./components/User";
import { PRODUCTS_DATA } from "./lib/mockData";
import { Cart } from "./components/Cart";
import { ChangeQtyButtons } from "./components/ChangeQtyButtons";

export default function App() {
  const addProduct = useStore((state) => state.addProduct);
  const cartProducts = useStore((state) => state.products);

  return (
    <main className="space-y-2 dark h-screen bg-background max-w-sm mx-auto mt-2">
      <div className="flex justify-between">
        <User />
        <Cart />
      </div>
      <h1 className="text-2xl">Products:</h1>
      <div className="space-y-2">
        {PRODUCTS_DATA.map((product) => (
          <div key={product.id}>
            <div>{product.title}</div>
            <div>{product.price}$</div>
            <div>
              {cartProducts.find((item) => item.id === product.id) ? (
                <ChangeQtyButtons productId={product.id} />
              ) : (
                <button onClick={() => addProduct(product)}>Add to Cart</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
