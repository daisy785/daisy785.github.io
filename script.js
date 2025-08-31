const startClickArea = document.getElementById('start-click-area');
const diyaLit = document.getElementById('diya-lit');
const aartiAudio = document.getElementById('aarti-audio');
const ganeshImage = document.getElementById('ganesh-image');
let hasStarted = false;
let flowerInterval = null;

// Function to continuously create and drop flowers
function startContinuousFlowerFall() {
    const imageRect = ganeshImage.getBoundingClientRect();
    const startX = imageRect.left;
    const width = imageRect.width;

    flowerInterval = setInterval(() => {
        const flower = document.createElement('div');
        flower.classList.add('falling-flower');
        const randomX = startX + (Math.random() * width);
        flower.style.left = `${randomX}px`;
        flower.style.top = `${imageRect.top}px`;
        document.body.appendChild(flower);
        
        // Remove the flower after its animation ends
        flower.addEventListener('animationend', () => {
            flower.remove();
        });
    }, 500); // Drop a new flower every 500ms (adjust as needed)
}

// Click event listener for the overlay
startClickArea.addEventListener('click', () => {
    if (!hasStarted) {
        // Hide the overlay and reveal the main content
        startClickArea.style.display = 'none';

        // Show the lit diya image
        diyaLit.classList.remove('hidden');
        
        // Add the moving animation class to the diya
        diyaLit.classList.add('moving-diya');
        
        // Start the continuous flower fall animation
        startContinuousFlowerFall();
        
        // Set the audio to loop continuously and play
        aartiAudio.loop = true;
        aartiAudio.play();
        
        hasStarted = true;
        console.log("Aarti is playing and diya is moving, flowers are falling continuously...");
    }
});
