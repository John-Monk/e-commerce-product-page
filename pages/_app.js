import GlobalStyle from '@/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

const defaultTheme = {
  colors: {
    veryDarkBlue: 'hsl(220, 13%, 13%)',
    darkGrayBlue:  'hsl(219, 9%, 45%)',
    grayBlue: 'hsl(220, 14%, 75%)',
    lightGrayBlue: 'hsl(223, 64%, 98%)',
    white: 'hsl(0, 0%, 100%)',
    black: 'hsl(0, 0%, 0%)',
    orange: 'rgb(255, 125, 27)',
  },
};

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} theme={theme} />
      </ThemeProvider>
    </>
  );
}