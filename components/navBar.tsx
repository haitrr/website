import styles from './navBar.module.scss';
import { NavItem } from './navItem';
import classNames from 'classnames';
import React from 'react';

interface Props {
  className?: string;
  currentPath: string;
}

const menuItems = [
  {
    title: 'Home',
    isActive: (path: string) => {
      return path === '/';
    },
    path: '/',
  },
  {
    title: 'Works',
    isActive: (path: string) => {
      return path.startsWith('/works');
    },
    path: '/works',
  },
  {
    title: 'About',
    isActive: (path: string) => {
      return path.startsWith('/about');
    },
    path: '/about',
  },
  {
    title: 'Contact',
    isActive: (path: string) => {
      return path.startsWith('/contact');
    },
    path: '/contact',
  },
];

export const NavBar: React.FC<Props> = ({ className, currentPath }) => {
  const cn = classNames(className, styles.navBar);
  return (
    <div className={cn}>
      {menuItems.map((item) => {
        return (
          <NavItem
            key={item.path}
            path={item.path}
            title={item.title}
            isActive={item.isActive(currentPath)}
          />
        );
      })}
    </div>
  );
};
