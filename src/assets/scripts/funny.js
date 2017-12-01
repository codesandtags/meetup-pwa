const secretCode = 'cocoman';
const pressed = [];
const audio = document.querySelector('.cartoon');
const music = document.querySelector('.music');

window.addEventListener('keyup', function(e) {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    if (audio && music) {
      audio.play();
      music.play();
      audio.currentTime = 0;
      console.log('DING DING!');
    }
    //cornify_add();
  }
});
