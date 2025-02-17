import { defaultShade, hexAlphaSuffixes, primitiveColors, semanticColors } from '@/configs/color'

import { color, colorWithAlpha } from './colors'

describe('color() function', () => {
  test('should return `undefined` if `path` is falsy', () => {
    expect(color(undefined)).toBeUndefined()
    expect(color(null)).toBeUndefined()
  })

  test('should return the color value if `path` is semantic color key ', () => {
    expect(color('primary')).toBe(primitiveColors[semanticColors.primary][defaultShade])
    expect(color('secondary')).toBe(primitiveColors[semanticColors.secondary][defaultShade])
    expect(color('disabled')).toBe(primitiveColors[semanticColors.disabled][defaultShade])
    expect(color('error')).toBe(primitiveColors[semanticColors.error][defaultShade])
    expect(color('warning')).toBe(primitiveColors[semanticColors.warning][defaultShade])
    expect(color('success')).toBe(primitiveColors[semanticColors.success][defaultShade])
    expect(color('info')).toBe(primitiveColors[semanticColors.info][defaultShade])
  })

  test('should return the color value if `path` is semantic color key with shade index', () => {
    expect(color('primary.5')).toBe(primitiveColors[semanticColors.primary][5])
    expect(color('secondary.5')).toBe(primitiveColors[semanticColors.secondary][5])
  })

  test('should return the color value if `path` is primitive color key', () => {
    expect(color('transparent')).toBe(primitiveColors.transparent)
    expect(color('white')).toBe(primitiveColors.white)
    expect(color('black')).toBe(primitiveColors.black)
    expect(color('gray')).toBe(primitiveColors.gray[defaultShade])
    expect(color('red')).toBe(primitiveColors.red[defaultShade])
    expect(color('pink')).toBe(primitiveColors.pink[defaultShade])
    expect(color('grape')).toBe(primitiveColors.grape[defaultShade])
    expect(color('violet')).toBe(primitiveColors.violet[defaultShade])
    expect(color('indigo')).toBe(primitiveColors.indigo[defaultShade])
    expect(color('blue')).toBe(primitiveColors.blue[defaultShade])
    expect(color('cyan')).toBe(primitiveColors.cyan[defaultShade])
    expect(color('teal')).toBe(primitiveColors.teal[defaultShade])
    expect(color('green')).toBe(primitiveColors.green[defaultShade])
    expect(color('lime')).toBe(primitiveColors.lime[defaultShade])
    expect(color('yellow')).toBe(primitiveColors.yellow[defaultShade])
    expect(color('orange')).toBe(primitiveColors.orange[defaultShade])
    expect(color('dark')).toBe(primitiveColors.dark[defaultShade])
  })

  test('should return the color value if `path` is primitive color key with shade index', () => {
    expect(color('gray.0')).toBe(primitiveColors.gray[0])
    expect(color('red.1')).toBe(primitiveColors.red[1])
    expect(color('pink.2')).toBe(primitiveColors.pink[2])
    expect(color('grape.3')).toBe(primitiveColors.grape[3])
    expect(color('violet.4')).toBe(primitiveColors.violet[4])
    expect(color('indigo.5')).toBe(primitiveColors.indigo[5])
    expect(color('blue.6')).toBe(primitiveColors.blue[6])
    expect(color('cyan.7')).toBe(primitiveColors.cyan[7])
    expect(color('teal.8')).toBe(primitiveColors.teal[8])
    expect(color('green.9')).toBe(primitiveColors.green[9])
    expect(color('lime.0')).toBe(primitiveColors.lime[0])
    expect(color('yellow.1')).toBe(primitiveColors.yellow[1])
    expect(color('orange.2')).toBe(primitiveColors.orange[2])
    expect(color('dark.3')).toBe(primitiveColors.dark[3])
  })

  test('should allow passthrough if `path` is not a valid color key', () => {
    const hex = '#ff00ff'
    const rgb = 'rgb(255, 0, 255)'
    // @ts-expect-error -- typescript correctly identifies that this is not a valid color key
    expect(color(hex)).toBe(hex)
    // @ts-expect-error -- typescript correctly identifies that this is not a valid color key
    expect(color(rgb)).toBe(rgb)
  })
})

describe('colorWithAlpha() function', () => {
  test('should return the color value with alpha if `path` a `ThemeColor`', () => {
    expect(colorWithAlpha('red', 0)).toBe(`${primitiveColors.red[defaultShade]}${hexAlphaSuffixes[0]}`)
    expect(colorWithAlpha('red.6', 50)).toBe(`${primitiveColors.red[6]}${hexAlphaSuffixes[50]}`)
    expect(colorWithAlpha('primary', 100)).toBe(
      `${primitiveColors[semanticColors.primary][defaultShade]}${hexAlphaSuffixes[100]}`,
    )
  })

  test('should return the color value with alpha if `path` is a hex color', () => {
    const hex = '#ff00ff'
    expect(colorWithAlpha(hex, 0)).toBe(`${hex}${hexAlphaSuffixes[0]}`)
    expect(colorWithAlpha(hex, 50)).toBe(`${hex}${hexAlphaSuffixes[50]}`)
    expect(colorWithAlpha(hex, 100)).toBe(`${hex}${hexAlphaSuffixes[100]}`)
  })

  test('should return the color value with alpha if `path` is a rgb color', () => {
    const rgb = 'rgb(255, 0, 255)'

    expect(colorWithAlpha(rgb, 0)).toBe(`rgba(255, 0, 255, 0)`)
    expect(colorWithAlpha(rgb, 50)).toBe(`rgba(255, 0, 255, 0.5)`)
    expect(colorWithAlpha(rgb, 100)).toBe(`rgba(255, 0, 255, 1)`)
  })

  test('should return the color value with alpha if `path` is a rgba color', () => {
    const rgba = 'rgba(255, 0, 255, 0.5)'

    expect(colorWithAlpha(rgba, 0)).toBe(`rgba(255, 0, 255, 0)`)
    expect(colorWithAlpha(rgba, 50)).toBe(`rgba(255, 0, 255, 0.5)`)
    expect(colorWithAlpha(rgba, 100)).toBe(`rgba(255, 0, 255, 1)`)
  })
})
