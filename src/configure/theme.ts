import { createMuiTheme, ThemeOptions } from "@material-ui/core";
import { AppThemes } from "../store/AppTheme";

export interface StyledComponent<CO extends (...args: any[]) => any> {
  classes?: Partial<ReturnType<CO>>;
}

const baseThemeStyles: ThemeOptions  = {
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html': {
          fontSize: 16,
        },
      },
    },
    MuiDialog: {
      paper: {
        width: '100%',
      }
    }
  },
};

const defaultThemeStyles: ThemeOptions = {
  ...baseThemeStyles,
  overrides: {
    ...baseThemeStyles.overrides,
  },
};

const darkThemeStyles: ThemeOptions = {
  ...baseThemeStyles,
  "palette": {
    "common": {
      "black":"#000",
      "white":"#fff"
    },
    "background": {
      "paper":"rgba(18, 18, 38, 1)",
      "default":"rgba(31, 32, 65, 1)"
    },
    "primary": {
      "light":"rgba(252, 208, 117, 1)",
      "main":"rgba(255, 200, 87, 1)",
      "dark":"rgba(230, 180, 78, 1)",
      "contrastText":"#fff"
    },
    "secondary": {
      "light":"rgba(22, 191, 200, 1)",
      "main":"rgba(17, 157, 164, 1)",
      "dark":"rgba(14, 128, 133, 1)",
      "contrastText":"#fff"
    },
    "error": {
      "light":"#e57373",
      "main":"#f44336",
      "dark":"#d32f2f",
      "contrastText":"#fff"
    },
    "text": {
      "primary":"rgba(255, 200, 87, 1)",
      "secondary":"rgba(17, 157, 164, 1)",
      "disabled":"rgba(255, 255, 255, 0.38)",
      "hint":"rgba(75, 63, 114, 1)"
    }
  },
  // palette: {
  //   primary: {
  //     main: '#121858',
  //   },
  //   secondary: {
  //     main: '#7d5fb2',
  //   },
  //   background: {
  //     default: '#1a237e',
  //     paper: '#121858',
  //   },
  //   text: {
  //     primary: '#ffffff',
  //     secondary: '#cccccc'
  //   }
  // },
  
  overrides: {
    ...baseThemeStyles.overrides,
    MuiCssBaseline: {
      '@global': {
        'html': {
          fontSize: 16,
        },
      },
    },
    MuiListItemIcon: {
      root: {
        color: '#cccccc',
      }
    }
  },
};

export const getTheme = (theme: AppThemes) => {
  switch(theme){
    case 'dark':
      return createMuiTheme(darkThemeStyles);
    default:
      return createMuiTheme(defaultThemeStyles)
  }
}