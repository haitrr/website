import React from 'react';
import styles from './contactLinks.module.scss';

const ContactLink = (props: { alt: string; url: string; icon: string }) => (
  <a href={props.url} target="#">
    <img
      src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${props.icon}`}
      alt={props.alt}
      style={{
        width: '3rem',
        height: '3rem',
      }}
    />
  </a>
);

export const ContactLinks = () => (
  <div className={styles.container}>
    <ContactLink
      alt="linkedin"
      icon="/icons/linkedin.svg"
      url="https://www.linkedin.com/in/haitran26"
    />
    <ContactLink
      alt="github"
      icon="/icons/github.svg"
      url="https://github.com/haitrr"
    />
    <ContactLink
      alt="email"
      icon="/icons/email.svg"
      url="https://github.com/haitrr"
    />
  </div>
);
