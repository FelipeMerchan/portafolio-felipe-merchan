import React from 'react'

import { Project } from './Project'
import styles from '../assets/styles/components/ProjectList.module.scss'

export const ProjectList = () => {
  return (
    <section className={styles.ProjectList} id="proyectos">
      <div className="u-wrapper">
        <div className={styles.ProjectList__content}>
          <h2 className={styles.ProjectList__title}>Portafolio</h2>
          <h3 className={styles.ProjectList__subtitle}>Mis proyectos recientes</h3>
          <div>
            <Project
              imageMobile="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617332649/portafolio/portada-troud-mobile_2x_ltwrlg.jpg"
              imageTablet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617332649/portafolio/portada-troud-mobile_2x_ltwrlg.jpg"
              imageDesktop="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617332649/portafolio/portada-troud-mobile_2x_ltwrlg.jpg"
              altText="troud - aplicación para intercambiar ropa"
              name="troud"
              specialty="Diseño UI y Desarrollo Web"
            />
            <Project
              imageMobile="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617333447/portafolio/portada-spotifu-mobile_2x_mgtjbf.jpg"
              imageTablet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617333447/portafolio/portada-spotifu-mobile_2x_mgtjbf.jpg"
              imageDesktop="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617333447/portafolio/portada-spotifu-mobile_2x_mgtjbf.jpg"
              altText="Interfaz de Spotifu"
              name="Spotifu"
              specialty="Desarrollo Web"
            />
            <Project
              imageMobile="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617333447/portafolio/portada-moviendonos-por-colombia-mobile_2x_dqdgxy.jpg"
              imageTablet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617333447/portafolio/portada-moviendonos-por-colombia-mobile_2x_dqdgxy.jpg"
              imageDesktop="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617333447/portafolio/portada-moviendonos-por-colombia-mobile_2x_dqdgxy.jpg"
              altText="Interfaz del sitio de #MoviéndonosPorColombia"
              name="#MoviéndonosPorColombia"
              specialty="Desarrollo Web"
            />
            <Project
              imageMobile="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617333447/portafolio/portada-findrop-mobile_2x_t5j7n9.jpg"
              imageTablet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617333447/portafolio/portada-findrop-mobile_2x_t5j7n9.jpg"
              imageDesktop="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617333447/portafolio/portada-findrop-mobile_2x_t5j7n9.jpg"
              altText="Findrop - el lugar para descubrir experiencias en el mundo de la electrónica"
              name="Findrop"
              specialty="Diseño UI"
            />
          </div>
        </div>
      </div>
    </section>
  )
}