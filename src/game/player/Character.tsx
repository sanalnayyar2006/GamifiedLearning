export default function Character() {
    return (
        <group>
            <mesh position={[0, 1, 0]} castShadow>
                <capsuleGeometry args={[0.5, 1, 8, 10]} />
                <meshStandardMaterial color="orange" />
            </mesh>

            <mesh position={[0, 1.5, -0.8]}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </group>
    );
}