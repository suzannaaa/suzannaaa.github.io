import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

function MyModel() {
  const { scene } = useGLTF('/pompompurin.glb');
  return <primitive object={scene} />;
}

export default function Projects() {
  return (
    <section
      className="bg-sky dark:bg-gray-900 font-mono py-16 px-6 text-center"
    >
      <h2 className="dark:text-white text-3xl font-bold mb-8">Projects 💻</h2>
      <div className="grid gap-6 max-w-5xl mx-auto md:grid-cols-2">

    <div className="p-6">
      {/* <h2 className="text-xl font-bold mb-4">Featured Project</h2> */}
      <div className="w-full max-w-md aspect-[4/3] rounded-xl mx-auto overflow-hidden">
        <Canvas camera={{ position: [0, 5, 100], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Environment preset="sunset" />
          <MyModel />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
      </div>
    </section>
  );
}

    // <section className="px-4 sm:px-8 py-8">
    //   <h2 className="text-2xl font-bold text-center mb-6">Featured Project</h2>
    //   <div className="w-full max-w-md aspect-[4/3] rounded-xl shadow-md mx-auto overflow-hidden">
    //     <Canvas camera={{ position: [2, 2, 2], fov: 45 }}>
    //       <ambientLight intensity={0.5} />
    //       <directionalLight position={[5, 5, 5]} intensity={1} />
    //       <Environment preset="sunset" />
    //       <MyModel />
    //       <OrbitControls enableZoom={false} />
    //     </Canvas>
    //   </div>
    // </section>