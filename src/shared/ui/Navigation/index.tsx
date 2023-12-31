import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import { type NavigationLink } from '@/shared';

interface NavigationProps {
  links: NavigationLink[];
}

export const Navigation = function Navigation({ links }: NavigationProps) {
  return (
    <nav>
      <ul className={styles.list}>
        {links.map((link) => (
          <li
            className={styles.item}
            key={link.url}
          >
            <NavLink
              to={link.url}
              className={styles.link}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
