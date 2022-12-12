
      import React, { useEffect, useState } from "react";
      import { Center, Sphere, Text3D, useTexture, Text, Torus} from "@react-three/drei";
import { MeshNormalMaterial } from "three";
      
      const SandPlanet = (props) => {
        const [map,normalMap,roughnessMap] = useTexture([
            "Scene_-_Root_baseColor.png","Scene_-_Root_normal.png","Scene_-_Root_metallicRoughness.png"
        ]);

        const [rotation,setRotation] =useState(1);
        useEffect(()=>{
            setRotation(rotation+.001)
        },[rotation])
        return (<>
          <Torus
             args={[4,.3,4,100,100]}
             position={[5, 0.75,-0.85]}
                 scale={.5}
                 rotation-x={-1.9}
                // rotation-y={rotation}
                rotation-z={-rotation*.2}
                
                 
             
                 >
                  <meshPhysicalMaterial
             // aoMap={aoMap}
             
              map={map}
             // displacementMap={displacementMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              displacementScale={0.1}
              color={"blue"}
            />
             </Torus>
   
          <Sphere args={[1, 200, 200]} 
          onClick={()=>{props.moveCameraToLocation(9, 2.5,-5.75)}}
          

          position={[5, 0.75,-0.75]}
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
            
              <Text
                    font="./bangers-v20-latin-regular.woff"

                    fontSize={1.8}
                    position={[0, 0, 1]}
                    //rotation-y={spaceshipRoatation}
                    //rotation-z={spaceshipRoatation}
                    maxWidth={2}
                    color={'White'}
                    height={100}
                >
                    NV
                </Text>

                <Sphere args={[1, 200, 200]} 
          onClick={props.onClick}
          

          position={[1, 1, 1]}
          rotation-y={rotation}
          //rotation-x={rotation}
          scale={.2}
          >
             <meshPhysicalMaterial
             // aoMap={aoMap}
             
              map={map}
             // displacementMap={displacementMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              displacementScale={0.1}
              color={'white'}
            />
            </Sphere>
          </Sphere>
          </>
        );
      };
      
      export default SandPlanet;
        
