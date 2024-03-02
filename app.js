const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 100;

// Create Blocks
class Block {
  constructor(xAxis, yAxis) {}
}

// Draw block
function addBlock() {
  const block = document.createElement("div");
  block.style.left = "100px";
  block.style.bottom = "50px";
  block.classList.add("block");

  grid.appendChild(block);
}

addBlock();
