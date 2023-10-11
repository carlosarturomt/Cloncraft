import { useEffect, useState } from "react"

const ACTIONS_KEYBOARD_MAP = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
    Digit1: 'diamond',
    Digit2: 'dirt',
    Digit3: 'glass',
    Digit4: 'grass',
    Digit5: 'leaves',
    Digit6: 'log',
    Digit7: 'wood',
}

export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        diamond: false,
        dirt: false,
        glass: false,
        grass: false,
        leaves: false,
        log: false,
        wood: false,
    })

    useEffect(() => {
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

            // console.log(action);
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

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }

    }, [])

    return actions
}