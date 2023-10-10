import { usePlane } from '@react-three/cannon'
import { grassTexture, woodTexture } from '../images/textures'
import { useStore } from '../hooks/useStore'

export function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], //x, y, z
    position: [0, -0.5, 0] //x, y, z
  }))

  // const [addCube] = useStore(state => state.addCube)

  grassTexture.repeat.set(100, 100)

  // const handleClickGround = event =< {
  //   event.stopPropagation()
  // }

  return (
    <mesh
      // onClick={handleClickGround}
      ref={ref}
    >
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={grassTexture} />
    </mesh>
  )
}
