"use client";

import { useEffect } from "react";
import { input } from "./Input";

export default function InputManager() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case "KeyW":
          input.movement.forward = true;
          break;

        case "KeyS":
          input.movement.backward = true;
          break;

        case "KeyA":
          input.movement.left = true;
          break;

        case "KeyD":
          input.movement.right = true;
          break;

        case "Space":
          input.actions.jump = true;
          break;

        case "ShiftLeft":
        case "ShiftRight":
          input.actions.sprint = true;
          break;

        case "KeyE":
          input.actions.interact = true;
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case "KeyW":
          input.movement.forward = false;
          break;

        case "KeyS":
          input.movement.backward = false;
          break;

        case "KeyA":
          input.movement.left = false;
          break;

        case "KeyD":
          input.movement.right = false;
          break;

        case "Space":
          input.actions.jump = false;
          break;

        case "ShiftLeft":
        case "ShiftRight":
          input.actions.sprint = false;
          break;

        case "KeyE":
          input.actions.interact = false;
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return null;
}