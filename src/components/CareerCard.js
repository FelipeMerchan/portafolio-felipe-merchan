import React from 'react'

import styles from '../assets/styles/components/CareerCard.module.scss'

export const CareerCard = ({ Career, aosAnimation }) => {
  const frontendImageMobile= 'https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617324215/portafolio/ilustracion-frontend-mobile_2x_mh71t4.png'
  const frontendImageDesktop= 'https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617322388/portafolio/ilustracion-frontend-desktop_2x_mnrjsx.png'
  const uIImageMobile= 'https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617324215/portafolio/ilustracion-ui-design-mobile_2x_bqj1qu.png'
  const uIImageDesktop= 'https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617322388/portafolio/ilustracion-ui-design-desktop_2x_v0gka8.png'
  const frontendDescription = 'Me especializo en crear sitios web únicos  que pueden ser editados fácilmente.'
  const uIDescription = 'Diseño interfaces usables e intuitivas cuidando la interacción entre el usuario y el producto.'

  return (
    <article
      className={ Career === 'frontend' ? styles.CareerCard : styles.CareerCardUi }
      data-aos={aosAnimation}
    >
      <h2 className={styles.CareerCard__specialty}>
        { Career === 'frontend' ? 'Desarrollo' : 'Diseño' }
      </h2>
      <h3 className={styles.CareerCard__title}>
        { Career === 'frontend' ? 'Desarrollo Web' : 'Diseño UI' }
      </h3>
      <picture className={styles.CareerCard__imageWrapper}>
        <source
          srcSet={ Career === 'frontend' ? frontendImageDesktop : uIImageDesktop }
          media="(min-width: 1280px)"
        />
        <img
          className={styles.CareerCard__image}
          width="135"
          height="102"
          src={ Career === 'frontend' ? frontendImageMobile : uIImageMobile }
          alt="Ilustración de persona desarrollando un sitio web"
        />
      </picture>
      <p className={styles.CareerCard__description}>
        { Career === 'frontend' ? frontendDescription : uIDescription }</p>
    </article>
  )
}
