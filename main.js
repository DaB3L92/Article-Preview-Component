let openShare = document.getElementById("open-share");
let closeShare = document.getElementById("close-share");
let openShareDesk = document.getElementById("open-share-desk");
let triangulo = document.getElementById("triangulo");

let shareCont = document.querySelector(".share-container");
let avatarCont = document.querySelector(".avatar-container");

openShare.addEventListener("click", () => {
    shareCont.classList.remove("hidden");
    avatarCont.classList.add("hidden");
    return;
});

closeShare.addEventListener("click", () => {
    shareCont.classList.add("hidden");
    avatarCont.classList.remove("hidden");
    return;
});

openShareDesk.addEventListener("click", () => {
    if (shareCont.style.display === "none") {
        shareCont.style.display = "block";
        triangulo.style.display = "block";
    } else {
        shareCont.style.display = "none";
        triangulo.style.display = "none";
    }
    return;
});