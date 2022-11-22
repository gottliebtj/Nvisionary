import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, Image, Stars, Plane, Sphere, Torus, Ring, OrbitControls, Cone, TorusKnot, FirstPersonControls, Center, Text3D } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import Crystal from './Crystal'
import Deathstar from './Deathstar'
import Marbel from './Marbel'
import Monkey from './Monkey'
import Rock from './Rock'
import RoughPlanet from './RoughPlanet'
import SandPlanet from './TechPlanet'
import TechPlanet from './TechPlanet'
export default function Experience() {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const spaceship = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf')
    const suzanne = useGLTF('./suzanne.gltf')

    const [cameraXYZ, setCameraXYZ] = useState([0, 0, 0])
    const [zoom, setZoom] = useState(0);
    const [currentlyZoomed, setCurrentlyZoomed] = useState(false);
    const [websites, setWebsites] = useState(['http://127.0.0.1:5173/', 'https://vivek9patel.github.io/', 'https://win11.vercel.app/', 'https://winxp.vercel.app/', 'http://nvisia.com', ''])
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


    return <>
        <Environment preset='city' />
        <color args={['black']} attach={'background'}></color>
        {freeModeEnabled ? <OrbitControls> </OrbitControls> : null}
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

            <primitive
                object={computer.scene}
                position-y={- 1.2}
                position-z={zoom}
                onClick={() => {
                    if (!currentlyZoomed) {
                        setCameraXYZ([0, -.65, 0]);
                        setZoom(3);
                        setCurrentlyZoomed(true)
                    } else {
                        setCameraXYZ([0, 0, 0]);
                        setZoom(0);
                        setCurrentlyZoomed(false)


                    }
                }}
            >
                 <Monkey />
                <Html
                    position={[0, 0, 1.2]}
                >
                    <button onClick={() => {
                        setFreeModeEnabled(!freeModeEnabled)

                    }}>Click me</button>

                    {/**
                     * Tylers Porfolio
                     * <iframe src="http://127.0.0.1:5173/"  />
                     * 
                     * Ubunutu
                     *  <iframe src="https://vivek9patel.github.io/"  />
                     * 
                     * Windows 11
                     * <iframe src="https://win11.vercel.app/"  />
                     * 
                     * Windows XP
                     * <iframe src="https://winxp.vercel.app/"  />
                     */}
                </Html>

                <Html
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={1.17}
                    position={[0, 1.56, - 1.4]}
                    rotation-x={- 0.256}
                >
                    {websites[index] != '' ? <iframe src={websites[index]} /> : null}

                    {/**
                     * Tylers Porfolio
                     * <iframe src="http://127.0.0.1:5173/"  />
                     * 
                     * Ubunutu
                     *  <iframe src="https://vivek9patel.github.io/"  />
                     * 
                     * Windows 11
                     * <iframe src="https://win11.vercel.app/"  />
                     * 
                     * Windows XP
                     * <iframe src="https://winxp.vercel.app/"  />
                     */}
                </Html>
            </primitive>

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
                    position={[2, .6, .9]}
                    rotation-y={spaceshipRoatation}
                    rotation-z={spaceshipRoatation}
                    maxWidth={2}
                    color={'White'}
                >
                    Tyler Gottlieb - Nvisionary
                </Text>


            </>

            <>


                <Cone


                    scale={.5}
                    position={[15, 0.75, -20.75]}
                    onClick={() => {
                        if (index == websites.length - 1) {
                            setIndex(0)
                        } else {
                            setIndex(index + 1)
                        }
                    }}
                >
                    <meshStandardMaterial color="#f3702d" />

                </Cone>

                <TorusKnot
                    args={[3, .21, 16, 100]}
                    position={[15, 0.75, -20.75]}
                    scale={.5}
                    rotation-x={spaceshipRoatation}
                    rotation-y={spaceshipRoatation}


                >
                    <meshStandardMaterial color="green" />
                </TorusKnot>
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

                <Deathstar onClick={() => {
                    if (index == websites.length - 1) {
                        setIndex(0)
                    } else {
                        setIndex(index + 1)
                    }
                }} />
            </>

            <Crystal />
            <SandPlanet />
            <RoughPlanet />

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