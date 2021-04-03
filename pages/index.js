import React from 'react'

import { Hero } from '../src/components/Hero'
import styles from '../src/assets/styles/pages/index.module.scss'
import { CareerCard } from '../src/components/CareerCard'
import { AboutMe } from '../src/components/AboutMe'
import { ProjectList } from '../src/components/ProjectList'
import { Clients } from '../src/components/Clients'
import { Testimonials } from '../src/components/Testimonials'
import { Statistics } from '../src/components/Statistics'
import { Footer } from '../src/components/Footer'

const Home = () => {
  return (
    <>
      <main className={styles.Home}>
        <Hero />
        <section className={styles.Careers}>
          <div className="u-wrapper">
            <div className={styles.Careers__content}>
              <CareerCard Career="frontend" />
              <CareerCard Career="ui-design" />
            </div>
          </div>
        </section>
        <AboutMe />
        <ProjectList />
        {/* <Clients />
        <Testimonials />
        <Statistics />
        <Footer /> */}
      </main>
    </>
  )
}

export default Home
