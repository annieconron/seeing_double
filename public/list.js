let type;
let button;
let title;
let displayedText = [];
let buttons = [];

function setup() {
  createCanvas(400, 200);
  
  // Create title
  title = createElement('text', 'To Do:');
  title.position(width - 390, height - 190);
  
  // Create text input
  type = createInput();
  type.position(width - 340, height - 190);

  // Create button
  button = createButton("+");
  button.position(type.x + type.width + 5, type.y);
  button.mousePressed(submitText);
}

function draw() {
  background(220);

  // Display the entered text and buttons
  fill(0);
  textSize(24);
  for (let i = 0; i < displayedText.length; i++) {
    buttons[i].position(width - 390, height - 155 + i * 30);

    // Draw the button
    buttons[i].draw();

    // Display the text
    text(displayedText[i], width - 370, height - 140 + i * 30);
  }
}

function submitText() {
  // Add the input value to the displayed text array
  displayedText.push(type.value());

  // Create a new button for the added text
  let button = new Button();
  buttons.push(button);

  // Clear the input
  type.value("");
}

function mouseClicked() {
  // Check if any button is clicked
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].clickedOn();
  }
}