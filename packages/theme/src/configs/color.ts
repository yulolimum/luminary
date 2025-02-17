import type { Range } from '../utils/types'

type PrimitiveKeys = keyof typeof primitiveColors
type SinglePrimitiveKeys = 'transparent' | 'white' | 'black'
type TuplePrimitiveKeys = Exclude<PrimitiveKeys, SinglePrimitiveKeys>
type TupleShades = Range<0, 9>
type TuplePaths = `${TuplePrimitiveKeys}.${TupleShades}`
type SemanticKeys = keyof typeof semanticColors

type Colors = PrimitiveKeys | SemanticKeys | TuplePaths | `primary.${TupleShades}` | `secondary.${TupleShades}`

// prettier-ignore
const primitiveColors = {
  transparent: "#00000000",
  white: '#ffffff',
  black: '#000000',
  gray: ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529'],
  red: ['#fff5f5', '#ffe3e3', '#ffc9c9', '#ffa8a8', '#ff8787', '#ff6b6b', '#fa5252', '#f03e3e', '#e03131', '#c92a2a'],
  pink: ['#fff0f6', '#ffdeeb', '#fcc2d7', '#faa2c1', '#f783ac', '#f06595', '#e64980', '#d6336c', '#c2255c', '#a61e4d'],
  grape: ['#f8f0fc', '#f3d9fa', '#eebefa', '#e599f7', '#da77f2', '#cc5de8', '#be4bdb', '#ae3ec9', '#9c36b5', '#862e9c'],
  violet: ['#f3f0ff', '#e5dbff', '#d0bfff', '#b197fc', '#9775fa', '#845ef7', '#7950f2', '#7048e8', '#6741d9', '#5f3dc4'],
  indigo: ['#edf2ff', '#dbe4ff', '#bac8ff', '#91a7ff', '#748ffc', '#5c7cfa', '#4c6ef5', '#4263eb', '#3b5bdb', '#364fc7'],
  blue: ['#e7f5ff', '#d0ebff', '#a5d8ff', '#74c0fc', '#4dabf7', '#339af0', '#228be6', '#1c7ed6', '#1971c2', '#1864ab'],
  cyan: ['#e3fafc', '#c5f6fa', '#99e9f2', '#66d9e8', '#3bc9db', '#22b8cf', '#15aabf', '#1098ad', '#0c8599', '#0b7285'],
  teal: ['#e6fcf5', '#c3fae8', '#96f2d7', '#63e6be', '#38d9a9', '#20c997', '#12b886', '#0ca678', '#099268', '#087f5b'],
  green: ['#ebfbee', '#d3f9d8', '#b2f2bb', '#8ce99a', '#69db7c', '#51cf66', '#40c057', '#37b24d', '#2f9e44', '#2b8a3e'],
  lime: ['#f4fce3', '#e9fac8', '#d8f5a2', '#c0eb75', '#a9e34b', '#94d82d', '#82c91e', '#74b816', '#66a80f', '#5c940d'],
  yellow: ['#fff9db', '#fff3bf', '#ffec99', '#ffe066', '#ffd43b', '#fcc419', '#fab005', '#f59f00', '#f08c00', '#e67700'],
  orange: ['#fff4e6', '#ffe8cc', '#ffd8a8', '#ffc078', '#ffa94d', '#ff922b', '#fd7e14', '#f76707', '#e8590c', '#d9480f'],
  dark: ['#C9C9C9', '#B8B8B8', '#828282', '#696969', '#424242', '#3B3B3B', '#2E2E2E', '#242424', '#1F1F1F', '#141414'],
} as const

const semanticColors = {
  primary: 'blue',
  secondary: 'violet',
  disabled: 'gray',
  error: 'red',
  warning: 'orange',
  success: 'teal',
  info: 'cyan',
} as const satisfies Record<string, PrimitiveKeys | TuplePaths> & { primary: PrimitiveKeys; secondary: PrimitiveKeys }

const defaultShade: TupleShades = 6

//  prettier-ignore
const hexAlphaSuffixes = ['00', '03', '05', '08', '0A', '0D', '0F', '12', '14', '17', '1A', '1C', '1F', '21', '24', '26', '29', '2B', '2E', '30', '33', '36', '38', '3B', '3D', '40', '42', '45', '47', '4A', '4D', '4F', '52', '54', '57', '59', '5C', '5E', '61', '63', '66', '69', '6B', '6E', '70', '73', '75', '78', '7A', '7D', '80', '82', '85', '87', '8A', '8C', '8F', '91', '94', '96', '99', '9C', '9E', 'A1', 'A3', 'A6', 'A8', 'AB', 'AD', 'B0', 'B3', 'B5', 'B8', 'BA', 'BD', 'BF', 'C2', 'C4', 'C7', 'C9', 'CC', 'CF', 'D1', 'D4', 'D6', 'D9', 'DB', 'DE', 'E0', 'E3', 'E6', 'E8', 'EB', 'ED', 'F0', 'F2', 'F5', 'F7', 'FA', 'FC', 'FF'] as const

export { defaultShade, hexAlphaSuffixes, primitiveColors, semanticColors }
export type { Colors, PrimitiveKeys, SemanticKeys, SinglePrimitiveKeys, TuplePaths, TuplePrimitiveKeys, TupleShades }
