import React from 'react'

import styles from '../assets/styles/components/ButtonDownload.module.scss'

export const ButtonDownload = ({ children, link }) => {
  return (
    <a
      className={styles.ButtonDownload}
      href={link}
      target="_blank"
    >
      {children}
    </a>
  )
}
