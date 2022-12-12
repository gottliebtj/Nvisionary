
      import React, { useEffect, useState } from "react";
      import { Float, Sphere, useGLTF, useTexture } from "@react-three/drei";
      import * as THREE from 'three'
      import { useFrame } from "@react-three/fiber";


      const Jellyfish = (props) => {
        
        const jellyfish = useGLTF('./jellyfish/scene.gltf');
        const { nodes, scene, materials, animations } = jellyfish;

        const [rotation,setRotation] =useState(1);
        const [counter,setCounter] =useState(.01);
        const [animationIndex,setAnimationIndex] =useState(3);

        var mixer;
     
        useFrame((state, delta) => {
        mixer = new THREE.AnimationMixer( jellyfish.scene );
        var action = mixer.clipAction( jellyfish.animations[0] ).play();
        action.play();
        //console.log(delta)
            mixer.update(counter);
            setCounter(counter+.015)
            // console.log(ca);
          });

       
        useEffect(()=>{
            setRotation(rotation+.0007)
            
        },[rotation])
        return (
          <Float>
     <primitive
            object={jellyfish.scene}
            position={[-35,-22,-30]}
            scale={.5}
            //rotation-z={2}
            rotation-y={rotation}
                
        >
        </primitive>
          </Float>
       
        );
      };
      
      export default Jellyfish;
        
