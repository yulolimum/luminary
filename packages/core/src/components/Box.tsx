import type { ThemeViewStyleProps } from '@luminary/theme'
import type { ComponentProps, ComponentType } from 'react'
import type { ViewProps } from 'react-native'

import { useThemeStyleProps } from '@luminary/theme'
import { View } from 'react-native'

type BoxProps<C extends ComponentType> = Omit<ComponentProps<C>, 'as'> & {
  as?: C
} & ThemeViewStyleProps

function Box<C extends ComponentType = ComponentType<ViewProps>>(props: BoxProps<C>) {
  const { as: Component = View, ...restProps } = props

  const $themed = useThemeStyleProps(restProps)
  const $style = [$themed, (restProps as ViewProps).style]

  return <Component {...restProps} style={$style} />
}

export { Box }
export type { BoxProps }
