import React from 'react'

import styles from '../assets/styles/components/Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.Footer} id="contacto">
      <div className="wrapper">
        <div className={styles.Footer__content}>
          <h2 className={styles.Footer__title}>Contáctame</h2>
          <h3 className={styles.Footer__subtitle}>¿Algún proyecto en mente? Conversemos</h3>
          <a className={styles.Footer__email} href="mailto:felipemerchanfuquen@gmail.com">felipemerchanfuquen@gmail.com</a>
          <div className={styles.Footer__social}>
            <a
              href="https://www.instagram.com/felipemerchan.col/"
              target="_blank"
            ></a>
            <a
              href="https://github.com/FelipeMerchan"
              target="_blank"
            ></a>
            <a
              href="https://www.linkedin.com/in/felipe-merchan-frontend-developer/"
              target="_blank"
            ></a>
          </div>
          <figure className={styles.Footer__brandWrapper}>
            <img
              className={styles.Footer__brand}
              src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617351156/portafolio/felipe-isotipo-blanco_p5krzj.svg"
              width="32"
              alt="Isotipo de Felipe Merchan"
            />
          </figure>
        </div>
      </div>
    </footer>
  )
}
