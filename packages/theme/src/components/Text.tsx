import type { ComponentProps } from 'react'
import React from 'react'
import type { TextProps as RNTextProps } from 'react-native'
import { Text as RNText } from 'react-native'
import Animated from 'react-native-reanimated'

import { useThemeStyleProps } from '@/hooks/useThemeStyleProps'
import type { ThemeTextStyleProps } from '@/utils/style-props'

interface AnimatedTextProps extends ComponentProps<typeof Animated.Text>, ThemeTextStyleProps {
  animated?: true
}

interface PlainTextProps extends RNTextProps, ThemeTextStyleProps {
  animated?: false
}

type TextProps = AnimatedTextProps | PlainTextProps

function Text(props: TextProps) {
  const { animated, style, ...restProps } = props

  const $themed = useThemeStyleProps(restProps)
  const $style = [$themed, style]

  if (animated) {
    return <Animated.Text style={$style as AnimatedTextProps['style']} {...restProps} />
  } else {
    return <RNText style={$style as PlainTextProps['style']} {...(restProps as PlainTextProps)} />
  }
}

export { Text }
export type { TextProps }
