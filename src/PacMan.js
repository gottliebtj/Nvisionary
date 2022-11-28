
      import React, { useEffect, useState } from "react";
      import { Html, OrbitControls, PivotControls, PresentationControls, Sphere, useGLTF, useTexture } from "@react-three/drei";
      import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";
      const Pacman = (props) => {
        
        const astroman = useGLTF('./pacman/scene.gltf');
        const { nodes, scene, materials, animations } = astroman;

        const [rotation,setRotation] =useState(1);
        const [counter,setCounter] =useState(.01);
        const [animationIndex,setAnimationIndex] =useState(3);
        const [isOn,setIsOn] =useState(false);

        var mixer;
     
        useFrame((state, delta) => {
        mixer = new THREE.AnimationMixer( astroman.scene );
        var action = mixer.clipAction( astroman.animations[ 0 ] ).play();
        action.play();
        //console.log(delta)
            mixer.update(counter);
            setCounter(counter+.025)
            // console.log(ca);
          });
      

       
        useEffect(()=>{
           // setRotation(rotation+.0007)
            
        },[rotation])
        return (
            <PresentationControls
            global
            makeDefault={isOn}
            //rotation={ [ 0.0, -0.1, 0 ] }
            //polar={ [ - 0.4, 0.2 ] }
            //zoom={zoom}
            azimuth={[- 1, 0.75]}
            //rotation={cameraXYZ} // Default rotation
            polar={[0, Math.PI / 2]} // Vertical limits
            //azimuth={[-Infinity, Infinity]} // Horizontal limits
            //config={ { mass: 2, tension: 400 } }
            snap={true}>

            
            <primitive
            object={astroman.scene}
            position={[40.1, 21.05,-0.5]}
            scale={.1}
            //rotation-z={2}
            rotation-y={1.3}
            onClick={()=>{setIsOn(!isOn)}}
        >
               <Html
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={10.17}
                    position={[0,37.6,-6]}
                    rotation-x={- 0.856}
                >
                  {isOn? <iframe style={{height:'980px', width:'700px'}} src="https://freepacman.org/"  />: null}  

                   
                </Html>
            </primitive>
            </PresentationControls>


        );
      };
      
      export default Pacman;
        
