import React from 'react'

import { Hero } from '../src/components/Hero'
import styles from '../src/assets/styles/pages/index.module.scss'

const Home = () => {
  return (
    <>
      <main className={styles.Home}>
        <Hero />
      </main>
    </>
  )
}

export default Home