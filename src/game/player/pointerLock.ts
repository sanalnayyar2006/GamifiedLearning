let canvas: HTMLCanvasElement | null = null;

export function setGameCanvas(
   
    gameCanvas: HTMLCanvasElement
) {
    canvas = gameCanvas;
}

export function requestGamePointerLock() {
    console.log("requestGamePointerLock called");
    if (!canvas) return;

    if (document.pointerLockElement !== canvas) {
        canvas.requestPointerLock();
    }
}

export function exitGamePointerLock() {
    document.exitPointerLock();
}