import { nanoid } from "nanoid";
import create from "zustand";

export const useStore = create(set => ({
    texture: 'dirt',


    cubes: [
        // Tree Simple
        {
            id: nanoid(),
            pos: [1, 0, -7],
            texture: 'log'
        },
        {
            id: nanoid(),
            pos: [1, 1, -7],
            texture: 'log'
        },
        {
            id: nanoid(),
            pos: [1, 2, -7],
            texture: 'log'
        },
        {
            id: nanoid(),
            pos: [1, 3, -7],
            texture: 'log'
        },
        {
            id: nanoid(),
            pos: [1, 4, -7],
            texture: 'log'
        },
        {
            id: nanoid(),
            pos: [1, 2, -9],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [1, 2, -5],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [-1, 2, -7],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [3, 2, -7],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [0, 2, -8],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [1, 2, -5],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [-1, 2, -7],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [3, 2, -7],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [2, 2, -8],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [2, 2, -6],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [0, 2, -6],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [1, 2, -8],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [1, 2, -6],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [0, 2, -7],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [2, 2, -7],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [1, 3, -6],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [0, 3, -7],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [2, 3, -7],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [1, 3, -8],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [1, 4, -7],
            texture: 'leaves'
        },

        // Second Tree
        {
            id: nanoid(),
            pos: [8, 0, -10],
            texture: 'log'
        },
        {
            id: nanoid(),
            pos: [8, 1, -10],
            texture: 'log'
        },
        {
            id: nanoid(),
            pos: [8, 2, -10],
            texture: 'log'
        },
        {
            id: nanoid(),
            pos: [8, 3, -10],
            texture: 'log'
        },
        {
            id: nanoid(),
            pos: [8, 4, -10],
            texture: 'log'
        },
        {
            id: nanoid(),
            pos: [8, 2, -9],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [8, 2, -12],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [6, 2, -10],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [11, 2, -10],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [9, 2, -11],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [8, 2, -8],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [7, 2, -9],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [11, 2, -9],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [10, 2, -11],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [10, 2, -9],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [7, 2, -9],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [8, 2, -11],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [8, 2, -9],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [7, 2, -10],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [10, 2, -10],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [8, 3, -9],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [7, 3, -10],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [10, 3, -10],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [8, 3, -11],
            texture: 'leaves'
        },
        {
            id: nanoid(),
            pos: [8, 4, -10],
            texture: 'leaves'
        }
    ],

    addCube: (x, y, z) => {
        set(state => ({
            cubes: [...state.cubes, {
                id: nanoid(),
                texture: state.texture,
                pos: [x, y, z]
            }]
        }))
    },

    removeCube: (id) => {
        set(state => ({
            cubes: state.cubes.filter(cube => cube.id != id)
        }))
    },

    setTexture: (texture) => {
        set(() => ({ texture }))
    },

    saveWorld: () => { },
    resetWorld: () => { }
}))