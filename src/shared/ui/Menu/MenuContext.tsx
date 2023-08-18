import {
  type FC,
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

interface MenuContextValue {
  isOpen: boolean;
  handleMenuToggle: () => void;
  handleMenuClose: () => void;
}

const MenuContext = createContext<MenuContextValue>({
  isOpen: false,
  handleMenuToggle: () => {},
  handleMenuClose: () => {},
});

export const MenuContextProvider: FC<PropsWithChildren> =
  function MenuContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsOpen((prev) => !prev);
    };

    const handleMenuClose = () => {
      setIsOpen(false);
    };

    return (
      <MenuContext.Provider
        value={{
          isOpen,
          handleMenuToggle,
          handleMenuClose,
        }}
      >
        {children}
      </MenuContext.Provider>
    );
  };

export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error(
      'useMenuContext must be used within an MenuContextProvider',
    );
  }

  return context;
};
