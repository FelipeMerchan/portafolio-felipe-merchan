import React from 'react'

import { Header } from './Header'

import styles from '../assets/styles/components/Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      {children}
    </div>
  )
}

export default Layout