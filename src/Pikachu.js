
      import React, { useEffect, useState } from "react";
      import { Sphere, useGLTF, useTexture } from "@react-three/drei";
      import * as THREE from 'three'
      import { useFrame } from "@react-three/fiber";
import postShowcaseEvent from "./utils/TechShowcaseHook";


      const Pikachu = (props) => {
        
        const pika = useGLTF('./pikachu/scene.gltf');
        const { nodes, scene, materials, animations } = pika;

        const [rotation,setRotation] =useState(1);
        const [counter,setCounter] =useState(.01);
        const [animationIndex,setAnimationIndex] =useState(1);

        var mixer;
     
        useFrame((state, delta) => {
        mixer = new THREE.AnimationMixer( pika.scene );
        var action = mixer.clipAction( pika.animations[ animationIndex ] ).play();
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
            object={pika.scene}
            position={[1,-.65,1]}
            scale={.2}
            //rotation-z={2}
            //rotation-y={rotation}
            onClick={()=>{
                postShowcaseEvent("POKEDEX says a wild pikachu has been spotted!")
    
            }}            
        >
            

        </primitive>
        );
      };
      
      export default Pikachu;
        
