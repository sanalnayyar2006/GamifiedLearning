import {Sky} from '@react-three/drei'

export default function WorldSky(){
    return (
        <Sky
            distance = {450000}
            sunPosition = {[10,20,10]}
            inclination={0}
            azimuth = {0.25}
        />
        
    )
}