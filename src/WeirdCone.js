
      import React, { useEffect, useState } from "react";
      import { Cone, Sphere, TorusKnot, useGLTF, useTexture } from "@react-three/drei";
      
      const WeirdCone = () => {
        
        const suzanne = useGLTF('./spacestation/scene.gltf')

        const [rotation,setRotation] =useState(1);
        const [color,setColor] =useState('blue');


        useEffect(()=>{
            setRotation(rotation+.0007)
        },[rotation])
        return (
            <>
            <Cone
            scale={.5}
            position={[15, -4.75, -20.75]}
            
        >
            <meshStandardMaterial color="#f3702d" />

        </Cone>

        <TorusKnot
            args={[3, .21, 16, 100]}
            position={[15, -4.75, -20.75]}
            scale={.5}
            rotation-x={rotation}
            rotation-y={rotation}


        >
            <meshStandardMaterial color="green" />
        </TorusKnot>
        </>
        );
      };
      
      export default WeirdCone;
        
