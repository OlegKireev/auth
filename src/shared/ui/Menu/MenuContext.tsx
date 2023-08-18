import {
  type FC,
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
  type RefObject,
  useRef,
  useId,
  createRef,
} from 'react';

interface MenuContextValue {
  id: string;
  isOpen: boolean;
  items: NodeListOf<HTMLButtonElement> | undefined;
  setItems: Dispatch<SetStateAction<NodeListOf<HTMLButtonElement> | undefined>>;
  focusedItem: HTMLButtonElement | undefined;
  setFocusedItem: Dispatch<SetStateAction<HTMLButtonElement | undefined>>;
  listRef: RefObject<HTMLUListElement>;
  handleMenuToggle: () => void;
  handleMenuClose: () => void;
}

const MenuContext = createContext<MenuContextValue>({
  id: '',
  isOpen: false,
  items: undefined,
  focusedItem: undefined,
  setFocusedItem: () => {},
  listRef: createRef(),
  setItems: () => {},
  handleMenuToggle: () => {},
  handleMenuClose: () => {},
});

export const MenuContextProvider: FC<PropsWithChildren> =
  function MenuContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState<NodeListOf<HTMLButtonElement>>();
    const [focusedItem, setFocusedItem] = useState<HTMLButtonElement>();

    const id = useId();

    const listRef = useRef<HTMLUListElement>(null);

    const handleMenuClose = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    const handleMenuToggle = () => {
      setIsOpen((prev) => !prev);
    };

    return (
      <MenuContext.Provider
        value={{
          id,
          isOpen,
          items,
          focusedItem,
          listRef,
          setFocusedItem,
          setItems,
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
