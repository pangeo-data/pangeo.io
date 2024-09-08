import { extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/theme'
import '@fontsource-variable/inter'

// color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const fonts = {
  body: "'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  heading: "'Inter Variable', 'Work Sans', system-ui, sans-serif",
}

export const customTheme = extendTheme(
  {
    colors: {
      blue: {
        500: '#1D3D64',
        300: '#2B646C',
      },
      green: {
        500: '#439666',
      },
    },
    config: config,
    fonts: fonts,
    styles: {
      global: {
        html: { scrollBehavior: 'smooth' },
      },
    },
  },
  theme,
)
