import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store/store";
import { useEffect } from "react";
import { Minus, Plus } from "lucide-react";

type Props = { productId: string };

export function ChangeQtyButtons({ productId }: Props) {
  const { getProductById, decQty, incQty, setTotal } = useStore(
    useShallow((state) => ({
      getProductById: state.getProductById,
      decQty: state.decQty,
      incQty: state.incQty,
      setTotal: state.setTotal,
    }))
  );

  const product = getProductById(productId);

  useEffect(() => {
    const unSub = useStore.subscribe(
      //(state) => state.products,
      (products) => {
        setTotal(
          products.reduce((acc, item) => acc + item.price * item.qty, 0)
        );
      }
      // { fireImmediately: true }
    );
    return unSub;
  }, [setTotal]);

  return (
    <>
      {product && (
        <div className="flex gap-2 items-center">
          <div onClick={() => decQty(product.id)}>
            <Minus />
          </div>
          <p>{product.qty}</p>
          <div onClick={() => incQty(product.id)}>
            <Plus />
          </div>
        </div>
      )}
    </>
  );
}
