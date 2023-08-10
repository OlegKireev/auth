import {
  type ReactNode,
  type HTMLAttributes,
  useRef,
  useEffect,
  type ChangeEventHandler,
} from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface ToggleProps {
  items:
    | { id: string; label: ReactNode }[]
    | { id: string; label: ReactNode; href: string }[];
  isWide?: boolean;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Toggle = function Toggle({
  items,
  isWide,
  defaultValue,
  onChange,
  ...rest
}: ToggleProps & HTMLAttributes<HTMLDivElement>) {
  const defaultItemRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof defaultValue !== 'undefined' && defaultItemRef.current) {
      defaultItemRef.current.click();
    }
  }, [defaultValue]);

  return (
    <div
      {...rest}
      className={clsx(styles.wrapper, rest.className, {
        [styles.wide]: isWide,
      })}
    >
      {items.map((toggle) => {
        if ('href' in toggle) {
          const isActive = window.location.pathname.includes(toggle.href);

          return (
            <Link
              className={clsx(styles.toggle, { [styles.active]: isActive })}
              key={toggle.id}
              to={toggle.href}
            >
              {toggle.label}
            </Link>
          );
        }

        // Input
        const id = `toggle-button-${toggle.label}-${toggle.id}`;

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
              value={toggle.id}
              ref={defaultValue === toggle.id ? defaultItemRef : null}
              onChange={onChange}
            />
            <label
              className={styles.toggle}
              htmlFor={id}
            >
              {toggle.label}
            </label>
          </div>
        );
      })}
    </div>
  );
};
