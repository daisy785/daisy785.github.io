const flowerArea = document.getElementById('flower-click-area');
const diyaArea = document.getElementById('diya-click-area');
const diyaLit = document.getElementById('diya-lit');
const aartiAudio = document.getElementById('aarti-audio');
const ganeshImage = document.getElementById('ganesh-image');

// Flower click logic
flowerArea.addEventListener('click', (e) => {
    const imageRect = ganeshImage.getBoundingClientRect();
    const startX = imageRect.left;
    const endX = imageRect.right;

    // Create multiple falling flowers
    for (let i = 0; i < 10; i++) {
        const flower = document.createElement('div');
        flower.classList.add('falling-flower');

        // Random horizontal start position from top-left to top-right
        const randomX = startX + (Math.random() * imageRect.width);
        flower.style.left = `${randomX}px`;
        flower.style.top = `${imageRect.top}px`;
        
        document.body.appendChild(flower);

        // Remove the flower after the animation ends
        flower.addEventListener('animationend', () => {
            flower.remove();
        });
    }
});
aartiAudio.loop = true;

// Diya click logic
diyaArea.addEventListener('click', () => {
    // Show the lit diya image
    diyaLit.classList.remove('hidden');
    
    // Add the moving animation class
    diyaLit.classList.add('moving-diya');
    
    // Play the aarti sound
    aartiAudio.play();
    console.log("Aarti is playing and diya is moving...");

});
