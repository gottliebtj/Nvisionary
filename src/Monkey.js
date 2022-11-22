
      import React, { useEffect, useState } from "react";
      import { Sphere, useGLTF, useTexture } from "@react-three/drei";
      
      const Monkey = () => {
        
        const suzanne = useGLTF('./suzanne.gltf')

        const [rotation,setRotation] =useState(1);
        const [color,setColor] =useState('blue');


        useEffect(()=>{
            setRotation(rotation+.0007)
        },[rotation])
        return (
            <primitive
            object={suzanne.scene}
            position-y={- 13.2}
            rotation-z={rotation}
           
        >

        </primitive>
        );
      };
      
      export default Monkey;
        
