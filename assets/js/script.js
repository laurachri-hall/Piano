function playSound(note) {
    let audio = new Audio("assets/sounds/" + note + '.ogg');
        audio.play()
};