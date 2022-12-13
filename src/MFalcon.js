
      import React, { useEffect, useState } from "react";
      import { Float, Sphere, useGLTF, useTexture } from "@react-three/drei";
      import * as THREE from 'three'
      import { useFrame } from "@react-three/fiber";
import postShowcaseEvent from "./utils/TechShowcaseHook";


      const MFalcon = (props) => {
        
        const falcon = useGLTF('./falcon/scene.gltf');
        const { nodes, scene, materials, animations } = falcon;

        const [rotation,setRotation] =useState(1);
        const [counter,setCounter] =useState(.01);
        const [animationIndex,setAnimationIndex] =useState(3);

        var mixer;
     
    

       
        useEffect(()=>{
            setRotation(rotation+.0007)
            
        },[rotation])
        return (
            <Float>
       <primitive
            object={falcon.scene}
            position={[-20,22,20]}
            scale={.005}
            //rotation-z={2}
            rotation-y={rotation}
            onClick={()=>{
                postShowcaseEvent("Han and Chewy ready on the Millennium falcon!")
    
            }}     
        >
        </primitive>
            </Float>
     
        );
      };
      
      export default MFalcon;
        
