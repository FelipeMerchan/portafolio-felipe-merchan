import React from 'react'


import styles from '../assets/styles/components/Project.module.scss'

export const Project = ({ imageMobile, imageTablet, imageDesktop, altText, name, specialty, link, aosAnimation }) => {
  return (
    <article className={styles.Project} data-aos={aosAnimation}>
      <picture>
        <source
            srcSet={imageDesktop}
            media="(min-width: 1023px)"
          />
          <source
            srcSet={imageTablet}
            media="(min-width: 767px)"
          />
        <img
          className={styles.Project__image}
          src={imageMobile}
          width="343"
          height="400"
          loading="lazy"
          alt={altText}
        />
      </picture>
      <span className={styles.Project__name}>{name}</span>
      <span className={styles.Project__specialty}>{specialty}</span>
      <a
        className={styles.Project__link}
        href={link}
        target="_blank"
        aria-label={altText}
        title={altText}
      ></a>
    </article>
  )
}