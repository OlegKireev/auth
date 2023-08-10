import {
  type MouseEventHandler,
  type InputHTMLAttributes,
  useRef,
  useState,
} from 'react';
import { clsx } from 'clsx';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import styles from './styles.module.scss';

interface InputProps {
  hasError?: boolean;
}

export const Input = function Input({
  hasError,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const isPassword = rest.type === 'password';

  const handleShowPasswordClick: MouseEventHandler<HTMLButtonElement> = () => {
    setIsPasswordShow((prev) => !prev);
  };

  return (
    <div className={clsx(styles.wrapper, rest.className)}>
      <input
        {...rest}
        className={clsx(styles.input, {
          [styles.error]: hasError,
          [styles.rightPadding]: isPassword,
        })}
        type={isPasswordShow ? 'text' : rest.type}
        ref={inputRef}
      />
      {isPassword && (
        <button
          type="button"
          className={styles.showPassword}
          title={`${isPasswordShow ? 'Hide' : 'Show'} password`}
          onClick={handleShowPasswordClick}
        >
          {isPasswordShow ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      )}
    </div>
  );
};
