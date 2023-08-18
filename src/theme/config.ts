import { ThemeOptions } from '@mui/material';

export const themeConfig: ThemeOptions = {
  palette: {
    primary: {
      main: '#35694F',
      dark: "#0A2819",
      light: "#55A37C",
    },
    secondary: {
      main: "#C1D9CD",
      light: "#DAE8E1"
    },
    background: {
      default: '#F7FDFA',
    },
  },
  typography: {
    body2: {
      fontSize: "15px",
      fontWeight: 400,
    },
    h4: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '35px',
      lineHeight: '42px',
      letterSpacing: '0.25px',
    },
    inputLabel: {
      fontWeight: 700,
      fontSize: "20px",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 600,
      desktop: 944,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: false
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFF",
          '&.MuiOutlinedInput-root': {
            '& fieldset': {
              border: "1.5px solid #35694F",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            },
            '&.Mui-focused fieldset': {
              border: "3px solid #35694F",
            },
            '&.Mui-error fieldset': {
              border: "1.5px solid #F00",
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: "13px 0 0"
        }
      }
    }
  }
};
