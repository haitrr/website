import React from "react";
import styles from "./navItem.module.scss"

interface Props {
    title: string;
}

export const NavItem: React.FC<Props> = ({title}) => {
    return <div className={styles.navItem}>
        {`#${title}`}
    </div>
}