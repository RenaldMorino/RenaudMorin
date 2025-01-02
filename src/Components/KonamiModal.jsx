import makeStyles from '@mui/styles/makeStyles'
import { motion } from 'framer-motion'
import Palette from './Palette'

const useStyles = makeStyles((theme) => ({
  modalBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 50,
    background: `${Palette.main.darkBackground}80`
  },
  customModalContainer: {
    position: 'absolute',
    top: '25vh',
    left: '25vw',
    width: '50vw',
    height: '50vh',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    // TODO - Maybe change this for something that looks better
    background: `
    linear-gradient(127deg, ${Palette.main.darkAccent}FF, rgba(0,0,0,0) 100%),
    linear-gradient(217deg, ${Palette.main.darkAccent}FF, rgba(0,0,0,0) 100%),
    linear-gradient(336deg, ${Palette.main.darkBackground}FF, rgba(0,0,0,1) 100%);`,
    borderColor: Palette.main.lightYellow,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '5px',
    boxShadow: `0px 0px 150px ${Palette.main.lightYellow}`,
    zIndex: 100
  },

  innerModalContainer: {
    overflow: 'scroll',
    height: '100%',
    width: '100%'
  }
}))
const KonamiModal = ({ isOpened, handleClose }) => {
  const classes = useStyles()
  return (
    <motion.div
      animate={{ scale: [0, 1], opacity: [0, 1] }}
      transition={{ duration: 0.25 }}
      className={classes.modalBackdrop}
      onClick={() => handleClose()}
    >
      <div className={classes.customModalContainer}>
        <div className={classes.innerModalContainer}>
          <h1>The Konami Code: A Hidden Gem</h1>
          <h2> What is the Konami Code?</h2>
          <p>The Konami Code is one of the most famous cheat codes in video game history. Originating in the 1980s, it was first introduced by developer Kazuhisa Hashimoto for the game *Gradius* on the NES. Since then, it has become an iconic Easter egg, appearing in countless games and even websites like this one!</p>
          <p>The code itself is simple:</p>
          <p style={{ textAlign: 'center' }}><strong>Up, Up, Down, Down, Left, Right, Left, Right, B, A</strong></p>
          <p>Sometimes followed by "Select" and "Start" for two-player games. Sometimes followed by "Start" for older consoles.</p>

          <h2> A Brief History</h2>
          <p>Kazuhisa Hashimoto added the code during *Gradius*' development to make testing easier, as the game was notoriously difficult. However, the team forgot to remove it before release. Players discovered it, and its popularity exploded when it was later featured in *Contra*, granting 30 lives in the notoriously challenging game.</p>
          <p>Over the years, the Konami Code has transcended video games. It has been referenced in pop culture, added to websites, and even incorporated into real-world events as a playful homage to gaming history.</p>

          <h2> Why is it on this website?</h2>
          <p>If you’ve discovered this page, congratulations! You’ve found a hidden feature—a little nod to the joy and nostalgia of gaming culture. The Konami Code represents creativity, curiosity, and a sense of fun. By implementing it here, we hope to inspire a bit of that same magic for our visitors.</p>

          <h2> Fun Facts</h2>
          <ul>
            <li>The code works in many other places! Try it out on websites, apps, or even with Google Assistant or Siri for fun surprises.</li>
            <li>It’s often used to pay homage to classic gaming and bring a sense of playfulness to unexpected places.</li>
          </ul>

          <p>Thank you for being curious and adventurous enough to find this page. The Konami Code has always been about more than just cheats; it’s a celebration of exploration and the unexpected. Keep discovering!</p>

        </div>
      </div>
    </motion.div>
  )
}

export default KonamiModal
