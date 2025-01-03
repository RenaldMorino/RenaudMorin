// Packages
import {
  createTheme,
  TableCell,
  ThemeProvider,
  Table,
  TableRow,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import "@fontsource/sonsie-one";
import "@fontsource/raleway";
import "@fontsource/noto-serif";
import { track } from "@vercel/analytics";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Components
import Palette from "./Components/Palette";
import Konami from "react-konami-code";
import WinSound from "./Assets/Sounds/8-bit-victory-sound-101319.mp3";
import { ReactComponent as EasterEggTopRightIcon } from "./Assets/Icons/easter-egg-design.svg";
import { motion } from "framer-motion";
import KonamiModal from "./Components/KonamiModal";
import BooSoundSystem from "./Components/BooSoundSystem";

// Hooks
import useSound from "use-sound";
import { useState } from "react";

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

    "-webkit-touch-callout": "none" /* iOS Safari */,
    "-webkit-user-select": "none" /* Safari */,
    "-khtml-user-select": "none" /* Konqueror HTML */,
    "-moz-user-select": "none" /* Old versions of Firefox */,
    "-ms-user-select": "none" /* Internet Explorer/Edge */,
    userSelect: "none" /* Non-prefixed version, currently */,
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
    paddingTop: "calc(15vh - 0.25vw);",
  },

  iconColor: {
    color: Palette.main.lightYellow,
  },

  bottomTextContainer: {
    fontFamily: "Sonsie One",
    position: "absolute",
    color: Palette.main.lightBlue,
    width: "auto",
    right: "10vw",
    bottom: "5vh",
  },

  tableCellCustomColor: {
    borderColor: Palette.main.flashyPink + " !important",
    borderWidth: "1px",
    "&:hover": {
      borderWidth: "5px",
    },
  },

  easterEggTopRightIcon: {
    position: "absolute",
    top: "30px",
    right: "30px",
    width: "auto",
    height: "auto",
    cursor: "pointer",
    "& svg": {
      fill: Palette.main.lightYellow,
      width: "5rem",
      height: "5rem",
    },
  },

  easterEggDarkClicked: {
    "& svg": {
      fill: Palette.main.darkAccent + " !important",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const [playWinSound] = useSound(WinSound, { volume: 0.025 });
  const [konamiCompleted, setKonamiCompleted] = useState(false);
  const [eggClicked, setEggClicked] = useState(false);
  const [konamiModalOpened, setKonamiModalOpened] = useState(false);

  const handleKonami = () => {
    setKonamiCompleted(true);
    playWinSound();
    track("konami-code-completed");
  };

  const handleEggClick = () => {
    setEggClicked(true);
    setKonamiModalOpened(!konamiModalOpened);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.mainContainer}>
        <div className={classes.mainTextContainer}>hey,</div>
        <div className={classes.subtitleTextContainer}>I'm Renaud.</div>
        <div className={classes.ipaTextContainer}>/ʁəno/</div>

        {konamiCompleted && (
          <>
            <div
              className={`${classes.easterEggTopRightIcon} ${eggClicked ? classes.easterEggDarkClicked : ""}`}
              onClick={() => handleEggClick()}
            >
              <motion.div
                animate={{
                  rotate: !eggClicked
                    ? [0, -35, 45, -25, 35, -15, 15, -5, 5, 0]
                    : [0],
                }}
                transition={{
                  repeat: Infinity,
                  // TODO - Fix magic numbers
                  repeatDelay: Math.floor(Math.random() * (8 - 2 + 1) + 2),
                  duration: 1,
                  stiffness: 100,
                }}
              >
                <EasterEggTopRightIcon />
              </motion.div>
            </div>
            {/* <EasterEggButton className={classes.easterEggTopRightIcon} /> */}
            {konamiModalOpened && (
              <KonamiModal
                isOpened={konamiModalOpened}
                handleClose={() => setKonamiModalOpened(false)}
              />
            )}
          </>
        )}
        <div className={classes.contactMeContainer}>
          <Table>
            <TableRow>
              <a
                href="mailto:renaudmorinwork@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <TableCell className={classes.tableCellCustomColor}>
                  <EmailIcon className={classes.iconColor} />
                </TableCell>
              </a>
              <a
                href="https://github.com/RenaldMorino"
                target="_blank"
                rel="noreferrer"
              >
                <TableCell className={classes.tableCellCustomColor}>
                  <GitHubIcon className={classes.iconColor} />
                </TableCell>
              </a>
              <a
                href="https://twitter.com/RenaldiniMorino"
                target="_blank"
                rel="noreferrer"
              >
                <TableCell className={classes.tableCellCustomColor}>
                  <TwitterIcon className={classes.iconColor} />
                </TableCell>
              </a>
              <a
                href="https://www.linkedin.com/in/renaud-morin-b6a9b113a/"
                target="_blank"
                rel="noreferrer"
              >
                <TableCell className={classes.tableCellCustomColor}>
                  <LinkedInIcon className={classes.iconColor} />
                </TableCell>
              </a>
            </TableRow>
          </Table>
        </div>
        <BooSoundSystem
          children={<div className={classes.bottomTextContainer}>boo</div>}
        />
        <Konami action={handleKonami} />
      </div>
    </ThemeProvider>
  );
};

export default App;
