
      import React, { useEffect, useState } from "react";
      import { Float, Sphere, useGLTF, useTexture } from "@react-three/drei";
      import * as THREE from 'three'
      import { useFrame } from "@react-three/fiber";


      const Robot = (props) => {
        
        const robot = useGLTF('./robot_playground/scene.gltf');
        const { nodes, scene, materials, animations } = robot;

        const [rotation,setRotation] =useState(1);
        const [counter,setCounter] =useState(.01);
        const [animationIndex,setAnimationIndex] =useState(3);

        var mixer;
     
        useFrame((state, delta) => {
        mixer = new THREE.AnimationMixer( robot.scene );
        var action = mixer.clipAction( robot.animations[0] ).play();
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
     <primitive
            object={robot.scene}
            position={[35,-10,0]}
            scale={1}
            //rotation-z={2}
            rotation-y={rotation}
                
        >
        </primitive>
       
        );
      };
      
      export default Robot;
        
