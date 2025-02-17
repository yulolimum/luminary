import { useMemo } from 'react'

import { stylePropKeyMap, stylePropValueMap, type ThemeStyleProps } from '@/utils/style-props'

function useThemeStyleProps<P extends ThemeStyleProps>(props: P) {
  return useMemo(() => {
    const styles: Record<string, any> = {}

    for (const key of Object.keys(props) as (keyof ThemeStyleProps)[]) {
      const styleKey = stylePropKeyMap[key]

      if (!styleKey) continue

      const value = props[key]

      styles[styleKey] = stylePropValueMap(key, value)
    }

    return styles
  }, [
    props.m,
    props.mt,
    props.mb,
    props.ml,
    props.mr,
    props.ms,
    props.me,
    props.mx,
    props.my,
    props.p,
    props.pt,
    props.pb,
    props.pl,
    props.pr,
    props.ps,
    props.pe,
    props.px,
    props.py,
    props.flex,
    props.display,
    props.grow,
    props.shrink,
    props.basis,
    props.wrap,
    props.direction,
    props.align,
    props.justify,
    props.rowGap,
    props.colGap,
    props.gap,
    props.self,
    props.pos,
    props.top,
    props.left,
    props.bottom,
    props.right,
    props.inset,
    props.w,
    props.miw,
    props.maw,
    props.h,
    props.mih,
    props.mah,
    props.bw,
    props.bbw,
    props.btw,
    props.blw,
    props.brw,
    props.bg,
    props.bd,
    props.radius,
    props.opacity,
    props.events,
    props.c,
    props.ff,
    props.fw,
    props.fs,
    props.lh,
    props.ta,
    props.ls,
    props.tt,
    props.td,
    props.tdl,
    props.tds,
    props.tint,
  ])
}

export { useThemeStyleProps }
