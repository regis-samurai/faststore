import React, { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * ID to find this component in testing tools (e.g.: cypress, testing library, and jest).
   */
  testId?: string
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton(
  { testId = 'store-skeleton', ...otherProps },
  ref
) {
  return (
    <div ref={ref} data-fs-skeleton data-testid={testId} {...otherProps} />
  )
})

export default Skeleton
