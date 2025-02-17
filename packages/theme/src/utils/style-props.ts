import type { Colors } from '../configs/color'
import type { WithString } from '../utils/types'
import type { ImageStyle } from 'react-native'

import { type DimensionValue, type FlexStyle, type TextStyle, type ViewStyle } from 'react-native'

import { type Radii, radius } from '../configs/radius'
import { spacing, type Spacings } from '../configs/spacing'
import { fontSize, type FontSizes, lineHeight, type LineHeights } from '../configs/typography'
import { color } from '../utils/colors'

type ThemeSpacingProp<V, A = never> = Spacings | V | (A extends never ? never : A)

type FlexStyleProps = {
  /** Margin property */
  m?: ThemeSpacingProp<DimensionValue>
  /** Margin top property */
  mt?: ThemeSpacingProp<DimensionValue>
  /** Margin bottom property */
  mb?: ThemeSpacingProp<DimensionValue>
  /** Margin left property */
  ml?: ThemeSpacingProp<DimensionValue>
  /** Margin right property */
  mr?: ThemeSpacingProp<DimensionValue>
  /** Margin Start property */
  ms?: ThemeSpacingProp<DimensionValue>
  /** Margin End property */
  me?: ThemeSpacingProp<DimensionValue>
  /** Margin horizontal property */
  mx?: ThemeSpacingProp<DimensionValue>
  /** Margin vertical property */
  my?: ThemeSpacingProp<DimensionValue>

  /** Padding property */
  p?: ThemeSpacingProp<DimensionValue>
  /** Padding top property */
  pt?: ThemeSpacingProp<DimensionValue>
  /** Padding bottom property */
  pb?: ThemeSpacingProp<DimensionValue>
  /** Padding left property */
  pl?: ThemeSpacingProp<DimensionValue>
  /** Padding right property */
  pr?: ThemeSpacingProp<DimensionValue>
  /** Padding Start property */
  ps?: ThemeSpacingProp<DimensionValue>
  /** Padding End property */
  pe?: ThemeSpacingProp<DimensionValue>
  /** Padding horizontal property */
  px?: ThemeSpacingProp<DimensionValue>
  /** Padding vertical property */
  py?: ThemeSpacingProp<DimensionValue>

  /** Flex property */
  flex?: FlexStyle['flex']
  /** Display property */
  display?: FlexStyle['display']
  /** Flex grow property */
  grow?: FlexStyle['flexGrow']
  /** Flex shrink property */
  shrink?: FlexStyle['flexShrink']
  /** Flex basis property */
  basis?: FlexStyle['flexBasis']
  /** Flex wrap property */
  wrap?: FlexStyle['flexWrap']
  /** Flex direction property */
  direction?: FlexStyle['flexDirection']
  /** Align items property */
  align?: FlexStyle['alignItems']
  /** Justify content property */
  justify?: FlexStyle['justifyContent']
  /** Row gap property */
  rowGap?: ThemeSpacingProp<Exclude<FlexStyle['rowGap'], string>, WithString>
  /** Column gap property */
  colGap?: ThemeSpacingProp<Exclude<FlexStyle['columnGap'], string>, WithString>
  /** Gap property */
  gap?: ThemeSpacingProp<Exclude<FlexStyle['gap'], string>, WithString>
  /** Align Self property */
  self?: FlexStyle['alignSelf']

  /** Position property */
  pos?: FlexStyle['position']
  /** Top position property */
  top?: FlexStyle['top']
  /** Left position property */
  left?: FlexStyle['left']
  /** Bottom position property */
  bottom?: FlexStyle['bottom']
  /** Right position property */
  right?: FlexStyle['right']
  /** Inset property */
  inset?: FlexStyle['inset']

  /** Width property */
  w?: ThemeSpacingProp<DimensionValue>
  /** Minimum width property */
  miw?: ThemeSpacingProp<DimensionValue>
  /** Maximum width property */
  maw?: ThemeSpacingProp<DimensionValue>
  /** Height property */
  h?: ThemeSpacingProp<DimensionValue>
  /** Minimum height property */
  mih?: ThemeSpacingProp<DimensionValue>
  /** Maximum height property */
  mah?: ThemeSpacingProp<DimensionValue>
  /** Aspect property */
  aspect?: FlexStyle['aspectRatio']

  /** Border width property */
  bw?: ViewStyle['borderWidth']
  /** Border bottom width property */
  bbw?: ViewStyle['borderBottomWidth']
  /** Border top width property */
  btw?: ViewStyle['borderTopWidth']
  /** Border left width property */
  blw?: ViewStyle['borderLeftWidth']
  /** Border right width property */
  brw?: ViewStyle['borderRightWidth']
}

type ViewStyleProps = {
  /** Background color property */
  bg?: Colors
  /** Border color property */
  bd?: Colors
  /** Border radius property */
  radius?: Radii | Exclude<ViewStyle['borderRadius'], string> | WithString
  /** Opacity property */
  opacity?: ViewStyle['opacity']
  /** Pointer Events property */
  events?: ViewStyle['pointerEvents']
}

