import styles from './introduction.module.scss';
import classNames from 'classnames';
import React from 'react';
import { ContactLinks } from './contactLinks';

interface Props {
  className?: string;
}

export const Introduction: React.FC<Props> = ({ className }) => {
  const cn = classNames(className, styles.container);
  return (
    <div className={cn}>
      <div className={styles.text}>
        <div className={styles.hello}>Hello,</div>
        <div className={styles.hai}>{"I'm Hai"}</div>
        <div className={styles.job}>A Software Engineer based in Vietnam</div>
      </div>
      <ContactLinks />
    </div>
  );
};
