import type { ComponentType } from 'react'
import { type ViewProps } from 'react-native'

import { Box, type BoxProps } from '@/components/Box'
import type { ThemeViewStyleProps } from '@/utils/style-props'

function Group<C extends ComponentType = ComponentType<ViewProps>>(props: BoxProps<C>) {
  return <Box {...$defaultProps} {...props} />
}

const $defaultProps: ThemeViewStyleProps = {
  gap: 'md',
  wrap: 'nowrap',
  direction: 'row',
  align: 'flex-start',
}

export { Group }
