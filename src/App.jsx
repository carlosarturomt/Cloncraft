import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground.jsx'
import { FPV } from './components/FPV.jsx'
import { Player } from './components/Player.jsx'
import { Cubes } from './components/Cubes.jsx'
import { TextureSelector } from './components/TextureSelec.jsx'
import handSteve from './assets/imgs/hand_steve.png'

function App() {

  const test = () => {
    console.log('hand');
  }

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />

        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>

      <div className='pointer'>+</div>
      <img src={handSteve} alt='hand' className='hand_steve' />
      <TextureSelector />
    </>
  )
}

export default App
