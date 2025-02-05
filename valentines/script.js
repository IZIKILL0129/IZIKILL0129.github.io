document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("no-btn");

    noBtn.addEventListener("mouseover", function () {
        const randomX = Math.random() * window.innerWidth * 0.7; // 70% of screen width
        const randomY = Math.random() * window.innerHeight * 0.7; // 70% of screen height

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });
});
