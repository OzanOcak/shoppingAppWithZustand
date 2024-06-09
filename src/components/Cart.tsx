import { CircleX, ShoppingCart, Trash2 } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store/store";
import { ChangeQtyButtons } from "./ChangeQtyButtons";

export function Cart() {
  const { reset, products, removeProduct, total, address } = useStore(
    useShallow((state) => ({
      reset: state.reset,
      products: state.products,
      removeProduct: state.removeProduct,
      total: state.total,
      address: state.address,
    }))
  );

  return (
    <div>
      <div>
        <button>
          <ShoppingCart />
        </button>
      </div>
      <div className="overflow-y-scroll space-y-2 w-96">
        <div className="flex gap-2 text-lg items-center">
          <h1>Cart:</h1>
          <button onClick={reset}>
            <CircleX />
          </button>
        </div>
        <div className="space-y-2">
          {products.map((product) => (
            <div className="flex flex-col" key={product.id}>
              <div className="flex flex-row items-center gap-2">
                <title>{product.title}</title>
                <button onClick={() => removeProduct(product.id)}>
                  <Trash2 />
                </button>
              </div>
              <div>{product.price}</div>
              <div>
                <ChangeQtyButtons productId={product.id} />
              </div>
            </div>
          ))}
        </div>
        <p>Total: {total}$</p>
        <p>Address: {address}</p>
      </div>
    </div>
  );
}
