import React from "react";
import styles from "./contactLinks.module.scss"
import Image from 'next/image'

const ContactLink = (props: { alt: string, url: string, icon: string }) => <a href={props.url} target="#">
    <Image src={props.icon} alt={props.alt}/>
</a>;

export const ContactLinks = () => <div className={styles.container}>
    <ContactLink alt="linkedin" icon="/icons/linkedin.svg" url="https://www.linkedin.com/in/haitran26"/>
    <ContactLink alt="github" icon="/icons/github.svg" url="https://github.com/vroyibg"/>
</div>;