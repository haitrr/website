import React from 'react';
import styles from './navItem.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

interface Props {
  title: string;
  isActive: boolean;
  path: string;
}

export const NavItem: React.FC<Props> = ({ title, isActive, path }) => {
  const cn = classNames(styles.navItem, isActive ? styles.active : null);
  return (
    <div className={cn}>
      <Link href={path}>{`#${title}`}</Link>
    </div>
  );
};
