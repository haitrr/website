import React from 'react';
import styles from './contactLinks.module.scss';

const ContactLink = (props: { alt: string; url: string; icon: string }) => (
  <a
    href={props.url}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.contactLink}
    aria-label={props.alt}
  >
    <img
      src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${props.icon}`}
      alt={props.alt}
    />
  </a>
);

export const ContactLinks = () => (
  <div className={styles.container}>
    <ContactLink
      alt="LinkedIn Profile"
      icon="icons/linkedin.svg"
      url="https://www.linkedin.com/in/haitran26"
    />
    <ContactLink
      alt="GitHub Profile"
      icon="icons/github.svg"
      url="https://github.com/haitrr"
    />
    <ContactLink
      alt="Email Contact"
      icon="icons/email.svg"
      url="mailto:h@hai.fyi"
    />
  </div>
);
