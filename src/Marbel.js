
      import React, { useEffect, useState } from "react";
      import { Float, Sphere, useTexture } from "@react-three/drei";
      
      const Marbel = (props) => {
        const [map,displacementMap,normalMap,roughnessMap] = useTexture([
        "Marble006_1K_Color.jpg","Marble006_1K_Displacement.jpg","Marble006_1K_Normal.jpg","Marble006_1K_Roughness.jpg"
        ]);
        const [rotation,setRotation] =useState(1);

        useEffect(()=>{
            setRotation(rotation+.001)
        },[rotation])

        return (
            <>
            
          <Sphere args={[1, 200, 200]} 
          scale={.3}
          onClick={props.onClick}

          position={[14, .95,-2]}
          rotation-y={rotation}
          rotation-x={rotation}
          >
            <meshPhysicalMaterial
             // aoMap={aoMap}
             color={'red'}

              map={map}
              displacementMap={displacementMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              displacementScale={0.0}
            />
          </Sphere>
         
           </>
        );
      };
      
      export default Marbel;
        
