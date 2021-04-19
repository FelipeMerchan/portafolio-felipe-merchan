import React from 'react'

import { Project } from './Project'
import styles from '../assets/styles/components/Testimonials.module.scss'

import { TestimonialsCarousel } from './TestimonialsCarousel'
import { TestimonialsCarouselItem } from './TestimonialsCarouselItem'
import data from '../../data.json'

export const Testimonials = () => {
  return (
    <section className={styles.Testimonials}>
      <div className="u-wrapper">
        <div className={styles.Testimonials__content}>
          <div>
            <h2 className={styles.Testimonials__title}>Testimoniales</h2>
            <h3
              className={styles.Testimonials__subtitle}
              data-aos="fade-up"
              data-aos-duration="1500"
            >Qué dicen mis compañeros sobre mí</h3>
          </div>
          <TestimonialsCarousel>
            {
              data.testimonials.map(testimony =>
                <TestimonialsCarouselItem
                  key={testimony.id}
                  {...testimony}
                />
              )
            }
          </TestimonialsCarousel>
        </div>
      </div>
    </section>
  )
}
