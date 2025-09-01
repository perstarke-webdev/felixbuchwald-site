document.addEventListener("DOMContentLoaded", function() {
    const words = ["visions", "campaigns", "stories", "brands"];
    let index = 0;
    const dynamicText = document.querySelector(".hero-text-dynamic");

    if (dynamicText) {
        setInterval(() => {
            index = (index + 1) % words.length;
            dynamicText.textContent = words[index];
        }, 3000);
    }
});
