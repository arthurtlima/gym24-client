// import original module declarations
import 'styled-components';

import theme from '@/styles/theme';

// type inference
type Theme = typeof theme

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
} 