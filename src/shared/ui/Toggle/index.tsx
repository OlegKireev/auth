import { type ReactNode, type HTMLAttributes, useRef, useEffect } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.scss';

interface ToggleProps {
  items:
    | { id: string; children: ReactNode }[]
    | { id: string; children: ReactNode; href: string }[];
  isWide?: boolean;
  defaultIndex?: number;
}

export const Toggle = function Toggle({
  items,
  isWide,
  defaultIndex,
  ...rest
}: ToggleProps & HTMLAttributes<HTMLDivElement>) {
  const defaultItemRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof defaultIndex !== 'undefined' && defaultItemRef.current) {
      defaultItemRef.current.click();
    }
  }, [defaultIndex]);

  return (
    <div
      {...rest}
      className={clsx(styles.wrapper, rest.className, {
        [styles.wide]: isWide,
      })}
    >
      {items.map((toggle, i) => {
        if ('href' in toggle) {
          const isActive = window.location.pathname.includes(toggle.href);

          return (
            <a
              className={clsx(styles.toggle, { [styles.active]: isActive })}
              key={toggle.id}
              href={toggle.href}
            >
              {toggle.children}
            </a>
          );
        }

        // Input
        const id = `toggle-button-${toggle.children}-${toggle.id}`;

        return (
          <div
            key={toggle.id}
            className={styles.itemWrapper}
          >
            <input
              className={clsx(styles.radio, 'visuallyHidden')}
              id={id}
              key={toggle.id}
              type="radio"
              name="toggle-button"
              ref={defaultIndex === i ? defaultItemRef : null}
            />
            <label
              className={styles.toggle}
              htmlFor={id}
            >
              {toggle.children}
            </label>
          </div>
        );
      })}
    </div>
  );
};
