
      import React, { useEffect, useState } from "react";
      import { Sphere, useGLTF, useTexture,Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
      const Computer = (props) => {
        const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
        const [index,setIndex]= useState(0);
        useFrame(()=>{
            console.log('X: '+props.camera.position.x);
            console.log('Y: '+props.camera.position.y)
            console.log('Z: '+props.camera.position.z);
            console.log(props.camera.position.z < -.5)
            if(props.camera.position.z < -.5){
                setIndex(5)
            }

        })
        return (
            <primitive
            object={computer.scene}
            position-y={- 1.2}
            position-z={0}
           onClick={() => {
            props.camera.position.x = 0.05
            props.camera.position.y = -0.02
            props.camera.position.z = 1.65
            if(index == props.websites.length-1){
                setIndex(0)
            }else{
                setIndex(index+1)
            }
            

           
            }}
        >
            <Html
                position={[0, 0, 1.2]}
            >

                {/**
                 * Tylers Porfolio
                 * <iframe src="http://127.0.0.1:5173/"  />
                 * 
                 * Ubunutu
                 *  <iframe src="https://vivek9patel.github.io/"  />
                 * 
                 * Windows 11
                 * <iframe src="https://win11.vercel.app/"  />
                 * 
                 * Windows XP
                 * <iframe src="https://winxp.vercel.app/"  />
                 */}
            </Html>

            <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={1.17}
                position={[0, 1.56, - 1.4]}
                rotation-x={- 0.256}
            >
                {props.websites[index] != '' ? <iframe src={props.websites[index]} /> : null}

                {/**
                 * Tylers Porfolio
                 * <iframe src="http://127.0.0.1:5173/"  />
                 * 
                 * Ubunutu
                 *  <iframe src="https://vivek9patel.github.io/"  />
                 * 
                 * Windows 11
                 * <iframe src="https://win11.vercel.app/"  />
                 * 
                 * Windows XP
                 * <iframe src="https://winxp.vercel.app/"  />
                 */}
            </Html>
        </primitive>
        );
      };
      
      export default Computer;
        
