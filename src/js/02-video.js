import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

function saveTime(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}

player.on('timeupdate', throttle(saveTime, 1000));
