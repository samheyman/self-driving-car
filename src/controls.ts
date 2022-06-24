export class Controls {
  forward: boolean | null;
  reverse: boolean | null;
  left: boolean | null;
  right: boolean | null;

  constructor(
    forward: boolean = false,
    reverse: boolean = false,
    left: boolean = false,
    right: boolean = false
  ) {
    this.forward = forward;
    this.reverse = reverse;
    this.left = left;
    this.right = right;
    this.#addKeyboardListeners();
  }

  #addKeyboardListeners() {
    if (document !== null) {
      document.onkeydown = (event: KeyboardEvent) => {
        switch (event.key) {
          case "ArrowLeft":
            this.left = true;
            break;
          case "ArrowRight":
            this.right = true;
            break;
          case "ArrowUp":
            this.forward = true;
            break;
          case "ArrowDown":
            this.reverse = true;
            break;
        }
      };
      document.onkeyup = (event: KeyboardEvent) => {
        switch (event.key) {
          case "ArrowLeft":
            this.left = false;
            break;
          case "ArrowRight":
            this.right = false;
            break;
          case "ArrowUp":
            this.forward = false;
            break;
          case "ArrowDown":
            this.reverse = false;
            break;
        }
      };
    }
  }
}
