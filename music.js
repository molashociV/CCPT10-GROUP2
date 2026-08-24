document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");
    const musicBox = document.getElementById("musicBox");
    const musicOpen = document.getElementById("musicOpen");
    const musicClose = document.getElementById("musicClose");
    const musicToggle = document.getElementById("musicToggle");
    const musicVolume = document.getElementById("musicVolume");

    if (!music || !musicBox || !musicOpen) return;

    music.volume = 0.5;

    musicToggle.addEventListener("click", async () => {
        if (music.paused) {
            await music.play();
            musicToggle.textContent = "❚❚ Pause";
        } else {
            music.pause();
            musicToggle.textContent = "▶ Play";
        }
    });

    musicVolume.addEventListener("input", () => {
        music.volume = Number(musicVolume.value);
    });

    musicClose.addEventListener("click", () => {
        music.pause();
        musicToggle.textContent = "▶ Play";
        musicBox.classList.add("hidden");
        musicOpen.classList.add("visible");
    });

    musicOpen.addEventListener("click", () => {
        musicBox.classList.remove("hidden");
        musicOpen.classList.remove("visible");
    });
});