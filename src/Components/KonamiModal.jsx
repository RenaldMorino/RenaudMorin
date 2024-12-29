import makeStyles from "@mui/styles/makeStyles";
import { motion } from "framer-motion";
import Palette from "./Palette";

const useStyles = makeStyles((theme) => ({
    modalBackdrop: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 50,
    },
    customModalContainer: {
        position: "absolute",
        top: "25vh",
        left: "25vw",
        width: "50vw",
        height: "50vh",
        background: Palette.main.darkAccent,
        borderColor: Palette.main.lightYellow,
        borderWidth: "5px",
        borderStyle: "solid",
        borderRadius: "5px",
        zIndex: 100,
    },

    innerModalContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
}));
const KonamiModal = ({isOpened, handleClose}) => {
    const classes = useStyles();
    return (
        <motion.div
            animate={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className={classes.modalBackdrop}
            onClick={() => handleClose()}>
            <div className={classes.customModalContainer}>
                <div className={classes.innerModalContainer}>
                    <h1>WELCOME TO THE KONAMI CODE EASTER EGG!</h1>
                    <p>Press the following keys in order:</p>
                    <ul>
                        <li>Up</li>
                        <li>Up</li>
                        <li>Down</li>
                        <li>Down</li>
                        <li>Left</li>
                        <li>Right</li>
                        <li>Left</li>
                        <li>Right</li>
                        <li>B</li>
                        <li>A</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
};

export default KonamiModal;