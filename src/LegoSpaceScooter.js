
      import React, { useEffect, useState } from "react";
      import { Float, Sphere, useGLTF, useTexture } from "@react-three/drei";
      
      const LegoSpaceScooter = () => {
        
        const spaceScooter = useGLTF('./lego_space_scooter/scene.gltf')

        const [rotation,setRotation] =useState(1);
        const [color,setColor] =useState('blue');


        useEffect(()=>{
            setRotation(rotation+.0007)
        },[rotation])
        return (
            <Float>
  <primitive
            object={spaceScooter.scene}
            position={[-20,-15,30]}
            scale={.09}
            rotation-y={rotation}
            onClick={()=>{
                postShowcaseEvent("LEGO MAN ENGAGED!")
    
            }}  
        >

        </primitive>
            </Float>
          
        );
      };
      
      export default LegoSpaceScooter;
        
