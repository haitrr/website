import React from "react";
import styles from "./contactLinks.module.scss"

function ContactLink(props: { alt: string, url: string, icon: string }) {
    return <a href={props.url} target="#">
        <img src={props.icon} alt={props.alt}/>
    </a>
}

export function ContactLinks() {
    return <div className={styles.container}>
        <ContactLink alt="linkedin" icon="/icons/linkedin.svg" url="https://www.linkedin.com/in/haitran26"/>
        <ContactLink alt="github" icon="/icons/github.svg" url="https://github.com/vroyibg"/>
    </div>
}