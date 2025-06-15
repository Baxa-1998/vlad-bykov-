import { createEffect } from "effector";
import api from "./apiInstance";
import { IAddProductToCartFx, ICartItem } from "@/app/types/cart";
import toast from "react-hot-toast";

export const getCartItemsFx = createEffect(async ({ clientId }: { clientId: string }) => {
  try {
    const { data } = await api.get(`/api/cart/all?clientId=${clientId}`);

    if (data?.error) {
      toast.error(data.error);
      return [];
    }

    return data as ICartItem[];
  } catch (error) {
    toast.error((error as Error).message);
    return [];
  }
});

export const addProductToCartFx = createEffect(
  async ({ setSpinner, ...dataFields }: IAddProductToCartFx) => {
    try {
      setSpinner(true);

      const { data } = await api.post("/api/cart/add", dataFields);

      if (data?.error) {
        toast.error(data.error);
        return;
      }

      toast.success("Добавлено в корзину");
      return data as { newCartItem: ICartItem };
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setSpinner(false);
    }
  }
);