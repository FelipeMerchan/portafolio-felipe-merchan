import React from 'react'

import styles from '../assets/styles/components/Statistics.module.scss'

export const Statistics = () => {
  return (
    <section className={styles.Statistics}>
      <picture>
        <source
          srcSet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617436904/portafolio/fotomontaje-de-gato-desktopt_3x_lcyjfv.jpg"
          media="(min-width: 1023px)"
        />
        <source
          srcSet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617430849/portafolio/fotomontaje-de-gato-tablet_2x_vid4cv.jpg"
          media="(min-width: 767px)"
        />
        <img
          className={styles.Statistics__image}
          src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617348487/portafolio/fotomontaje-de-gato-mobile_2x_rdozez.jpg"
          width="320"
          height="455"
          loading="lazy"
          alt="Fotomontaje de gato estudiando en computador en un cuarto destruido"
        />
      </picture>
      <div className="u-wrapper">
        <div className={styles.Statistics__content}>
          <div className={styles.Statistics__metrics}>
            <article
              className={styles.Statistics__years}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <span>02</span>
              <p>
                Años de<br />
                experiencia
              </p>
            </article>
            <article
              className={styles.Statistics__projects}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="300"
            >
              <span>15</span>
              <p>
                Proyectos<br />
                Exitosos
              </p>
            </article>
            <article
              className={styles.Statistics__hours}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="600"
            >
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
