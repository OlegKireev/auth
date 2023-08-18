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
  items: NodeListOf<HTMLButtonElement | HTMLAnchorElement> | undefined;
  setItems: Dispatch<
    SetStateAction<
      NodeListOf<HTMLButtonElement | HTMLAnchorElement> | undefined
    >
  >;
  focusedItem: HTMLButtonElement | HTMLAnchorElement | undefined;
  setFocusedItem: Dispatch<
    SetStateAction<HTMLButtonElement | HTMLAnchorElement | undefined>
  >;
  listRef: RefObject<HTMLUListElement>;
  buttonRef: RefObject<HTMLButtonElement>;
  handleMenuToggle: () => void;
  handleMenuClose: () => void;
  resetFocusedItem: () => void;
}

const MenuContext = createContext<MenuContextValue>({
  id: '',
  isOpen: false,
  listRef: createRef(),
  buttonRef: createRef(),
  items: undefined,
  focusedItem: undefined,
  setFocusedItem: () => {},
  setItems: () => {},
  handleMenuToggle: () => {},
  handleMenuClose: () => {},
  resetFocusedItem: () => {},
});

export const MenuContextProvider: FC<PropsWithChildren> =
  function MenuContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] =
      useState<NodeListOf<HTMLButtonElement | HTMLAnchorElement>>();
    const [focusedItem, setFocusedItem] = useState<
      HTMLButtonElement | HTMLAnchorElement
    >();

    const id = useId();

    const listRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const resetFocusedItem = () => {
      focusedItem?.blur();
      setFocusedItem(undefined);
    };

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
          listRef,
          buttonRef,
          items,
          setItems,
          focusedItem,
          setFocusedItem,
          resetFocusedItem,
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
