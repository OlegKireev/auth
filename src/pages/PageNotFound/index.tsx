import styles from './styles.module.scss';
import { Link } from '@/shared';

export const PageNotFound = function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>
        The page are you looking for was moved, removed, renamed or might never
        existed
      </p>
      <Link to="/">Home</Link>
    </div>
  );
};
