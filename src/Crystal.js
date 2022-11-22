
      import React, { useEffect, useState } from "react";
      import { Sphere, useTexture } from "@react-three/drei";
      
      const Crystal = () => {
        const [roughnessMap,normalMap,map,displacementMap,aoMap] = useTexture([
        "Stylized_Crystal_001_roughness.jpg","Stylized_Crystal_001_normal.jpg","Stylized_Crystal_001_basecolor.jpg","Stylized_Crystal_001_height.png","Stylized_Crystal_001_ambientOcclusion.jpg"
        ]);

        const [rotation,setRotation] =useState(1);
        const [color,setColor] =useState('blue');


        useEffect(()=>{
            setRotation(rotation+.0007)
        },[rotation])
        return (
          <Sphere args={[1, 200, 200]}
          scale={1}
          position={[-2, -6,-21]}
          rotation-y={rotation}
         // rotation-x={rotation}
          >
            <meshPhysicalMaterial
              aoMap={aoMap}
              map={map}
              displacementMap={displacementMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              displacementScale={2}
              color={color}
            />
          </Sphere>
        );
      };
      
      export default Crystal;
        
