import {createTheme, ThemeProvider, Theme} from "@mui/material";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#EA5347',
    },
    secondary: {
      main: '#00FF00', // todo make secondary color good
    },
  },
  typography: {
    allVariants: {
      color: 'rgba(27, 31, 59, 0.8)',
    },
    fontFamily: [
      'Manrope', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    ].join(','),
  }
});

export const decorators = [(Story) => {
  return (
      <ThemeProvider theme={theme}>
          <Story />
      </ThemeProvider>
  );
}];
