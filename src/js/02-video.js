import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

function currentTimeInStorage(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.on('timeupdate', throttle(currentTimeInStorage, 1000));
