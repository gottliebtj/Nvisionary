import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, Image, Stars, Plane, Sphere, Torus, Ring, OrbitControls, Cone, TorusKnot, FirstPersonControls, Center, Text3D } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import Astroman from './Astroman'
import AstromanToggle from './PacMan'
import Crystal from './Crystal'
import Deathstar from './Deathstar'
import Marbel from './Marbel'
import Monkey from './Monkey'
import Rock from './Rock'
import RoughPlanet from './RoughPlanet'
import SandPlanet from './TechPlanet'
import TechPlanet from './TechPlanet'
import Pacman from './PacMan'
import { useFrame, useThree } from '@react-three/fiber'
import Computer from './Computer'
import WeirdCone from './WeirdCone'
import Pikachu from './Pikachu'
import SpaceDragon from './SpaceDragon'
import Saturn from './Saturn'
import LegoSpaceScooter from './LegoSpaceScooter'
import Thanos from './Thanos'
import Mario from './Mario'
import MFalcon from './MFalcon'
import Mcdonalds from './Mcdonalds'
import Butterfly from './Butterfly'
import Windows from './Windows'
import IceCream from './IceCream'
import Fish from './Fish'
import Jellyfish from './Jellyfish'
import Robot from './Robot'
import ChristmasPlanet from './ChristmasPlanet'
import Santa from './Santa'
import Liberty from './Liberty'
import Tesla from './Tesla'

export default function Experience() {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const spaceship = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf')
    const suzanne = useGLTF('./suzanne.gltf')
    const {camera} = useThree();
    const [cameraXYZ, setCameraXYZ] = useState([0, 0, 0])
    const [zoom, setZoom] = useState(0);
    const [websites, setWebsites] = useState(['http://nvisia.com/', 'https://vivek9patel.github.io/', 'https://win11.vercel.app/', 'https://winxp.vercel.app/', 'http://nvisia.com', ''])
    const [index, setIndex] = useState(0);
    const [spaceshipRoatation, setSpaceshipRotation] = useState(0);
    const [spaceshipPositionZ, setSpaceshipPositionZ] = useState(-10);
    const [freeModeEnabled, setFreeModeEnabled] = useState(false);

    const requestRef = useRef()



    useEffect(() => {
        animateSpaceship()
    }, [spaceshipRoatation]);
    

    


    const animateSpaceship = async () => {

        await setSpaceshipRotation(spaceshipRoatation + .0001)
        await setSpaceshipPositionZ(spaceshipPositionZ - .01)

    }

    const moveCameraToLocation=(finalX,finalY,finalZ)=>{
        camera.position.x = finalX
        camera.position.y = finalY
        camera.position.z = finalZ
    }


    return <>
        <Environment preset='city' />
        <color args={['black']} attach={'background'}></color>
       <OrbitControls> </OrbitControls> 
        <PresentationControls
            global
            makeDefault={!freeModeEnabled}
            //rotation={ [ 0.0, -0.1, 0 ] }
            //polar={ [ - 0.4, 0.2 ] }
            zoom={zoom}
            azimuth={[- 1, 0.75]}
            rotation={cameraXYZ} // Default rotation
            polar={[0, Math.PI / 2]} // Vertical limits
            //azimuth={[-Infinity, Infinity]} // Horizontal limits
            //config={ { mass: 2, tension: 400 } }
            snap={true}
        >
            <rectAreaLight
                width={2.5}
                height={1.65}
                intensity={65}
                color={'#ff6900'}
                rotation={[- 0.1, Math.PI, 0]}
                position={[0, 0.55, - 1.15]}
            />
            <Computer  camera={camera} websites={websites} />

            <Float>
                <primitive
                    object={spaceship.scene}
                    position-y={1.2}
                    position-z={spaceshipPositionZ}
                    rotation-y={spaceshipRoatation}
                    onClick={() => {
                        setSpaceshipRotation(spaceshipRoatation + .1);
                    }}
                >
                </primitive>

            </Float>




            {/**  <Image
                url="./g46.png"
                position={[2, 0.75, 0.75]}
                rotation-y={- 1.25}
                onClick={() => {
                    if (index == websites.length - 1) {
                        setIndex(0)
                    } else {
                        setIndex(index + 1)
                    }
                }}
            />
        
            <Plane args={[0, 0]} />
            */}

            <>

                <Rock onClick={() => {
                    if (index == websites.length - 1) {
                        setIndex(0)
                    } else {
                        setIndex(index + 1)
                    }
                }} />

                <Text
                    font="./bangers-v20-latin-regular.woff"

                    fontSize={.2}
                    position={[6, -2.6, 1.4]}
                    rotation-y={spaceshipRoatation}
                    rotation-z={spaceshipRoatation}
                    maxWidth={2}
                    color={'White'}
                >
                    Tyler Gottlieb - Nvisionary
                </Text>


            </>

            <>
            <WeirdCone />

              
            </>

            <>


                <Marbel onClick={() => {
                    if (index == websites.length - 1) {
                        setIndex(0)
                    } else {
                        setIndex(index + 1)
                    }
                }} />
            </>

            <>

                <Deathstar 
                   />
            </>
            <MFalcon />
            <Mario />
            <Fish /> 
            <Tesla />
            <Jellyfish />
            <Santa />
            <Liberty />
            <Robot />
            <ChristmasPlanet />
         <IceCream />
            <Mcdonalds />
            <Windows />
            <Butterfly />
            <Thanos />
            <LegoSpaceScooter />
            <Saturn />
            <Crystal />
            <SandPlanet moveCameraToLocation={moveCameraToLocation} />
            <RoughPlanet />
            <Astroman camera={camera} />
            <Pacman camera={camera} />
            <Pikachu camera={camera} />
            <SpaceDragon camera={camera}/>
            
            

            <Stars radius={1} depth={50} count={5000} factor={4} saturation={0} fade speed={3} />

        </PresentationControls>

        <ContactShadows
            position-y={- 1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />

    </>
}