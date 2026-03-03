import { formatScore } from './utils.js';

export function initUI(container, state) {
  const heading = document.createElement('h1');
  heading.textContent = 'I Love You Cupcake';

  const score = document.createElement('p');
  score.textContent = `Score: ${formatScore(state.player.score)}`;

  container.append(heading, score);
}
