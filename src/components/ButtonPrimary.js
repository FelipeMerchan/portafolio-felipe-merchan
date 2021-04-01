import React from 'react'

import styles from '../assets/styles/components/ButtonPrimary.module.scss'

export const ButtonPrimary = ({ children }) => {
  return (
    <button className={styles.ButtonPrimary}>
      {children}
    </button>
  )
}
