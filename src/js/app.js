import randomMinMaxNot from './utils';
const board = Array.from(document.querySelectorAll('.cell'));

function redrawPosition() {
  const activeCell = board.find((el) => el.classList.contains('target'));
  const index = board.indexOf(activeCell);
  board[randomMinMaxNot(0, 15, index)].classList.add('target');
  activeCell.classList.remove('target');
}

setInterval(redrawPosition, 1000);