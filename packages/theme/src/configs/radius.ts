type Radii = keyof typeof radius

const radius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const

export { radius }
export type { Radii }
