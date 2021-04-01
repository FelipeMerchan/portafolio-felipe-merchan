import React from 'react'

import styles from '../assets/styles/components/ButtonGhost.module.scss'

export const ButtonGhost = ({ children }) => {
  return (
    <button className={styles.ButtonGhost}>
      {children}
    </button>
  )
}
