export default function Character(){
    return(
        <group>
        <mesh castShadow>
            <capsuleGeometry args={[0.5,1,8,10]}/>
            
            <meshStandardMaterial color="orange"/>
        </mesh>

        <mesh position={[-0, 0.5, -0.8]}>
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshStandardMaterial color="red" />
        </mesh>
        </group>
    )
}