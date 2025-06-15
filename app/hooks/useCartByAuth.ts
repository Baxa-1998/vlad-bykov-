import { useUnit } from "effector-react"
import { $cart, $cartFromLs } from "../context/cart"

export const useCartByAuth = () => {
  const cart = useUnit($cart)
  const cartFromLs = useUnit($cartFromLs) 
  const currentCartByAuth = cartFromLs 
    return currentCartByAuth


}