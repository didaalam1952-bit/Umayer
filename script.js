document.addEventListener('DOMContentLoaded', () => {
    const promptInput = document.getElementById('prompt-input');
    const generateBtn = document.getElementById('generate-btn');
    const generatedImage = document.getElementById('generated-image');

    generateBtn.addEventListener('click', () => {
        const prompt = promptInput.value.trim();

        // If the prompt is empty, do nothing or handle it as you see fit.
        // For this version, we'll proceed and let the placeholder service handle an empty text parameter.
        if (!prompt) {
            // Optional: alert the user or set a default message
            console.log("Prompt is empty. Using default text.");
        }

        // Encode the prompt to be used in a URL
        const encodedPrompt = encodeURIComponent(prompt);

        // Construct the new image URL using placehold.co
        // Format: https://placehold.co/{width}x{height}/{background_color}/{text_color}?text={your_text}
        const imageUrl = `https://placehold.co/600x400/EEE/31343C?text=${encodedPrompt || '...'}`;

        // Update the image source
        generatedImage.src = imageUrl;
    });

    // Optional: Allow pressing Enter to generate
    promptInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            generateBtn.click();
        }
    });
});
