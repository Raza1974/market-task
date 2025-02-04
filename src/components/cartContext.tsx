"use client"
import { createContext, useContext, useEffect, useState } from 'react';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  description:string
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  totalPrice: () => number
  increaseQuantity: (id: number)=> void
  decreaseQuantity: (id: number)=> void
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = ():CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const getInitialCart = (): CartItem[] => {
        if (typeof window !== "undefined") {
          const storedCart = localStorage.getItem("cart");
          return storedCart ? JSON.parse(storedCart) : [];
        }
        return [];
      };
  const [cartItems, setCartItems] = useState<CartItem[]>((getInitialCart));


  useEffect(() => {
    // Save cart items to localStorage whenever cartItems changes
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);
  const addToCart = (item: CartItem) => {
    alert("Product is added in the cart")
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };
  const increaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
 const totalPrice = ():number => {
    return cartItems.reduce(
        (total, item)=> total + item.price * item.quantity, 0
    )
 }
const removeFromCart = (id: number) => {
    console.log("Removing item with id:", id);
    setCartItems((prev) => {
      const updatedCart = prev.filter((item) => item.id !== id);
      console.log("Updated cart:", updatedCart);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice,increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};