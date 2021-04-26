import { createContext, useContext, useState, useEffect } from 'react';

type CartContextType = {
  items: [LineItem] | any;
  isOpen: boolean;
  toggleCart: () => void;
  closeCartOnNewPage: () => void;
  addToCart: (item: LineItem) => void;
  removeFromCart: (itemToRemove: LineItem) => void;
};

const cartContextDefaultValues: CartContextType = {
  items: [],
  isOpen: false,
  toggleCart: () => {},
  closeCartOnNewPage: () => {},
  addToCart: (item: LineItem) => {},
  removeFromCart: (itemToRemove: LineItem) => {},
};

const CartContext = createContext<CartContextType>(cartContextDefaultValues);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(
    process.browser && sessionStorage.getItem('cart')
      ? JSON.parse(sessionStorage.getItem('cart'))
      : []
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const closeCartOnNewPage = () => {
    setIsOpen(false);
  };

  const addToCart = (item: LineItem) => {
    setItems([...items, item]);
  };

  const removeFromCart = (itemToRemove: LineItem) => {
    setItems(items.filter((item) => itemToRemove.variantId !== item.variantId));
  };

  useEffect(() => {
    process.browser && sessionStorage.setItem('cart', JSON.stringify(items));
  });

  const value = {
    items,
    isOpen,
    toggleCart,
    closeCartOnNewPage,
    addToCart,
    removeFromCart,
  };
  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
}
