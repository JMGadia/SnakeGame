/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('canvas')
const box = canvas.getContext('2d')

let snake = [41, 40]
let food = 43
let direction = 1
let n

const draw = (seat, color) => {
  box.fillStyle = color
  box.fillRect((seat % 20) * 20 + 1, ~~(seat / 20) * 20 + 1, 18, 18)
}

document.onkeydown = (evt) => {
  direction =
    snake[1] - snake[0] == (n = [-1, -20, 1, 20][(evt || event).keyCode - 37] || direction)
      ? direction
      : n
}

!(function () {
  snake.unshift((n = snake[0] + direction))

  if (
    snake.indexOf(n, 1) > 0 ||
    n < 0 ||
    n > 399 ||
    (direction == 1 && n % 20 == 0) ||
    (direction == -1 && n % 20 == 19)
  ) {
    return alert('GAME OVER!')
  }

  draw(n, 'lime')

  if (n == food) {
    while (snake.indexOf((food = ~~(Math.random() * 400))) > 0);
    draw(food, 'yellow')
  } else {
    draw(snake.pop(), 'black')
  }

  setTimeout(arguments.callee, 150)
})()

