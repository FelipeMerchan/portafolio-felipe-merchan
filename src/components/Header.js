import React from 'react'
import Link from 'next/link'

import { ButtonPrimary } from './ButtonPrimary'
import styles from '../assets/styles/components/Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.Header}>
      <div className="u-wrapper">
        <div className={styles.Header__content}>
          <figure className={styles.Header__isotipoWrapper}>
            <img
              className={styles.Header__isotipo}
              width="32"
              alt="Isotipo de Felipe Merchan"
              src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617259731/portafolio/felipe-isotipo_fndgtg.svg"
            />
          </figure>
          <ButtonPrimary>Descargar CV</ButtonPrimary>
        </div>
      </div>
    </header>
  )
}
