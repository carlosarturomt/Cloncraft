import { useStore } from "../hooks/useStore"
import { useBox } from "@react-three/cannon/dist"
import * as textures from "../images/textures"
import { useState } from "react"

export const Cube = ({ id, position, texture }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [removeCube] = useStore(state => [state.removeCube])

    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))

    const activeTexture = textures[texture + 'Texture']
    // activeTexture.repeat.set(1, 1)

    return (
        <mesh
            onPointerMove={(e) => {
                e.stopPropagation()
                setIsHovered(true)
            }}
            onPointerOut={(e) => {
                e.stopPropagation()
                setIsHovered(false)
            }}
            ref={ref}
            onClick={(e) => {
                e.stopPropagation()
                if (e.altKey) {
                    removeCube(id)
                }
            }}
        >
            <boxBufferGeometry attach='geometry' />
            <meshStandardMaterial
                color={isHovered ? 'gray' : 'white'}
                map={activeTexture}
                attach='material'
            />
        </mesh>
    )
}