
      import React, { useEffect, useState } from "react";
      import { Float, GizmoHelper, PivotControls, Sphere, useGLTF, useTexture } from "@react-three/drei";
      import * as THREE from 'three'
      import { useFrame } from "@react-three/fiber";


      const Santa = (props) => {
        
        const santa = useGLTF('./santa/scene.gltf');
        const { nodes, scene, materials, animations } = santa;

        const [rotation,setRotation] =useState(1);
        const [counter,setCounter] =useState(.01);
        const [animationIndex,setAnimationIndex] =useState(3);

        var mixer;
     
        useFrame((state, delta) => {
        mixer = new THREE.AnimationMixer( santa.scene );
        var action = mixer.clipAction( santa.animations[0] ).play();
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
            object={santa.scene}
            position={[0,-30,0]}
            scale={1}
            //rotation-z={1}
            //rotation-x={4}

            //rotation-y={rotation}
                
        >
        </primitive>

       
        );
      };
      
      export default Santa;
        
