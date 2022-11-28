
      import React, { useEffect, useState } from "react";
      import { Sphere, useGLTF, useTexture } from "@react-three/drei";
      
      const Monkey = () => {
        
        const suzanne = useGLTF('./spacestation/scene.gltf')

        const [rotation,setRotation] =useState(1);
        const [color,setColor] =useState('blue');


        useEffect(()=>{
            setRotation(rotation+.0007)
        },[rotation])
        return (
            <primitive
            object={suzanne.scene}
            position={[6,4,-15]}
            scale={.2}
            rotation-y={rotation}
           
        >

        </primitive>
        );
      };
      
      export default Monkey;
        
