import React from 'react'

import { ButtonPrimary } from './ButtonPrimary'
import styles from '../assets/styles/components/DetailsAboutMe.module.scss'

export const DetailsAboutMe = () => {
  return (
    <article className={styles.DetailsAboutMe}>
      <div className="u-wrapper">
        <div className={styles.DetailsAboutMe__content}>
          <h2 className={styles.DetailsAboutMe__title}>Sobre mí</h2>
          <h3 className={styles.DetailsAboutMe__subtitle}>Soy desarrollador frontend y diseñador UI con 2 años de experiencia</h3>
          <p className={styles.DetailsAboutMe__description}>Me especializo en la creación de sitios y aplicaciones web desde el papel hasta el código.</p>
          <ButtonPrimary link="#contacto">Contáctame</ButtonPrimary>
        </div>
      </div>
    </article>
  )
}
