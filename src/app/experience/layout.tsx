"use client";

import { Leva } from "leva";

import { Canvas } from "@react-three/fiber";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Leva />
      <Canvas shadows camera={{ fov: 75 }}>
        {children}
      </Canvas>
    </>
  );
}
