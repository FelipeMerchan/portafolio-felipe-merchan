import React from 'react'

import styles from '../assets/styles/components/TestimonialsCarouselItem.module.scss'

export const TestimonialsCarouselItem = ({ image, name, abstract, testimony, company  }) => {
  return (
    <article className={styles.TestimonialsCarouselItem}>
      <figure className={styles.TestimonialsCarouselItem__imageWrapper}>
        <img
          className={styles.TestimonialsCarouselItem__image}
          src={image}
          width="62"
          height="62"
          loading="lazy"
          alt={name}
        />
      </figure>
      <h4 className={styles.TestimonialsCarouselItem__abstract}>{abstract}</h4>
      <p className={styles.TestimonialsCarouselItem__testimony}>{testimony}</p>
      <span className={styles.TestimonialsCarouselItem__name}>{name}</span>
      <span className={styles.TestimonialsCarouselItem__company}>{company}</span>
    </article>
  )
}