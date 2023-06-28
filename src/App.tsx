import { ThemeProvider } from 'styled-components';
import { Layout } from './Layout';
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from './styles/themes/default';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Layout />
    </ThemeProvider>
  )
}
