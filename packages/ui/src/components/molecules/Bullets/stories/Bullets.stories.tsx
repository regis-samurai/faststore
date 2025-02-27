import type { Story } from '@storybook/react'
import React, { useEffect, useState } from 'react'

import type { ComponentArgTypes } from '../../../../typings/utils'
import type { BulletsProps } from '../Bullets'
import Component from '../Bullets'
import mdx from './Bullets.mdx'

const BulletsTemplate: Story<BulletsProps> = ({
  onClick,
  activeBullet,
  totalQuantity,
  ariaLabelGenerator,
  testId,
}) => {
  const [localActiveBullet, setLocalActiveBullet] = useState(activeBullet)

  useEffect(() => {
    setLocalActiveBullet(activeBullet)
  }, [activeBullet, setLocalActiveBullet])

  return (
    <Component
      onClick={(e, idx) => {
        onClick?.(e, idx)
        setLocalActiveBullet(idx)
      }}
      activeBullet={localActiveBullet}
      totalQuantity={totalQuantity}
      ariaLabelGenerator={ariaLabelGenerator}
      testId={testId}
    />
  )
}

export const Bullets = BulletsTemplate.bind({})

const argTypes: ComponentArgTypes<BulletsProps> = {
  totalQuantity: {
    control: { type: 'number', min: 1 },
    defaultValue: 5,
    min: 1,
  },
  activeBullet: {
    control: { type: 'number', min: 0 },
    defaultValue: 3,
    min: 0,
  },
  onClick: {
    action: 'Bullet clicked',
    table: { disable: true },
  },
}

export default {
  title: 'Molecules/Bullets',
  component: Bullets,
  argTypes,
  parameters: {
    docs: {
      page: mdx,
    },
  },
}
