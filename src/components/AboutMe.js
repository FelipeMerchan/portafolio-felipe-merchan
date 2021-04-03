import React from 'react'

import { DetailsAboutMe } from './DetailsAboutMe'
import styles from '../assets/styles/components/AboutMe.module.scss'

export const AboutMe = () => {
  return (
    <section className={styles.AboutMe}>
      <div className="u-wrapper">
        <div className={styles.AboutMe__content}>
          <h2 className={styles.AboutMe__title}>¿Qué es lo que hago?</h2>
          <h3 className={styles.AboutMe__subtitle}>Creo productos digitales bajo la intersección de desarrollo y diseño</h3>
        </div>
      </div>
      <div>
        <picture>
          <source
            srcSet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617328739/portafolio/platzi-conf-desktop_2x_aujddg.jpg"
            media="(min-width: 1023px)"
          />
          <source
            srcSet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617328738/portafolio/platzi-conf-tablet_2x_joqlaq.jpg"
            media="(min-width: 767px)"
          />
          <img
            className={styles.AboutMe__image}
            src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617328236/portafolio/platzi-conf-mobile_2x_yzkjnq.jpg"
            width="375"
            alt="Foto con el equipo de Platzi en Platzi Conf 2019"
          />
        </picture>
        <DetailsAboutMe />
      </div>
    </section>
  )
}
