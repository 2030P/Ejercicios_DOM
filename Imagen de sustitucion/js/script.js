window.onload = function () {

    const bombilla = document.getElementById('bombilla');

    bombilla.addEventListener('click', function () {

        if (bombilla.src.includes("pic_bulboff.png")) {
            bombilla.src = "img/pic_bulbon.png";
        } else {
            bombilla.src = "img/pic_bulboff.png";
        }

    });
}
