class Button {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 10;
    this.height = 10;
    this.clicked = false;
  }

  position(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    // Draw the button
    fill(this.clicked ? 255 : 0);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }

  clickedOn() {
    // Check if the mouse is clicked within the button
    if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
      this.clicked = !this.clicked; // Toggle the clicked state
    }
  }
}
