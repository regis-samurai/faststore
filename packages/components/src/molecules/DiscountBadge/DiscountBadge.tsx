import React from 'react'
import { Badge } from '../..'

import { useDiscountPercent } from '../DiscountBadge/useDiscountPercent'

export type DiscountBadgeProps = {
  /**
   * Specifies price without discount applied.
   */
  listPrice: number
  /**
   * Specifies current price with discount applied.
   */
  spotPrice: number
  /**
   * Sets the component's size.
   */
  size?: 'small' | 'big'
  /**
   * Sets the limit percentage value to consider a low discount.
   */
  thresholdLow?: number
  /**
   * Sets the limit percentage value to consider a high discount.
   */
  thresholdHigh?: number
}

const DiscountBadge = ({
  listPrice,
  spotPrice,
  size = 'small',
  thresholdLow = 15,
  thresholdHigh = 40,
}: DiscountBadgeProps) => {
  const discountPercent = useDiscountPercent(listPrice, spotPrice)

  if (discountPercent === 0) {
    return <></>
  }

  const discountVariant =
    discountPercent <= thresholdLow
      ? 'low'
      : discountPercent <= thresholdHigh
      ? 'medium'
      : 'high'

  return (
    <Badge
      size={size}
      data-fs-discount-badge
      data-fs-discount-badge-variant={discountVariant}
    >
      {discountPercent}% off
    </Badge>
  )
}

export default DiscountBadge
