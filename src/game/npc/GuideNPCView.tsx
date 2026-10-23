"use client";

export default function GuideNPCView() {
    return (
        <group position={[0, 1.6, 5]}>
            <mesh castShadow>
                <capsuleGeometry args={[0.35, 1.5, 8, 16]} />
                <meshStandardMaterial color="orange" />
            </mesh>
        </group>
    );
}