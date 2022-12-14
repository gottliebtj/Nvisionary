
      import React, { useEffect, useState } from "react";
      import { Sphere, useTexture } from "@react-three/drei";
      
      const Deathstar = (props) => {
        const [map,displacementMap,normalMap,roughnessMap] = useTexture([
        "Tiles036_1K_Color.jpg","Tiles036_1K_Displacement.jpg","Tiles036_1K_Normal.jpg","Tiles036_1K_Roughness.jpg"
        ]);

        const [rotation,setRotation] =useState(1);

        useEffect(()=>{
            setRotation(rotation+.001)
        },[rotation])
        return (
          <Sphere args={[1, 200, 200]} 
          onClick={props.onClick}
          

          position={[10, 1.75,-10.75]}
          rotation-y={rotation}
          rotation-x={rotation}>
            <meshPhysicalMaterial
             // aoMap={aoMap}
             
              map={map}
              displacementMap={displacementMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              displacementScale={0.1}
            />
          </Sphere>
        );
      };
      
      export default Deathstar;
        
