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
              imageTablet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617425114/portafolio/portada-troud-tablet_2x_pxni0x.jpg"
              imageDesktop="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617436371/portafolio/portada-troud-desktop_3x_vxwr9l.jpg"
              altText="troud - aplicación para intercambiar ropa"
              name="troud"
              specialty="Diseño UI y Desarrollo Web"
              link="https://github.com/MasterSecondChance/Troud-Front"
              aosAnimation="fade-right"
            />
            <Project
              imageMobile="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617333447/portafolio/portada-spotifu-mobile_2x_mgtjbf.jpg"
              imageTablet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617425114/portafolio/portada-spotifu-tablet_2x_qgb4a6.jpg"
              imageDesktop="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617436573/portafolio/portada-spotifu-desktop_3x_zamg7h.jpg"
              altText="Interfaz de Spotifu"
              name="Spotifu"
              specialty="Desarrollo Web"
              link="https://github.com/FelipeMerchan/spotifu"
              aosAnimation="fade-left"
            />
            <Project
              imageMobile="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617333447/portafolio/portada-moviendonos-por-colombia-mobile_2x_dqdgxy.jpg"
              imageTablet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617425114/portafolio/portada-moviendonos-por-colombia-tablet_2x_whnheh.jpg"
              imageDesktop="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617435799/portafolio/portada-moviendonos-por-colombia-desktop_3x_iffpdc.jpg"
              altText="Interfaz del sitio de #MoviéndonosPorColombia"
              name="#MoviéndonosPorColombia"
              specialty="Desarrollo Web"
              link="https://comunicaciones.davivienda.com/moviendonos-por-colombia"
              aosAnimation="fade-left"
            />
            <Project
              imageMobile="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617333447/portafolio/portada-findrop-mobile_2x_t5j7n9.jpg"
              imageTablet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617425114/portafolio/portada-findrop-tablet_2x_dhxiis.jpg"
              imageDesktop="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617436053/portafolio/portada-findrop-desktop_3x_gdqnoj.jpg"
              altText="Findrop - el lugar para descubrir experiencias en el mundo de la electrónica"
              name="Findrop"
              specialty="Diseño UI"
              aosAnimation="fade-right"
            />
          </div>
        </div>
      </div>
    </section>
  )
}