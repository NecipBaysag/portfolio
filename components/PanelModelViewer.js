import React from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";

const models = [
  "1-alarm.glb",
  "2-cycle.glb",
  "3-cake.glb",
  "4-earth.glb",
  "5-iglo.glb",
  "6-newspaper.glb",
  "7-radio.glb",
  "8-rocket.glb",
  "9-topgun.glb",
];

const ModelLoader = ({model}) => {
  const [way, setWay] = React.useState(model);
  React.useEffect(() => {
    setWay(model);
  }, [model]);
  const gltf = useLoader(GLTFLoader, way);
  return (
    <primitive object={gltf.scene} scale={0.50} />
  );
};

const PanelModelViewer = ({modelPath}) => {
  const sahne2 = React.useRef();
  const [model, setModel] = React.useState(modelPath);
  
  React.useEffect(() => {
    setModel(modelPath);
  }, [modelPath]);

  React.useEffect(() => {
    sahne2.current.height = sahne2.current.clientWidth;
  }, []);

  return (
    <Canvas
      id="c2"
      data-aos="fade-down-left"
      ref={sahne2}
      alpha="true"
      shadows
      style={{
        width: "90%",
        height: "500px",
      }}
    >
        <OrbitControls />
      <directionalLight color="white" position={[1, 1, 0]} />
      <ambientLight intensity={0.2} />
      <React.Suspense fallback={null}>
     
         <ModelLoader model={model}  />
        
      </React.Suspense>
    </Canvas>
  );
};

export default PanelModelViewer;
