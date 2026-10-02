import Ground from "./Ground";
import Lighting from "./Lighting";
// import Enviornment from "./Enviornment";
import WorldSky from "./Sky"
// import Cube from "./Cube"
import Player from "../player/PlayerV";
import InputManager from "../player/InputManager";
import MouseInputManager from "../player/mouseInputManager";

export default function Scene() {
  return (
    <>
      <WorldSky/>
      <Lighting />
      {/* <Enviornment /> */}
      {/* <Cube/> */}
      <Ground />
      <Player/>
      <InputManager/>
      <MouseInputManager/>

      
    </>
  );
}