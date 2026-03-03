import { createPlayer } from './player.js';
import { initTutorial } from './tutorial.js';
import { initAudio } from './audio.js';
import { buildWorld } from './world.js';
import { initUI } from './ui.js';

export function startGame() {
  const app = document.getElementById('app');
  if (!app) return;

  const world = buildWorld();
  const player = createPlayer();

  initTutorial(app);
  initAudio();
  initUI(app, { world, player });
}
