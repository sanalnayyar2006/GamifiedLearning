import * as THREE from "three";
import Ground from "./Ground";
import Lighting from "./Lighting";
import WorldSky from "./Sky"
import Player from "../player/PlayerV";
import InputManager from "../player/InputManager";
import MouseInputManager from "../player/mouseInputManager";
import {useRef} from "react"
export default function Scene() {
  const groundRef = useRef<THREE.Mesh>(null);
  return (
    <>
      <WorldSky/>
      <Lighting />
      {/* <Enviornment /> */}
      {/* <Cube/> */}
      <Ground ref={groundRef}/>
      <Player groundRef={groundRef}/>
      <InputManager/>
      <MouseInputManager/>

      
    </>
  );
}