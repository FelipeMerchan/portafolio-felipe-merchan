import React from 'react'

import { IconRight } from './IconRight'
import styles from '../assets/styles/components/ButtonPrimary.module.scss'

export const ButtonPrimary = ({ children, link }) => {
  return (
    <a className={styles.ButtonPrimary} href={link} aria-current="page">
      {children}
      <IconRight color="#fff"/>
    </a>
  )
}
