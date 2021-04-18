import React from 'react'

import styles from '../assets/styles/components/Hero.module.scss'
import { ButtonGhost } from './ButtonGhost'

export const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className="u-wrapper">
        <div className={styles.Hero__content}>
          <h1 className={styles.Hero__title}>¡Hola! Soy Felipe. Desarrollador frontend y diseñador UI</h1>
          <figure className={styles.Hero__imageWrapper}>
            <picture>
              <source
                  srcSet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617421410/portafolio/header-felipe_2x_aplb4z.png"
                  media="(min-width: 1023px)"
                />
                <source
                  srcSet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1618717911/portafolio/header-tablet_2x_pwmded.png"
                  media="(min-width: 767px)"
                />
                <img
                  className={styles.Hero__image}
                  src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1618715941/portafolio/header-mobile_2x_wwgtly.png"
                  alt="Foto de Felipe Merchan"
                  width="320"
                  height="287"
                />
            </picture>
          </figure>
          <ButtonGhost link="#proyectos">Mis proyectos</ButtonGhost>
        </div>
      </div>
    </section>
  )
}