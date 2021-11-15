import styles from "./introduction.module.scss"
import classNames from "classnames";
import React from "react";
function ContactLinks() {
    //TODO: implement this
    return null;
}

interface Props {
    className?: string;
}

export const Introduction: React.FC<Props> = ({className}) => {
    const cn = classNames(className, styles.container)
    return <div className={cn}>
        <div className={styles.hello}>Hello,</div>
        <div className={styles.hai}>{"I'm Hai"}</div>
        <div className={styles.job}>A Software Engineer base in Vietnam</div>
        <ContactLinks/>
    </div>;
};