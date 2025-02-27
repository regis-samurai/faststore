import React, { forwardRef } from 'react'
import type { ElementType, ReactElement } from 'react'
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../../typings'

type LinkBaseProps = {
  /**
   * ID to find this component in testing tools (e.g.: cypress, testing library, and jest).
   */
  testId?: string
  /**
 * Specifies the component variant.
 */
  variant?: 'default' | 'display' | 'inline'
  /**
  * Defines use of inverted color.
  */
  inverse?: boolean
  /**
   * Defines size os element
   */
  size?: 'small' | 'regular'
}

export type LinkElementType = ElementType

export type LinkProps<C extends LinkElementType = 'a'> = PolymorphicComponentPropsWithRef<
  C,
  LinkBaseProps
>

type LinkComponent = <C extends LinkElementType = 'a'>(
  props: LinkProps<C>
) => ReactElement | null

const Link: LinkComponent = forwardRef(function Link<
  C extends LinkElementType = 'a'
>(
  { as, children, variant = 'default', size="regular", inverse, testId = 'fs-link', ...otherProps }: LinkProps<C>,
  ref?: PolymorphicRef<C>
) {

  const Component = as ?? 'a'

  return (
    <Component 
      ref={ref} 
      data-fs-link 
      data-fs-link-variant={variant}
      data-fs-link-inverse={inverse}
      data-fs-link-size={size}
      data-testid={testId} 
      {...otherProps}
    >
      {children}
    </Component>
  )
})

export default Link
