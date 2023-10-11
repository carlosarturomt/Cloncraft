import { useStore } from '../hooks/useStore'
import * as images from '../images/imagesBlocks'
import { useKeyboard } from '../hooks/useKeyboard'
import { useEffect, useState } from 'react'

export const TextureSelector = () => {
    const [visible, setVisible] = useState(true)
    const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])

    const {
        hand,
        diamond,
        dirt,
        grass,
        glass,
        leaves,
        log,
        wood,
    } = useKeyboard()

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        }, 2000)

        setVisible(true)

        return () => {
            clearTimeout(visibilityTimeout)
        }

    }, [texture])

    useEffect(() => {
        const options = {
            hand,
            diamond,
            dirt,
            grass,
            glass,
            wood,
            log,
            leaves
        }

        const selectedTexture = Object
            .entries(options)
            .find(([texture, isEnabled]) => isEnabled)

        if (selectedTexture) {
            const [textureName] = selectedTexture
            setTexture(textureName)
        }

        console.log(selectedTexture);

    }, [hand, diamond, dirt, grass, glass, wood, log, leaves])

    // if (!visible) return null

    return (
        <div className='texture-selector'>
            <div className={texture === 'hand' ? 'selected texture-selector--box' : 'texture-selector--box'}>
                <div className={texture === 'hand' ? 'selected-null--active' : 'selected-null'}>
                </div>
            </div>
            {
                Object
                    .entries(images)
                    .map(([imgKey, img]) => {
                        return (
                            <div className={texture === imgKey.replace('Img', '') ? 'selected texture-selector--box' : 'texture-selector--box'} key={imgKey}>
                                <img
                                    className={texture === imgKey.replace('Img', '') ? 'selected-img' : ''}
                                    src={img}
                                    alt={imgKey}
                                />
                            </div>
                        )
                    })
            }

        </div>
    )
}