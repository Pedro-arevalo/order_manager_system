import 'styled-components'
import { globalTheme } from "../styles/themes/globalTheme";

type ThemeType = typeof globalTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType
}