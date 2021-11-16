import styles from "./navBar.module.scss";
import { NavItem } from "./navItem";
import classNames from "classnames";
import React from "react";

interface Props {
  className?: string;
}

export const NavBar: React.FC<Props> = ({ className }) => {
  const cn = classNames(className, styles.navBar);
  return <div className={cn}>
    <NavItem title="Home" />
    <NavItem title="Works" />
    <NavItem title="About" />
    <NavItem title="Contact" />
  </div>;
};