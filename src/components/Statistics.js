import React from 'react'

import styles from '../assets/styles/components/Statistics.module.scss'

export const Statistics = () => {
  return (
    <section className={styles.Statistics}>
      <div className="u-wrapper">
        <div className={styles.Statistics__content}>
          <picture>
            <source
              srcSet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617348487/portafolio/fotomontaje-de-gato-mobile_2x_rdozez.jpg"
              media="(min-width=1023px)"
            />
            <source
              srcSet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617348487/portafolio/fotomontaje-de-gato-mobile_2x_rdozez.jpg"
              media="(min-width=767px)"
            />
            <img
              className={styles.Statistics__image}
              src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617348487/portafolio/fotomontaje-de-gato-mobile_2x_rdozez.jpg"
              width="377"
              alt="Fotomontaje de gato estudiando en computador en un cuarto destruido"
            />
          </picture>
          <div className={styles.Statistics__metrics}>
            <article className={styles.Statistics__years}>
              <span>02</span>
              <p>
                Años de<br />
                experiencia
              </p>
            </article>
            <article className={styles.Statistics__projects}>
              <span>15</span>
              <p>
                Proyectos<br />
                Exitosos
              </p>
            </article>
            <article className={styles.Statistics__hours}>
              <span>900+</span>
              <p>
                Horas<br />
                de trabajo
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
