import React, { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'

export interface HeroProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * ID to find this component in testing tools (e.g.: cypress,
   * testing-library, and jest).
   */
  testId?: string
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(function Hero(
  { testId = 'store-hero', children, ...otherProps },
  ref
) {
  return (
    <article ref={ref} data-fs-hero data-testid={testId} {...otherProps}>
      {children}
    </article>
  )
})

export default Hero
