import * as THREE from "three"
import {forwardRef} from "react"
const Ground = forwardRef<THREE.Mesh>((props,ref)=> {
  return (
    <mesh ref={ref}
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
});

Ground.displayName = "Ground";

export default Ground;