// Select the canvas and set up the context
const canvas = document.getElementById('spriteCanvas');
const ctx = canvas.getContext('2d');
// Load the sprite sheet
const spriteSheet = new Image();
spriteSheet.src = 'Spritewalksv1.png';

// Define the animation properties
const frameWidth = 400;  // Width of each frame
const frameHeight = 750; // Height of each frame
const frameCount = 4;   // Number of frames per animation cycle
const animationSpeed = 100; // Speed of animation in milliseconds
let currentFrame = 0;   // Current frame index
let frameTime = 0;      // Time elapsed since last frame change

// Define the position of the sprite on the canvas
let spriteX = 0;
let spriteY = 0;

// Define the row and column for the character's animation (e.g., side view walking)
const row = 0; // Change this value to select different characters or views
const colStart = 0; // Start column for the character

// Animation loop function
function animate(timestamp) {
    if (!frameTime) frameTime = timestamp;
    const elapsed = timestamp - frameTime;

    if (elapsed > animationSpeed) {
        // Update frame index
        currentFrame = (currentFrame + 1) % frameCount;
        frameTime = timestamp;
    }

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate the x position of the current frame in the sprite sheet
    const frameX = colStart * frameWidth + currentFrame * frameWidth;
    const frameY = row * frameHeight;

    // Draw the current frame on the canvas
    ctx.drawImage(
        spriteSheet,
        frameX, frameY, frameWidth, frameHeight, // Source rectangle
        spriteX, spriteY, frameWidth, frameHeight // Destination rectangle
    );

    // Request the next animation frame
    requestAnimationFrame(animate);
}

// Start the animation loop when the sprite sheet is loaded
spriteSheet.onload = function () {
    requestAnimationFrame(animate);
};
