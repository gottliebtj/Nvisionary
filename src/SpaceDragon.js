
import React, { useEffect, useState } from "react";
import { Sphere, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";


const SpaceDragon = (props) => {

    const space_dragon = useGLTF('./space_dragon/scene.gltf');
    const { nodes, scene, materials, animations } = space_dragon;

    const [rotation, setRotation] = useState(1);
    const [counter, setCounter] = useState(.01);
    const [animationIndex, setAnimationIndex] = useState(0);
    const [positionX, setSpaceDragonPositionX] = useState(30);
    const [positionY, setSpaceDragonPositionY] = useState(-25.65);
    const [positionZ, setSpaceDragonPositionZ] = useState(10);
    const [rotationY, setSpaceDragonRotationY] = useState(0);

    const [direction, setDirection] = useState('straight');


    var mixer;


    useEffect(() => {
        animateSpaceDragon()
    }, [positionZ,rotationY]);
    

    


    const animateSpaceDragon = async () => {
        if( positionZ < 0 && rotationY > 0){
            setSpaceDragonRotationY(rotationY-.008);
            return;
        }
        //gets there and turns around
        if( positionZ > 30 && rotationY < 3){
            setSpaceDragonRotationY(rotationY+.008);
            setSpaceDragonPositionZ(positionZ-.01);
            return;
        }

        //starts to come back
        if( positionZ > 0 && rotationY > 3){
            setSpaceDragonPositionZ(positionZ-.01);
            return
        }

        //
        if(positionZ < 30 && rotationY < 3){
            setSpaceDragonPositionZ(positionZ+.01);
            return;
        }
       
       

       
        
    }


    useFrame((state, delta) => {
        mixer = new THREE.AnimationMixer(space_dragon.scene);
        var action = mixer.clipAction(space_dragon.animations[animationIndex]).play();
        action.play();
        //console.log(delta)
        mixer.update(counter);
        setCounter(counter + .025)
        // console.log(ca);
    });


    useFrame((state, delta) => {
        
    })


    return (
        <primitive
            object={space_dragon.scene}
            position={[30, -25.65, positionZ]}
            scale={.2}
        //rotation-z={2}
        rotation-y={rotationY}
        //rotation-y={rotation}

        >


        </primitive>
    );
};

export default SpaceDragon;

