
      import React, { useEffect, useState } from "react";
      import { Float, OrbitControls, PivotControls, PresentationControls, Sphere, Torus, useTexture } from "@react-three/drei";
      
      const Rock = (props) => {
        const [aoMap,map,displacementMap,normalMap,roughnessMap] = useTexture([
        "Rock020_1K_AmbientOcclusion.jpg","Rock020_1K_Color.jpg","Rock020_1K_Displacement.jpg","Rock020_1K_Normal.jpg","Rock020_1K_Roughness.jpg"
        ]);
        const [rotation,setRotation] =useState(1);

        useEffect(()=>{
            setRotation(rotation+.001)
        },[rotation])

        return (
            <>
            <PresentationControls>
          <Sphere 
          onClick={props.onClick}
          args={[1, 200, 200]}
          scale={.5}
          position={[2, 1.75,-11]}
          rotation-y={rotation}
          rotation-x={rotation} >
            
            <meshPhysicalMaterial
              aoMap={aoMap}
              map={map}
              displacementMap={displacementMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              displacementScale={0.5}
              color="#f3702d"
            />
          </Sphere>
             <Torus
             args={[4,.1,16,100]}
                 position={[2, 1.75, -11]}
                 scale={.5}
                 rotation-x={-rotation}
                 rotation-y={rotation}
                 
             
                 >
                 <meshStandardMaterial color="red"  />
             </Torus>
             <Torus
             args={[4,.1,16,100]}
                 position={[2, 1.75, -11]}
                 scale={.5}
                 rotation-x={rotation+20}
                 rotation-y={rotation+20}
                 
             
                 >
                 <meshStandardMaterial color="yellow"  />
             </Torus>
             </PresentationControls>
             </>
        );
      };
      
      export default Rock;
        
