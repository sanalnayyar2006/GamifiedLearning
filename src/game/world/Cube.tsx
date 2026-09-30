export default function Cube() {
  return (
    <mesh
      position={[0,3,0]}
      castShadow
    >
      <boxGeometry 
      args={[2,2,2]}
       />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}