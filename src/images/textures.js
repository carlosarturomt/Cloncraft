import {
    grassImg,
    dirtImg,
    logImg,
    glassImg,
    woodImg
} from "./images"
import { NearestFilter, RepeatWrapping, TextureLoader } from "three"

const grassTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)

grassTexture.wrapS = RepeatWrapping
grassTexture.wrapT = RepeatWrapping
grassTexture.magFilter = NearestFilter

export {
    grassTexture,
    dirtTexture,
    logTexture,
    glassTexture,
    woodTexture
}