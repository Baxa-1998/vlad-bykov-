import { useUnit } from "effector-react"
import {  $cartFromLs } from "../context/cart"

export const useCartByAuth = () => {

  const cartFromLs = useUnit($cartFromLs) 
  const currentCartByAuth = cartFromLs 
    return currentCartByAuth


}