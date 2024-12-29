import { createTheme, TableCell, ThemeProvider } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import "@fontsource/sonsie-one";
import "@fontsource/raleway";
import "@fontsource/noto-serif";
import { Table, TableRow } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Palette from "./Components/Palette";

const theme = createTheme({});
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: Palette.main.darkBackground,
    color: Palette.main.lightYellow,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    outline: "10px solid",
    outlineOffset: "-10px",
    outlineColor: Palette.main.lightYellow,
    // borderRadius: "5px",

    "-webkit-touch-callout": "none" /* iOS Safari */,
    "-webkit-user-select": "none" /* Safari */,
    "-khtml-user-select": "none" /* Konqueror HTML */,
    "-moz-user-select": "none" /* Old versions of Firefox */,
    "-ms-user-select": "none" /* Internet Explorer/Edge */,
    userSelect: "none" /* Non-prefixed version, currently*/,
  },

  mainTextContainer: {
    fontFamily: "Sonsie One",
    fontSize: "calc(50px + 5vw);",
    paddingTop: "calc(50px + 2vw);",
  },

  subtitleTextContainer: {
    fontFamily: "Raleway",
    fontSize: "calc(20px + 0.5vw);",
    paddingTop: "calc(20px + 2vw);",
    fontWeight: "bold",
  },

  ipaTextContainer: {
    fontFamily: "Noto Serif",
    fontSize: "calc(10px + 1vw);",
    paddingTop: "calc(5px + 0.25vw);",
    fontWeight: "bold",
  },

  contactMeContainer: {
    paddingTop: "calc(75px + 0.25vw + 15vh);",
  },

  iconColor: {
    color: Palette.main.lightYellow,
  },

  bottomTextContainer: {
    fontFamily: "Sonsie One",
    position: "absolute",
    color: Palette.main.lightBlue,
    width: "2rem",
    right: "10vw",
    bottom: "5vh",
  },

  tableCellCustomColor: {
    borderColor: Palette.main.flashyPink + " !important",
    borderWidth: "1px",
    "&:hover": {
      borderWidth: "5px",
    }
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.mainContainer}>
        <div className={classes.mainTextContainer}>hey,</div>
        <div className={classes.subtitleTextContainer}>I'm Renaud.</div>
        <div className={classes.ipaTextContainer}>/ʁəno/</div>

        <div className={classes.contactMeContainer}>
          <Table>
            <TableRow>
              <a href="mailto:renaudmorinwork@gmail.com" target="_blank" rel="noreferrer">
                <TableCell className={classes.tableCellCustomColor} >
                  <EmailIcon className={classes.iconColor} />
                </TableCell>
              </a>
              <a href="https://github.com/RenaldMorino" target="_blank" rel="noreferrer">
                <TableCell className={classes.tableCellCustomColor}>
                  <GitHubIcon className={classes.iconColor} />
                </TableCell>
              </a>
              <a href="https://twitter.com/RenaldiniMorino" target="_blank" rel="noreferrer">
                <TableCell className={classes.tableCellCustomColor}>
                  <TwitterIcon className={classes.iconColor} />
                </TableCell>
              </a>
              <a href="https://www.linkedin.com/in/renaud-morin-b6a9b113a/" target="_blank" rel="noreferrer">
                <TableCell className={classes.tableCellCustomColor}>
                  <LinkedInIcon className={classes.iconColor} />
                </TableCell>
              </a>
            </TableRow>
          </Table>
        </div>
        <div className={classes.bottomTextContainer}>boo</div>
      </div>
    </ThemeProvider>
  );
};

export default App;
