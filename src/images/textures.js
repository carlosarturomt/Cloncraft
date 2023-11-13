import {
    cobblestoneImg,
    diamondImg,
    dirtImg,
    glassImg,
    grassImg,
    leavesImg,
    logImg,
    woodImg,
} from "./images"
import { NearestFilter, RepeatWrapping, TextureLoader } from "three"

const grassTexture = new TextureLoader().load(grassImg)
const cobblestoneTexture = new TextureLoader().load(cobblestoneImg)
const diamondTexture = new TextureLoader().load(diamondImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const leavesTexture = new TextureLoader().load(leavesImg)

const groundTexture = new TextureLoader().load(grassImg)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

cobblestoneTexture.wrapS = RepeatWrapping
cobblestoneTexture.wrapT = RepeatWrapping
cobblestoneTexture.magFilter = NearestFilter

diamondTexture.wrapS = RepeatWrapping
diamondTexture.wrapT = RepeatWrapping
diamondTexture.magFilter = NearestFilter

grassTexture.wrapS = RepeatWrapping
grassTexture.wrapT = RepeatWrapping
grassTexture.magFilter = NearestFilter

leavesTexture.wrapS = RepeatWrapping
leavesTexture.wrapT = RepeatWrapping
leavesTexture.magFilter = NearestFilter

dirtTexture.wrapS = RepeatWrapping
dirtTexture.wrapT = RepeatWrapping
dirtTexture.magFilter = NearestFilter

glassTexture.wrapS = RepeatWrapping
glassTexture.wrapT = RepeatWrapping
glassTexture.magFilter = NearestFilter

woodTexture.wrapS = RepeatWrapping
woodTexture.wrapT = RepeatWrapping
woodTexture.magFilter = NearestFilter

export {
    groundTexture,
    cobblestoneTexture,
    diamondTexture,
    grassTexture,
    dirtTexture,
    logTexture,
    glassTexture,
    woodTexture,
    leavesTexture
}