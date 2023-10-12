import { useEffect, useState } from "react"

const ACTIONS_KEYBOARD_MAP = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
    Digit1: 'hand',
    Digit2: 'cobblestone',
    Digit3: 'diamond',
    Digit4: 'dirt',
    Digit5: 'glass',
    Digit6: 'grass',
    Digit7: 'leaves',
    Digit8: 'log',
    Digit9: 'wood',
}

export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        cobblestone: false,
        diamond: false,
        dirt: false,
        glass: false,
        grass: false,
        leaves: false,
        log: false,
        wood: false,
        // '': false,
    })

    useEffect(() => {
        const handleClick = event => {
            const { code } = event
            if (code === undefined) {
                let element = document.getElementById("hand");
                element.classList.add("hand_move");

                /* let block = document.getElementById("block");
                block.classList.add("block_move"); */
                setTimeout(() => {
                    element.classList.remove("hand_move");
                    /*  block.classList.remove("block_move"); */
                }, 100)
                // console.log(':D');
            }
        }

        const handleKeyDown = event => {
            const { code } = event
            const action = ACTIONS_KEYBOARD_MAP[code]
            if (action) {
                // if(actions[action]) return
                setActions(prevActions => ({
                    ...prevActions,
                    [action]: true
                }))
            }

            console.log(code);
        }

        const handleKeyUp = event => {
            const { code } = event
            const action = ACTIONS_KEYBOARD_MAP[code]
            if (action) {
                // if (!actions[action]) return
                setActions(prevActions => ({
                    ...prevActions,
                    [action]: false
                }))
            }
        }

        document.addEventListener('click', handleClick)
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }

    }, [])

    return actions
}