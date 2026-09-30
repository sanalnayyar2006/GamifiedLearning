import * as THREE from "three"
export default function Ground() {
  return (
    <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
    >
        <boxGeometry args={[100,100]}  />
        <meshStandardMaterial 
        color="green"
        side={THREE.DoubleSide}
        />
    </mesh>
  );
}