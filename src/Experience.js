import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, Image } from '@react-three/drei'
import { useState } from 'react'
export default function Experience() {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const [cameraXYZ, setCameraXYZ] = useState([0,0,0])
    const [zoom, setZoom] = useState(0);
    const [currentlyZoomed, setCurrentlyZoomed] = useState(false);
    const [websites, setWebsites] = useState(['http://127.0.0.1:5173/','https://vivek9patel.github.io/','https://win11.vercel.app/','https://winxp.vercel.app/','http://nvisia.com',''])
    const [index,setIndex] =useState(0);

    return <>

        <color args={['red']} attach="background" />

        <Environment preset='city' />

        <PresentationControls
            global
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
                position-z={ zoom }
            onClick={() => {
                if(!currentlyZoomed){
                    setCameraXYZ([0,-.65,0]); 
                    setZoom(3);
                    setCurrentlyZoomed(true)
                }else{
                    setCameraXYZ([0,0,0]); 
                    setZoom(0);
                    setCurrentlyZoomed(false)


                }
            }}
            >
                <Html
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={1.17}
                    position={[0, 1.56, - 1.4]}
                    rotation-x={- 0.256}
                >
                    {websites[index]!= '' ?<iframe src={websites[index]}  /> :null}
                    
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


         
            <Image
                url="./g46.png"
                position={[2, 0.75, 0.75]}
                rotation-y={- 1.25}
                onClick={()=>{
                    if(index == websites.length-1){
                        setIndex(0)
                    }else{
                        setIndex(index+1)
                    }
                }}
            />
            <Text
                font="./bangers-v20-latin-regular.woff"

                fontSize={.2}
                position={[2, -.2, .9]}
                rotation-y={- 1.25}
                maxWidth={2}
                color={'orange'}
            >
            Tyler Gottlieb - Nvisionary 
            </Text>
        </PresentationControls>

        <ContactShadows
            position-y={- 1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />

    </>
}