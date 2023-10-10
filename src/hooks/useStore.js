import create from "zustand/react";

export const useStore = create(set => ({
    texture: 'dirt',
    cubes: [{
        id: 1
    }],
    addCube: () => { },
    removeCube: () => { },
    setTexture: () => { },
    saveWorld: () => { },
    resetWorld: () => { }
}))