type FontSizes = keyof typeof fontSize
type LineHeights = keyof typeof lineHeight

const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
} as const

const lineHeight = {
  xs: 1.4,
  sm: 1.45,
  md: 1.55,
  lg: 1.6,
  xl: 1.65,
}

export { fontSize, lineHeight }
export type { FontSizes, LineHeights }
