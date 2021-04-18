import React from 'react'

import styles from '../assets/styles/components/Clients.module.scss'

export const Clients = () => {
  return (
    <section className={styles.Clients}>
      <div className="u-wrapper">
        <div className={styles.Clients__content}>
          <div>
            <h2 className={styles.Clients__title}>Clientes previos</h2>
            <h3 className={styles.Clients__subtitle}>He tenido el placer de trabajar con marcas como:</h3>
          </div>
          <div>
            <div>
              <figure className={styles.Clients__brandsWrapper}>
                <img
                  className={styles.Clients__brands}
                  src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617342598/portafolio/leo-burnett-logotipo_cbssek.svg"
                  width="166"
                  height="50"
                  loading="lazy"
                  alt="Logotipo de Leo Burnett"
                />
              </figure>
              <figure className={styles.Clients__brandsWrapper}>
                <img
                  className={styles.Clients__brands}
                  src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1617342678/portafolio/pfizer-imagotipo_nwgcc4.svg"
                  width="166"
                  height="50"
                  loading="lazy"
                  alt="Imagotipo de Pfizer"
                />
              </figure>
            </div>
            <p className={styles.Clients__description}>Siempre mantengo un contacto cercano con las empresas y las personas que trabajaron conmigo para asegurarme de cultivar mis relaciones.</p>
          </div>
        </div>
      </div>
    </section>
  )
}