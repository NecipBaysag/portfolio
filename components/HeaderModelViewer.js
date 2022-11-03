import React from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

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

const Model = ({ currentModel }) => {
  const [rotationY, setRotationY] = React.useState(0);

  useFrame(({ clock }) => {
    setRotationY(clock.getElapsedTime());
  });

  const gltf = useLoader(GLTFLoader, "/models/" + models[currentModel]);
  return (
    <primitive rotation={[0, rotationY, 0]} object={gltf.scene} scale={0.30} />
  );
};

const HeaderModelViewer = () => {
  const sahne = React.useRef();
  const [currentModel, setCurrentModel] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setCurrentModel(currentModel == 8 ? 0 : currentModel + 1);
    }, 7000);
  }, [currentModel]);

  React.useEffect(() => {
    sahne.current.height = sahne.current.clientWidth;
  }, []);

  return (
    <Canvas
      id="c1"
      data-aos="fade-down-left"
      ref={sahne}
      alpha="true"
      shadows
      style={{
        width: "90%",
        height: "400px",
        borderRadius: "50%",
        borderSize:"0px",
        boxShadow:
          "0px 0px 40px 20px rgba(156, 39, 176, 1.5),inset 0px 0px 40px 20px rgba(156, 39, 176, 1.5)",
      }}
    >
      <directionalLight color="white" position={[1, 1, 0]} />
      <ambientLight intensity={0.2} />
      <React.Suspense fallback={null}>
        {models.map((m, i) => {
          if (i == currentModel) return <Model key={m} currentModel={i} />;
        })}
      </React.Suspense>
    </Canvas>
  );
};

export default HeaderModelViewer;