type TextStyleProps = {
  /** Text color property */
  c?: Colors
  /**
   * Font property
   * @todo Add support for font weight
   */
  ff?: never
  /**
   * Font weight property
   * @todo Add support for font weight
   */
  fw?: never
  /** Font size property */
  fs?: TextStyle['fontSize'] | FontSizes
  /** Line height property */
  lh?: TextStyle['fontSize'] | LineHeights
  /** Text align property */
  ta?: TextStyle['textAlign']
  /** Letter spacing property */
  ls?: TextStyle['letterSpacing']
  /** Text transform property */
  tt?: TextStyle['textTransform']
  /** Text decoration property */
  td?: TextStyle['textDecorationColor']
  /** Text decoration line property */
  tdl?: TextStyle['textDecorationLine']
  /** Text decoration style property */
  tds?: TextStyle['textDecorationStyle']
}

type ImageStyleProps = {
  /** Tint color property */
  tint?: Colors
}

type ThemeStyleProps = FlexStyleProps & ViewStyleProps & TextStyleProps & ImageStyleProps
type ThemeTextStyleProps = FlexStyleProps & TextStyleProps & ViewStyleProps
type ThemeImageStyleProps = FlexStyleProps & ImageStyleProps & Omit<ViewStyleProps, 'events'>
type ThemeViewStyleProps = FlexStyleProps & ViewStyleProps

const stylePropKeyMap: Record<keyof ThemeStyleProps, keyof TextStyle | keyof ImageStyle> = {
  // margin
  m: 'margin',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  ms: 'marginStart',
  me: 'marginEnd',
  mx: 'marginHorizontal',
  my: 'marginVertical',

  // padding
  p: 'padding',
  pt: 'paddingTop',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  ps: 'paddingStart',
  pe: 'paddingEnd',
  px: 'paddingHorizontal',
  py: 'paddingVertical',

  // flex
  flex: 'flex',
  display: 'display',
  grow: 'flexGrow',
  shrink: 'flexShrink',
  basis: 'flexBasis',
  wrap: 'flexWrap',
  direction: 'flexDirection',
  align: 'alignItems',
  justify: 'justifyContent',
  rowGap: 'rowGap',
  colGap: 'columnGap',
  gap: 'gap',
  self: 'alignSelf',

  // position
  pos: 'position',
  top: 'top',
  left: 'left',
  bottom: 'bottom',
  right: 'right',
  inset: 'inset',

  // size
  w: 'width',
  miw: 'minWidth',
  maw: 'maxWidth',
  h: 'height',
  mih: 'minHeight',
  mah: 'maxHeight',
  aspect: 'aspectRatio',

  // border
  bw: 'borderWidth',
  bbw: 'borderBottomWidth',
  btw: 'borderTopWidth',
  blw: 'borderLeftWidth',
  brw: 'borderRightWidth',

  // view styles
  bg: 'backgroundColor',
  bd: 'borderColor',
  radius: 'borderRadius',
  opacity: 'opacity',
  events: 'pointerEvents',

  // text styles
  c: 'color',
  ff: 'fontFamily',
  fw: 'fontWeight',
  fs: 'fontSize',
  lh: 'lineHeight',
  ta: 'textAlign',
  ls: 'letterSpacing',
  tt: 'textTransform',
  td: 'textDecorationColor',
  tdl: 'textDecorationLine',
  tds: 'textDecorationStyle',

  // image styles
  tint: 'tintColor',
}

function stylePropValueMap(key: keyof ThemeStyleProps, value: ThemeStyleProps[keyof ThemeStyleProps]) {
  switch (key) {
    case 'm':
    case 'mt':
    case 'mb':
    case 'ml':
    case 'mr':
    case 'ms':
    case 'me':
    case 'mx':
    case 'my':
    case 'p':
    case 'pt':
    case 'pb':
    case 'pl':
    case 'pr':
    case 'ps':
    case 'pe':
    case 'px':
    case 'py':
    case 'rowGap':
    case 'colGap':
    case 'gap':
    case 'w':
    case 'miw':
    case 'maw':
    case 'h':
    case 'mih':
    case 'mah':
      return spacing[value as Spacings] ?? value

    case 'bg':
    case 'bd':
    case 'c':
    case 'tint':
      return color(value as Colors)

    case 'radius':
      return radius[value as Radii] ?? value

    case 'fs':
      return fontSize[value as FontSizes] ?? value

    case 'lh':
      return lineHeight[value as LineHeights] ?? value

    // case 'ff':
    // case 'fw':
    //   return font(value as ThemeFontPaths)

    default:
      return value
  }
}

export { stylePropKeyMap, stylePropValueMap }
export type { ThemeImageStyleProps, ThemeStyleProps, ThemeTextStyleProps, ThemeViewStyleProps }
