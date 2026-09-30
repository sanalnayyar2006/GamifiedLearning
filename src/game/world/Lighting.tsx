export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight 
      castShadow
      position={[10, 20, 10]} intensity={3}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-camera-left={-50}
      shadow-camera-right={50}
      shadow-camera-top={50}
      shadow-camera-bottom={-50}
      shadow-camera-near={1}
      shadow-camera-far={50}
      />

    </>
  );
}