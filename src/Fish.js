
      import React, { useEffect, useState } from "react";
      import { Sphere, useGLTF, useTexture } from "@react-three/drei";
      import * as THREE from 'three'
      import { useFrame } from "@react-three/fiber";


      const Fish = (props) => {
        
        const fish = useGLTF('./fish/scene.gltf');
        const { nodes, scene, materials, animations } = fish;

        const [rotation,setRotation] =useState(1);
        const [counter,setCounter] =useState(.01);
        const [animationIndex,setAnimationIndex] =useState(3);

        var mixer;
     
        useFrame((state, delta) => {
        mixer = new THREE.AnimationMixer( fish.scene );
        var action = mixer.clipAction( fish.animations[0] ).play();
        action.play();
        //console.log(delta)
            mixer.update(counter);
            setCounter(counter+.015)
            // console.log(ca);
          });

       
        useEffect(()=>{
           // setRotation(rotation+.0007)
            
        },[rotation])
        return (
            <primitive
            object={fish.scene}
            position={[-20,-12,-15]}
            scale={2.5}
            //rotation-z={2}
            //rotation-y={rotation}
                
        >
        </primitive>
        );
      };
      
      export default Fish;
        
