import { store } from '@risingstack/react-easy-state';

const kept = store({
  score: 0,
  rndNum : '',
  increment: () => kept.score++,
  playersChoice : '',
  page : 1,
  houseChoice : '',
  changingTimer : 0,
  showRes : false
});

export default kept