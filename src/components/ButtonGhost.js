import React from 'react'

import { IconRight } from './IconRight'
import styles from '../assets/styles/components/ButtonGhost.module.scss'

export const ButtonGhost = ({ children, link }) => {
  return (
    <a className={styles.ButtonGhost} href={link} aria-current="page">
      {children}
      <IconRight color="#081421" />
    </a>
  )
}
