import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    height: "100%",
    background: "lightblue",
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    position: "relative",
    display: "grid",
    //grid-template-columns: repeat(4, minmax(100px, 1fr));
    //grid-gap: 25px;
    padding: 25,
    background: "white",
    borderRadius: 5,
    cursor: "pointer",
    boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.05)",
    willChange: "width, height",
  },

  item: {
    width: "100%",
    height: "100%",
    background: "white",
    borderRadius: 5,
    willChange: "transform, opacity",
  },
}));

const EasterEggButton = () => {
  const styles = useStyles();
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "hotpink" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "hotpink",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open, {
    ref: transApi,
    trail: 400 / 4,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div className={styles.wrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.container}
        onClick={() => set((open) => !open)}
      >
        {transition((style, item) => (
          <animated.div
            className={styles.item}
            style={{ ...style, background: item.css }}
          />
        ))}
      </animated.div>
    </div>
  );
};

export default EasterEggButton;
