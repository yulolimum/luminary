import type { ComponentProps, ComponentType } from 'react'
import { View, type ViewProps } from 'react-native'

import { useThemeStyleProps } from '@/hooks/useThemeStyleProps'
import type { ThemeViewStyleProps } from '@/utils/style-props'

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
