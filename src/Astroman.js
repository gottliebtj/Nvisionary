
      import React, { useEffect, useState } from "react";
      import { Sphere, useGLTF, useTexture } from "@react-three/drei";
      import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";
      const Astroman = (props) => {
        
        const astroman = useGLTF('./astroman/scene.gltf');
        const { nodes, scene, materials, animations } = astroman;

        const [rotation,setRotation] =useState(1);
        const [counter,setCounter] =useState(.01);
        const [animationIndex,setAnimationIndex] =useState(3);

        var mixer;
     
        useFrame((state, delta) => {
        mixer = new THREE.AnimationMixer( astroman.scene );
        var action = mixer.clipAction( astroman.animations[ 3 ] ).play();
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
            position={[3.1, 1.05,-0.5]}
            scale={.2}
            //rotation-z={2}
            //rotation-y={rotation}
            
           
        >
            

        </primitive>
        );
      };
      
      export default Astroman;
        
