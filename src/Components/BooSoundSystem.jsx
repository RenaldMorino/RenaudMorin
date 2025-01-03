// Sound files
import BooSound1 from '../Assets/Sounds/BooSounds/boo-01.mp3'
import BooSound2 from '../Assets/Sounds/BooSounds/boo-02.mp3'
import BooSound3 from '../Assets/Sounds/BooSounds/boo-03.mp3'
import BooSound4 from '../Assets/Sounds/BooSounds/boo-04.mp3'
import BooSound5 from '../Assets/Sounds/BooSounds/boo-05.mp3'
import BooSound6 from '../Assets/Sounds/BooSounds/boo-06.mp3'
import BooSound7 from '../Assets/Sounds/BooSounds/boo-07.mp3'
import BooSound8 from '../Assets/Sounds/BooSounds/boo-08.mp3'
import BooSound9 from '../Assets/Sounds/BooSounds/boo-09.mp3'
import BooSound10 from '../Assets/Sounds/BooSounds/boo-10.mp3'
import BooSound11 from '../Assets/Sounds/BooSounds/boo-11.mp3'
import BooSound12 from '../Assets/Sounds/BooSounds/boo-12.mp3'
import BooSound13 from '../Assets/Sounds/BooSounds/boo-13.mp3'
import BooSound14 from '../Assets/Sounds/BooSounds/boo-14.mp3'
import BooSound15 from '../Assets/Sounds/BooSounds/boo-15.mp3'
import BooSound16 from '../Assets/Sounds/BooSounds/boo-16.mp3'
import BooSound17 from '../Assets/Sounds/BooSounds/boo-17.mp3'
import BooSound18 from '../Assets/Sounds/BooSounds/boo-18.mp3'
import BooSound19 from '../Assets/Sounds/BooSounds/boo-19.mp3'
import BooSound20 from '../Assets/Sounds/BooSounds/boo-20.mp3'
import BooSound21 from '../Assets/Sounds/BooSounds/boo-21.mp3'
import BooSound22 from '../Assets/Sounds/BooSounds/boo-22.mp3'
import BooSound23 from '../Assets/Sounds/BooSounds/boo-23.mp3'
import BooSound24 from '../Assets/Sounds/BooSounds/boo-24.mp3'
import BooSound25 from '../Assets/Sounds/BooSounds/boo-25.mp3'
import BooSound26 from '../Assets/Sounds/BooSounds/boo-26.mp3'

import useSound from 'use-sound'
import { useState } from 'react'

const BooSoundSystem = ({ children }) => {
  const maxVolume = 0.45
  const minVolume = 0.15

  const players = []
  const stoppers = []
  const [playBoo1, { stop: stopBoo1 }] = useSound(BooSound1, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo2, { stop: stopBoo2 }] = useSound(BooSound2, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo3, { stop: stopBoo3 }] = useSound(BooSound3, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo4, { stop: stopBoo4 }] = useSound(BooSound4, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo5, { stop: stopBoo5 }] = useSound(BooSound5, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo6, { stop: stopBoo6 }] = useSound(BooSound6, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo7, { stop: stopBoo7 }] = useSound(BooSound7, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo8, { stop: stopBoo8 }] = useSound(BooSound8, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo9, { stop: stopBoo9 }] = useSound(BooSound9, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo10, { stop: stopBoo10 }] = useSound(BooSound10, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo11, { stop: stopBoo11 }] = useSound(BooSound11, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo12, { stop: stopBoo12 }] = useSound(BooSound12, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo13, { stop: stopBoo13 }] = useSound(BooSound13, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo14, { stop: stopBoo14 }] = useSound(BooSound14, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo15, { stop: stopBoo15 }] = useSound(BooSound15, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo16, { stop: stopBoo16 }] = useSound(BooSound16, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo17, { stop: stopBoo17 }] = useSound(BooSound17, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo18, { stop: stopBoo18 }] = useSound(BooSound18, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo19, { stop: stopBoo19 }] = useSound(BooSound19, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo20, { stop: stopBoo20 }] = useSound(BooSound20, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo21, { stop: stopBoo21 }] = useSound(BooSound21, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo22, { stop: stopBoo22 }] = useSound(BooSound22, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo23, { stop: stopBoo23 }] = useSound(BooSound23, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo24, { stop: stopBoo24 }] = useSound(BooSound24, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo25, { stop: stopBoo25 }] = useSound(BooSound25, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })
  const [playBoo26, { stop: stopBoo26 }] = useSound(BooSound26, {
    volume: Math.random() * (maxVolume - minVolume) + minVolume
  })

  players.push(playBoo1)
  players.push(playBoo2)
  players.push(playBoo3)
  players.push(playBoo4)
  players.push(playBoo5)
  players.push(playBoo6)
  players.push(playBoo7)
  players.push(playBoo8)
  players.push(playBoo9)
  players.push(playBoo10)
  players.push(playBoo11)
  players.push(playBoo12)
  players.push(playBoo13)
  players.push(playBoo14)
  players.push(playBoo15)
  players.push(playBoo16)
  players.push(playBoo17)
  players.push(playBoo18)
  players.push(playBoo19)
  players.push(playBoo20)
  players.push(playBoo21)
  players.push(playBoo22)
  players.push(playBoo23)
  players.push(playBoo24)
  players.push(playBoo25)
  players.push(playBoo26)

  stoppers.push(stopBoo1)
  stoppers.push(stopBoo2)
  stoppers.push(stopBoo3)
  stoppers.push(stopBoo4)
  stoppers.push(stopBoo5)
  stoppers.push(stopBoo6)
  stoppers.push(stopBoo7)
  stoppers.push(stopBoo8)
  stoppers.push(stopBoo9)
  stoppers.push(stopBoo10)
  stoppers.push(stopBoo11)
  stoppers.push(stopBoo12)
  stoppers.push(stopBoo13)
  stoppers.push(stopBoo14)
  stoppers.push(stopBoo15)
  stoppers.push(stopBoo16)
  stoppers.push(stopBoo17)
  stoppers.push(stopBoo18)
  stoppers.push(stopBoo19)
  stoppers.push(stopBoo20)
  stoppers.push(stopBoo21)
  stoppers.push(stopBoo22)
  stoppers.push(stopBoo23)
  stoppers.push(stopBoo24)
  stoppers.push(stopBoo25)
  stoppers.push(stopBoo26)

  const [previousSoundIndex, setPreviousSoundIndex] = useState(null)

  const handlePlay = () => {
    if (previousSoundIndex !== null) {
      const stopPreviousSound = stoppers[previousSoundIndex]
      stopPreviousSound()
    }

    const nextSoundIndex = Math.floor(Math.random() * players.length)
    const playNextSound = players[nextSoundIndex]
    playNextSound()
    setPreviousSoundIndex(nextSoundIndex)
  }

  return <div onMouseOver={() => handlePlay()}>{children}</div>
}

export default BooSoundSystem
