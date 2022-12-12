
      import React, { useEffect, useState } from "react";
      import { Float, GizmoHelper, PivotControls, Sphere, useGLTF, useTexture } from "@react-three/drei";
      import * as THREE from 'three'
      import { useFrame } from "@react-three/fiber";


      const Liberty = (props) => {
        
        const liberty = useGLTF('./statue_of_liberty/scene.gltf');
        const { nodes, scene, materials, animations } = liberty;

        const [rotation,setRotation] =useState(1);
        const [counter,setCounter] =useState(.01);
        const [animationIndex,setAnimationIndex] =useState(3);



       
        useEffect(()=>{
            setRotation(rotation+.0007)
            
        },[rotation])
        return (

     <primitive
            object={liberty.scene}
            position={[-20,30,0]}
            scale={.1}
            //rotation-z={1}
            //rotation-x={4}
            rotation-y={rotation}

            rotation-x={rotation}
                
        >
        </primitive>

       
        );
      };
      
      export default Liberty;
        
