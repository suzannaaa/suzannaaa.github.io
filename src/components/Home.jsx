// import { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

// function MyModel() {
//   const { scene } = useGLTF('/pompompurin.glb');
//   const modelRef = useRef();
//   const wireframeRef = useRef();

//   useEffect(() => {
//     scene.traverse((child) => {
//       if (child.isMesh) {
//         const wireMaterial = new THREE.MeshBasicMaterial({
//           color: 0xff0000,
//           wireframe: true,
//         });
//         const wireMesh = new THREE.Mesh(child.geometry.clone(), wireMaterial);
//         wireMesh.position.copy(child.position);
//         wireMesh.rotation.copy(child.rotation);
//         wireMesh.scale.copy(child.scale);
//         wireframeRef.current.add(wireMesh);
//       }
//     });
//   }, [scene]);

//   return (
//     <group ref={modelRef} position={[0, -1, 0]} scale={1}>
//       <primitive object={scene} />
//       <group ref={wireframeRef} />
//     </group>
//   );
// }

// import { BoxHelper } from 'three';
// import { useRef, useEffect } from 'react';

// function MyModel() {
//   const { scene } = useGLTF('/pompompurin.glb');
//   const modelRef = useRef();
//   const helperRef = useRef();

//   useEffect(() => {
//     if (modelRef.current) {
//       helperRef.current = new BoxHelper(modelRef.current, 0xff0000); // red outline
//       modelRef.current.add(helperRef.current);
//     }
//   }, []);

//   return (
//     <group ref={modelRef} position={[0, -1, 0]} scale={30}>
//       <primitive object={scene} />
//     </group>
//   );
// }

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

function MyModel() {
    const { scene } = useGLTF('/pompompurin.glb');
    return <primitive object={scene} />;
}


// import { useRef, useEffect, useState } from 'react';
// import { useFrame } from '@react-three/fiber';

// function MyModel() {
//   const { scene } = useGLTF('/pompompurin.glb');
//   const groupRef = useRef();
//   const [autoRotate, setAutoRotate] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => setAutoRotate(false), 3000); // stop after 3s
//     return () => clearTimeout(timeout);
//   }, []);

//   useFrame(() => {
//     if (autoRotate && groupRef.current) {
//       groupRef.current.rotation.y += 0.005;
//     }
//   });

//   return (
//     <group ref={groupRef} position={[0, -1, 0]} scale={1}>
//       <primitive object={scene} />
//     </group>
//   );
// }

