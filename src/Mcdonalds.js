
      import React, { useEffect, useState } from "react";
      import { Sphere, useGLTF, useTexture } from "@react-three/drei";
import postShowcaseEvent from "./utils/TechShowcaseHook";
      
      const Mcdonalds = () => {
        
        const mcdonalds = useGLTF('./mcdonalds/scene.gltf')

        const [rotation,setRotation] =useState(1);
        const [color,setColor] =useState('blue');


        useEffect(()=>{
            setRotation(rotation+.0007)
        },[rotation])
        return (
            <primitive
            object={mcdonalds.scene}
            position={[30,30,30]}
            scale={.2}
            rotation-y={rotation}
            onClick={()=>{
              postShowcaseEvent("1 Big Mac Ordered")
  
          }}  
           
        >

        </primitive>
        );
      };
      
      export default Mcdonalds;
        
