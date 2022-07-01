const theme = {
  fonts: {
    body: "Roboto, sans-serif",
    navbar: "Impact, Arial, sans-serif",
  },
  fontWeight: {
    body: "400",
    bold: "700",
  },
  colors: {
    primary: "#ffb510",
    secondary: "#212529",
    background: "#fff",
    navLink: "#dae0e5",
  },
  sizes: {
    navbarHeight: "4rem",
  },
  space: {
    // define margin and padding here
  },
  styles: {
    h1: {
      paddingTop: "72px",
      textAlign: "center",
      fontWeight: 300,
      marginBottom: "30px",
      position: "relative",
      width: "100%",
      "&::after": {
        backgroundColor: "primary",
        borderRadius: "2px",
        bottom: "-10px",
        content: "''",
        height: "4px",
        left: "40%",
        position: "absolute",
        right: "40%",
      },
    },
  },
};

export default theme;
