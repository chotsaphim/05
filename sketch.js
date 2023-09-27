let sharePrice;
let numberOfShares;
let totalCost;
let errorMsg;
let instructionText;

function setup() {
  createCanvas(600, 200);
  
  // Instruction text
  instructionText = 'Enter the share price and the number of shares to calculate the total cost.';
  
  // Styling the body and adding a title
  document.body.style.fontFamily = 'Arial, sans-serif';
  document.body.style.backgroundColor = '#f0f0f0';
  createElement('h2', 'Stock Share Calculator').style('color', '#333');
  
  // Creating and styling input fields
  createP('Share Price ($):').style('margin-bottom', '4px');
  sharePrice = createInput('');
  sharePrice.input(calculateTotalCost);
  sharePrice.style('padding', '8px');
  sharePrice.style('border-radius', '4px');
  sharePrice.style('border', '1px solid #ccc');
  
  createP('Number of Shares:').style('margin-bottom', '4px');
  numberOfShares = createInput('');
  numberOfShares.input(calculateTotalCost);
  numberOfShares.style('padding', '8px');
  numberOfShares.style('border-radius', '4px');
  numberOfShares.style('border', '1px solid #ccc');
  
  // Creating and styling reset button
  let resetButton = createButton('Reset');
  resetButton.mousePressed(resetInputs);
  resetButton.style('padding', '8px 12px');
  resetButton.style('margin-top', '10px');
  resetButton.style('border-radius', '4px');
  resetButton.style('border', 'none');
  resetButton.style('background-color', '#ff5757');
  resetButton.style('color', '#ffffff');
}

function draw() {
  background(240);
  
  fill(50);
  textSize(14);
  text(instructionText, 10, 20);
  
  // Display the error message if it exists
  fill(255, 0, 0); // Set the text color to red
  if (errorMsg) {
    textSize(16);
    text(errorMsg, 10, height - 60);
  }
  
  // Display the total cost if it exists
  fill(50); // Set the text color to dark gray
  if (totalCost !== undefined) {
    textSize(16);
    text('Total Cost: $' + totalCost.toFixed(2), 10, height - 30);
  }
}

function calculateTotalCost() {
  // Reset error message
  errorMsg = '';

  // Validate inputs
  let price = parseFloat(sharePrice.value());
  let number = parseFloat(numberOfShares.value());

  if (isNaN(price) || price < 0) {
    errorMsg = 'Please enter a valid share price.';
    totalCost = undefined;
    return;
  }
  
  if (isNaN(number) || number < 0) {
    errorMsg = 'Please enter a valid number of shares.';
    totalCost = undefined;
    return;
  }

  // Calculate the total cost if both inputs are valid
  if (!isNaN(price) && price >= 0 && !isNaN(number) && number >= 0) {
    totalCost = price * number;
  }
}

function resetInputs() {
  // Reset inputs and total cost
  sharePrice.value('');
  numberOfShares.value('');
  totalCost = undefined;
  errorMsg = '';
}
