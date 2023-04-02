import React, { Suspense } from 'react';
import {Canvas} from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, RenderTexture , Text , Stage } from '@react-three/drei';
import ModelDraco from '../ModelsSection/ModelDraco';
import Shoe from "../ModelsSection/Shoe"
const WebDesign = () => {
  return (
    <Canvas style={{height:"500px"}}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
     <Stage environment="city" intensity={0.5}>
    <Shoe />
    {/* <Car /> */}

     </Stage>
    <OrbitControls autoRotate enableZoom={false} />
  </Canvas>
  );
}

export default WebDesign;
