import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface Palette {
    backgroundColors?: PaletteOptions["backgroundColors"];
    textColors?: PaletteOptions["textColors"];
    greyScale?: PaletteOptions["greyScale"];
  }

  interface PaletteColor {
    buttonColor?: string;
    toggleTabs?: string;
    buttonHover?: string;
    formTabsHover?: string;
    formNumbersBg?: string;
    color?: string;
  }
  interface SimplePaletteColorOptions {
    buttonColor?: string;
    toggleTabs?: string;
    buttonHover?: string;
    formTabsHover?: string;
    formNumbersBg?: string;
    color?: string;
  }

  interface PaletteOptions {
    backgroundColors?: {
      backgrond1?: string;
      background2?: string;
    };
    textColors?: {
      contentCopyColor?: string;
      textColor2?: string;
      textColor3?: string;
      placeHolder?: string;
    };
    greyScale?: {
      borders?: string;
      mediaIcons?: string;
      btnBorderReadingTime?: string;
      iconColors?: string;
    };
  }

  // Typography changes
  interface TypographyVariants {
    subtitle3?: React.CSSProperties;
    body3?: React.CSSProperties;
    caption2?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
    body3?: React.CSSProperties;
    caption2?: React.CSSProperties;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#2ce080",
      buttonColor: "#2ce080",
      toggleTabs: "#22c870",
      buttonHover: "#20ba68",
      formTabsHover: "#e2f2e9",
    },
    secondary: {
      main: "#0365f2",
      formNumbersBg: "#c6daf8",
      color: "#0265f2",
    },
    backgroundColors: {
      backgrond1: "#F7f7f7",
      background2: "#f1f6f4",
    },
    greyScale: {
      borders: "#bac9cf",
      mediaIcons: "6c787f",
      btnBorderReadingTime: "3a4649",
      iconColors: "042330",
    },
    textColors: {
      contentCopyColor: "042330",
      textColor2: "03314b",
      textColor3: "6d787e",
      placeHolder: "747575",
    },
  },
  typography: {
    h1: {
      fontSize: "36px",
      lineHeight: "45px",
      fontWeight: "bold",
    },
    subtitle1: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: "bold",
    },
    subtitle2: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "bold",
    },
    subtitle3: {
      fontSize: "18px",
      lineHeight: "24px",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "bold",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    body3: {
      fontSize: "22px",
      lineHeight: "20px",
    },
    caption: {
      fontSize: "14px",
      lineHeight: "22px",
    },
    caption2: {
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: "bold",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        fontFamily: "Cera Pro",
      },
    },
  },
  spacing: ["4px", "8px", "12px", "16px", "20px", "24px", "32px", "48px"],
});
