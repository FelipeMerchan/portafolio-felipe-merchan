import React from 'react'

import styles from '../assets/styles/components/Hero.module.scss'
import { ButtonGhost } from './ButtonGhost'

export const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className="u-wrapper">
        <div className={styles.Hero__content}>
          <h1 className={styles.Hero__title}>¡Hola! Soy Felipe. Desarrollador frontend y diseñador UI</h1>
          <ButtonGhost link="#proyectos">Mis proyectos</ButtonGhost>
        </div>
      </div>
    </section>
  )
}