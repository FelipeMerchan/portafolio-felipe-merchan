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
            <img
              className={styles.Hero__image}
              src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617421410/portafolio/header-felipe_2x_aplb4z.png"
              alt="Foto de Felipe Merchan"
              width="500"
            />
          </figure>
          <ButtonGhost link="#proyectos">Mis proyectos</ButtonGhost>
        </div>
      </div>
    </section>
  )
}