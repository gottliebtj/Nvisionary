
      import React, { useEffect, useState } from "react";
      import { Sphere, useGLTF, useTexture } from "@react-three/drei";
      
      const Saturn = () => {
        
        const saturn = useGLTF('./saturn_planet/scene.gltf')

        const [rotation,setRotation] =useState(1);


        useEffect(()=>{
            setRotation(rotation+.0007)
        },[rotation])
        return (
            <primitive
            object={saturn.scene}
            position={[15,15,15]}
            scale={1}
            rotation-y={rotation}
           
        >

        </primitive>
        );
      };
      
      export default Saturn;
        