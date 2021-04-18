import React from 'react'
import Link from 'next/link'

import { ButtonDownload } from './ButtonDownload'
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
              height="46"
              alt="Isotipo de Felipe Merchan"
              src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617259731/portafolio/felipe-isotipo_fndgtg.svg"
            />
          </figure>
          <ButtonDownload
            link="https://drive.google.com/file/d/1vbjZH2UHV3qWzIspGJPt8c4cYoM6VXK7/view?usp=sharing"
          >
            Descargar CV
          </ButtonDownload>
        </div>
      </div>
    </header>
  )
}