export default function Home() {
    const [showTooltip, setShowTooltip] = useState(true);

    return (
        <section
            className="overflow-hidden min-h-screen bg-peach dark:bg-gray-900 font-mono py-16 md:py-10 px-6 text-center"
        >
            {/* <h2 className="dark:text-white text-3xl font-bold mb-8">Hello, I'm Suzanna!</h2> */}
            <div className="gap-6 mx-auto md:grid-cols-3">
                {/* 
                <div className="bg-yellow-50 p-4 rounded-xl shadow-md">
                    <h2 className="text-lg font-bold mb-2">👋 About Me</h2>
                    <p className="text-sm text-gray-700">
                        I'm Suzanna, a developer with a soft spot for delightful UX and playful tech.
                        I build things that bring people joy and solve real problems.
                    </p>
                </div> */}

                    <div className="relative w-full md:h-[85vh] mx-auto aspect-[2/3]">

                        {/* CALLOUTS */}
                        {/* Callout Top Left */}
                        <div className="absolute -top-4 -left-4 w-32 md:w-48 text-xs md:text-lg text-left rotate-[-8deg] z-40">
                            <div className="bg-yellow-100 border border-yellow-300 p-2 rounded-xl shadow">
                                🎵 Music
                            </div>
                            <div className="w-0 h-0 border-t-[10px] border-t-yellow-300 border-l-[10px] border-l-transparent ml-3 -mt-1" />
                        </div>

                        {/* Callout Top Right */}
                        <div className="absolute -top-4 -right-4 w-32 md:w-48 text-xs md:text-lg text-right rotate-[8deg] z-40">
                            <div className="bg-pink-100 border border-pink-300 p-2 rounded-xl shadow">
                                🎨 Loves innovation
                            </div>
                            <div className="w-0 h-0 border-t-[10px] border-t-pink-300 border-r-[10px] border-r-transparent mr-3 -mt-1 float-right" />
                        </div>

                        {/* Callout Bottom Left */}
                        <div className="absolute -bottom-4 -left-4 w-36 md:w-48 text-xs md:text-lg text-left -rotate-6 z-40">
                            <div className="bg-green-100 border border-green-300 p-2 rounded-xl shadow">
                                💡 Interested in design
                            </div>
                            <div className="w-0 h-0 border-b-[10px] border-b-green-300 border-l-[10px] border-l-transparent ml-3 -mt-1" />
                        </div>

                        {/* Callout Bottom Right */}
                        <div className="absolute -bottom-4 -right-4 w-36 md:w-48 text-xs md:text-lg text-right rotate-6 z-40">
                            <div className="bg-blue-100 border border-blue-300 p-2 rounded-xl shadow">
                                📖 Enjoys reading books
                            </div>
                            <div className="w-0 h-0 border-b-[10px] border-b-blue-300 border-r-[10px] border-r-transparent mr-3 -mt-1 float-right" />
                        </div>

                        {/* <h2 className="text-xl font-bold mb-4">Featured Project</h2> */}

                        {/* INNER BOX: overflow-hidden for canvas, blob, etc. */}
                        <div className="relative w-full h-full rounded-xl overflow-hidden border-[5px] border-dotted border-yellow-500">
                            {/* <img
                            src="https://res.cloudinary.com/drngi3j2z/image/upload/v1747319203/Pompompurin%20Greeting.gif"
                            alt="Decorative backdrop"
                            className="absolute inset-0 w-full h-full object-cover"
                        /> */}
                            {/* <div className="absolute inset-0 m-auto h-[80%] w-[100%] bg-yellow-200 rounded-full blur-sm" /> */}

                            <h2 className="relative top-10 z-10 dark:text-white text-xl md:text-3xl font-bold">Hello, I'm Suzanna!</h2>

                            {showTooltip && (
                                <div
                                    className="absolute top-24 md:top-40 left-[20%] md:left-[43%] w-52 z-20 bg-white/80 text-sm px-3 py-1 rounded-full shadow-md animate-bounce flex items-center gap-2 cursor-pointer"
                                    onClick={() => setShowTooltip(false)}
                                >
                                    🖱️ Drag to rotate!
                                    <button className="text-xs font-bold text-gray-600 hover:text-red-500">✕</button>
                                </div>
                            )}
                            <svg
                                className="absolute inset-0 w-full h-full text-yellow-200 dark:text-yellow-500 z-0"
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                            >
                                <path
                                    fill="currentColor"
                                    d="M49.4,-58.5C63.6,-48.7,75.3,-32.5,77.3,-15.7C79.3,1.1,71.6,18.5,61.2,34.1C50.9,49.6,37.8,63.3,22.4,69.4C7.1,75.5,-10.5,73.9,-25.1,66.3C-39.7,58.7,-51.2,45.2,-60.4,30.3C-69.6,15.4,-76.5,-0.8,-71.4,-13.5C-66.2,-26.2,-49.1,-35.4,-34.5,-45.7C-19.9,-56.1,-10,-67.5,3.8,-72.3C17.6,-77.2,35.2,-75.3,49.4,-58.5Z"
                                    transform="translate(100 100)"
                                />
                            </svg>
                            <Canvas className="relative top-5 md:top-10 z-10" camera={{ position: [0, 5, 100], fov: 45 }}>
                                <ambientLight intensity={0.5} />
                                <directionalLight position={[5, 5, 5]} intensity={1} />
                                <Environment preset="sunset" background={false} />
                                <MyModel />
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                    target={[-1, -10, -10]}
                                />
                            </Canvas>
                        </div>
                    </div>

                    {/* <div className="bg-yellow-100 p-4 rounded-xl">
                    <h2 className="text-lg font-bold mb-2">✨ Fun Facts</h2>
                    <ul className="text-sm list-disc list-inside text-left">
                        <li>Coffee-powered coder</li>
                        <li>Loves Studio Ghibli and Sanrio</li>
                        <li>Explores AI + UI/UX intersections</li>
                    </ul>
                </div> */}
                
                    <h2 className="relative bottom-20 z-10 dark:text-white text-sm md:text-2xl font-bold">Here are some fun facts about me!</h2>
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