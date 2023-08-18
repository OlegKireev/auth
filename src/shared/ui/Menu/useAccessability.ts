import { useEffect } from 'react';
import { useMenuContext } from './MenuContext';
import { useKeydown, useClickOutside } from '@/shared';

export const useAccessability = () => {
  const {
    listRef,
    isOpen,
    setFocusedItem,
    focusedItem,
    handleMenuClose,
    items,
    id,
    setItems,
  } = useMenuContext();

  // set all items to the MenuContext
  useEffect(() => {
    if (isOpen && listRef?.current) {
      const buttons = listRef.current.querySelectorAll<
        HTMLButtonElement | HTMLAnchorElement
      >('li > button, li > a');
      setItems(buttons);
    }
  }, [isOpen, listRef, setItems]);

  // reset a focused item on menu close
  useEffect(() => {
    if (!isOpen) {
      setFocusedItem(undefined);
    }
  }, [isOpen, setFocusedItem]);

  // focus the first item on menu open
  useEffect(() => {
    if (isOpen && items?.length) {
      setFocusedItem(items[0]);
    }
  }, [items, isOpen, setFocusedItem]);

  // set data-index to each item
  useEffect(() => {
    if (items) {
      items.forEach((item, i) => {
        // eslint-disable-next-line no-param-reassign
        item.dataset.index = String(i);
      });
    }
  }, [items]);

  // set the first element as focusedItem
  useEffect(() => {
    if (isOpen && items?.length) {
      const firstItemButton = items[0];
      if (firstItemButton) {
        setFocusedItem(firstItemButton);
      }
    }
  }, [isOpen, items, setFocusedItem]);

  // focus focusedItem
  useEffect(() => {
    if (focusedItem) {
      focusedItem.focus();
    }
  }, [focusedItem]);

  // close a menu on click outside the menu
  useClickOutside(listRef, (e) => {
    const { target } = e;
    if (target instanceof HTMLElement) {
      const buttonId = `menu-button-${id}`;
      const isMenuButton = target.id === buttonId;

      if (isMenuButton) {
        return;
      }
    }

    if (isOpen) {
      handleMenuClose();
    }
  });

  const handleArrowKeydown =
    (direction: 'up' | 'down') => (e: KeyboardEvent) => {
      if (isOpen) {
        e.preventDefault();
        if (items?.length && focusedItem) {
          const focusedItemIndex = Number(focusedItem.dataset.index);
          const nextFocusedItem =
            direction === 'up'
              ? items[focusedItemIndex + 1] || items[0]
              : items[focusedItemIndex - 1] || items[items.length - 1];
          setFocusedItem(nextFocusedItem);
          nextFocusedItem.focus();
        }
      }
    };

  useKeydown('ArrowDown', handleArrowKeydown('up'));
  useKeydown('ArrowUp', handleArrowKeydown('down'));
  useKeydown('Escape', handleMenuClose);
};
