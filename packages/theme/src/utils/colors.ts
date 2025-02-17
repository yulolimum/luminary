import type { ColorValue } from 'react-native'

import type { SemanticKeys, SinglePrimitiveKeys, TuplePrimitiveKeys } from '@/configs/color'
import { type Colors, defaultShade, hexAlphaSuffixes, primitiveColors, semanticColors } from '@/configs/color'

import type { Range } from './types'

function color(path: Colors | undefined | null) {
  if (!path) return

  // Handle semantic colors.
  if (path in semanticColors) {
    return color(semanticColors[path as SemanticKeys])
  }

  // Handle primitive colors.
  if (path in primitiveColors) {
    const value = primitiveColors[path as TuplePrimitiveKeys]

    if (Array.isArray(value)) {
      return value[defaultShade]
    } else {
      return value as unknown as (typeof primitiveColors)[SinglePrimitiveKeys]
    }
  }

  // Handle color with shade index.
  if (/^[a-zA-Z]+\.\d+$/.test(path)) {
    const [name, shadeStr] = path.split('.')
    const index = parseInt(shadeStr!, 10)

    if (name === 'primary') {
      return primitiveColors[semanticColors.primary][index]
    }

    if (name === 'secondary') {
      return primitiveColors[semanticColors.secondary][index]
    }

    return primitiveColors[name as TuplePrimitiveKeys][index]
  }

  return path as ColorValue
}

function colorWithAlpha(path: Colors | undefined | null | `${string}` | `rgb${string}`, opacity: Range<0, 100>) {
  // @ts-expect-error -- `${string}` is correctly not allowed by color, it'll pass through
  const c = color(path) as string

  const normalizedOpacity = Math.min(Math.max(opacity, 0), 100)

  if (c.startsWith('#')) {
    return `${c}${hexAlphaSuffixes[normalizedOpacity]}`
  }

  if (c.startsWith('rgb')) {
    const [r, g, b] = c.match(/\d+/g)!.map(Number)
    return `rgba(${r}, ${g}, ${b}, ${normalizedOpacity / 100})`
  }

  return c
}

export { color, colorWithAlpha }
