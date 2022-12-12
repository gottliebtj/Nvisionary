
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
         

            
            <primitive
            object={astroman.scene}
            position={[40.1, 21.05,-0.5]}
            scale={.1}
            //rotation-z={2}
            rotation-y={1.55}
            onClick={()=>{
              setIsOn(!isOn);
              props.camera.position.x = 43.64;
              props.camera.position.y = 26.95;
              props.camera.position.z = -0.25;

            }}
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


        );
      };
      
      export default Pacman;
        
