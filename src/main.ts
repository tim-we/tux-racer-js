// @ts-expect-error ignore css module
import "./style.css";

import { RacingScene } from "./game/racing-scene.ts";
import { GlContext } from "./gl/gl-context.ts";
import { MatrixStack } from "./gl/matrix-stack.ts";
import { Matrices } from "./math/matrices.ts";
import { Settings } from "./settings.ts";
import { GameState } from "./game/game-state.ts";
import { GameContext } from "./game/game-context.ts";
import { Time } from "./util/time.ts";
import { KeyInput } from "./input/key-input.ts";
import { TouchInput } from "./input/touch-input.ts";
import { CourseConfig, CourseConfigs } from "./game/course/course-configs.ts";
import { Environment, Environments } from "./game/environment/environments.ts";
import { Hud } from "./hud.ts";

const courseConfig = getCourseConfigFromUrl();
const environment = getEnvironmentFromUrl();

const canvas: HTMLCanvasElement = document.getElementById(
  "game-canvas",
) as HTMLCanvasElement;
const gl: WebGL2RenderingContext = canvas.getContext(
  "webgl2",
) as WebGL2RenderingContext;

GlContext.gl = gl;
GlContext.modelViewMatrix = new MatrixStack();

const hud = new Hud();

const keyInput = new KeyInput();
const touchInput = new TouchInput();

const racingScene = new RacingScene();
await racingScene.init(courseConfig, environment);

hideLoadingScreen();

let lastFrameTime = 0;
requestAnimationFrame(renderFrame);

function renderFrame(time: number): void {
  if (lastFrameTime !== 0) {
    const timeStep = time - lastFrameTime;

    resizeCanvas();

    racingScene.update(
      timeStep / Time.ONE_SECOND_IN_MILLISECONDS,
      keyInput.keyState,
      touchInput.touchState,
    );

    touchInput.draw();

    hud.updateHud();

    if (GameContext.state === GameState.TERMINATED) {
      onGameTerminated();
      return;
    }
  }

  lastFrameTime = time;
  requestAnimationFrame(renderFrame);
}

function resizeCanvas(): void {
  const dpr = window.devicePixelRatio;
  const { width, height } = canvas.getBoundingClientRect();
  const displayWidth = Math.round(width * dpr);
  const displayHeight = Math.round(height * dpr);

  const needsResize =
    canvas.width != displayWidth || canvas.height != displayHeight;

  if (needsResize) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;

    gl.viewport(0, 0, canvas.width, canvas.height);

    GlContext.perspectiveMatrix = Matrices.createPerspectiveMatrix(
      Settings.FIELD_OF_VIEW,
      canvas.width / canvas.height,
      Settings.NEAR_CLIPPING_DISTANCE,
      Settings.FAR_CLIPPING_DISTANCE + Settings.FAR_CLIPPING_FUDGE_AMOUNT,
    );
  }
}

function getCourseConfigFromUrl(): CourseConfig {
  const urlParams = new URLSearchParams(window.location.search);
  const course = urlParams.get("course");
  switch (course) {
    case "frozen-river":
      return CourseConfigs.FROZEN_RIVER;

    case "challenge-one":
      return CourseConfigs.CHALLENGE_ONE;

    case "chinese-wall":
      return CourseConfigs.CHINESE_WALL;

    case "downhill-fear":
      return CourseConfigs.DOWNHILL_FEAR;

    case "explore-mountains":
      return CourseConfigs.EXPLORE_MOUNTAINS;

    case "frozen-lakes":
      return CourseConfigs.FROZEN_LAKES;

    case "hippo-run":
      return CourseConfigs.HIPPO_RUN;

    case "holy-grail":
      return CourseConfigs.HOLY_GRAIL;

    case "in-search-of-vodka":
      return CourseConfigs.IN_SEARCH_OF_VODKA;

    case "milos-castle":
      return CourseConfigs.MILOS_CASTLE;

    case "path-of-daggers":
      return CourseConfigs.PATH_OF_DAGGERS;

    case "penguins-cant-fly":
      return CourseConfigs.PENGUINS_CANT_FLY;

    case "quiet-river":
      return CourseConfigs.QUIET_RIVER;

    case "secret-valleys":
      return CourseConfigs.SECRET_VALLEYS;

    case "this-means-something":
      return CourseConfigs.THIS_MEANS_SOMETHING;

    case "tux-at-home":
      return CourseConfigs.TUX_AT_HOME;

    case "twisty-slope":
      return CourseConfigs.TWISTY_SLOPE;

    case "wild-mountains":
      return CourseConfigs.WILD_MOUNTAINS;

    case "bumpy-ride":
      return CourseConfigs.BUMPY_RIDE;

    case "bunny-hill":
    default:
      return CourseConfigs.BUNNY_HILL;
  }
}

function getEnvironmentFromUrl(): Environment {
  const urlParams = new URLSearchParams(window.location.search);
  const environment = urlParams.get("environment");
  switch (environment) {
    case "night":
      return Environments.NIGHT;

    case "cloudy":
      return Environments.CLOUDY;

    case "sunny":
    default:
      return Environments.SUNNY;
  }
}

function hideLoadingScreen(): void {
  const loadingScreenElement = document.getElementById(
    "loading-screen",
  ) as HTMLDivElement;

  loadingScreenElement.classList.add("faded-out");
  setTimeout(() => loadingScreenElement.classList.add("hidden"), 300);
}

function onGameTerminated(): void {
  const hasMenu = new URLSearchParams(window.location.search).has("menu");
  if (hasMenu) {
    setTimeout(() => (window.location.href = "../index.html#/practise"), 500);
  }
}

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (key === "escape") {
    onGameTerminated();
  } else if (key === "r") {
    window.location.reload();
  }
});
