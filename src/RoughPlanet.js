
      import React, { useEffect, useState } from "react";
      import { Sphere, useTexture } from "@react-three/drei";
      
      const RoughPlanet = (props) => {
        const [map,normalMap,roughnessMap] = useTexture([
            "/roughtextures/Scene_-_Root_baseColor.png","/roughtextures/Scene_-_Root_normal.png","/roughtextures/Scene_-_Root_metallicRoughness.png"
        ]);

        const [rotation,setRotation] =useState(1);

        useEffect(()=>{
            setRotation(rotation+.001)
        },[rotation])
        return (
          <Sphere args={[1, 200, 200]} 
          onClick={props.onClick}
          

          position={[-13, 5.75,3.75]}
          rotation-y={rotation}
          //rotation-x={rotation}
          >
            <meshPhysicalMaterial
             // aoMap={aoMap}
             
              map={map}
             // displacementMap={displacementMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              displacementScale={0.1}
            />
          </Sphere>
        );
      };
      
      export default RoughPlanet;
        
