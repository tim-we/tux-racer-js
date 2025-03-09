export type CourseConfig = {
  folder: string;
  width: number;
  length: number;
  playWidth: number;
  playLength: number;
  startX: number;
  startY: number;
  angle: number;
  scale: number;
  finishBrake: number;
  showOutro: boolean;
  fogHeight: number;
};

export namespace CourseConfigs {
  export const BUNNY_HILL: CourseConfig = {
    folder: "bunny-hill",
    width: 90.0,
    length: 520.0,
    playWidth: 85.0,
    playLength: 470.0,
    startX: 45.0,
    startY: -3.5,
    angle: 25.0,
    scale: 7.0,
    finishBrake: 15.0,
    showOutro: true,
    fogHeight: 0.25,
  };

  export const FROZEN_RIVER: CourseConfig = {
    folder: "frozen-river",
    width: 100.0,
    length: 800.0,
    playWidth: 60.0,
    playLength: 785.0,
    startX: 50.0,
    startY: -3.5,
    angle: 32.0,
    scale: 18.0,
    finishBrake: 25.0,
    showOutro: false,
    fogHeight: 0.35,
  };

  export const CHALLENGE_ONE: CourseConfig = {
    folder: "challenge-one",
    width: 100.0,
    length: 1500.0,
    playWidth: 95.0,
    playLength: 1485.0,
    startX: 50.0,
    startY: -3.0,
    angle: 28.0,
    scale: 20.0,
    finishBrake: 25.0,
    showOutro: true,
    fogHeight: 0.35,
  };

  export const CHINESE_WALL: CourseConfig = {
    folder: "chinese-wall",
    width: 100.0,
    length: 1500.0,
    playWidth: 95.0,
    playLength: 1485.0,
    startX: 50.0,
    startY: -3.0,
    angle: 30.0,
    scale: 12.0,
    finishBrake: 25.0,
    showOutro: true,
    fogHeight: 0.35,
  };

  export const DOWNHILL_FEAR: CourseConfig = {
    folder: "downhill-fear",
    width: 60.0,
    length: 1800.0,
    playWidth: 60.0,
    playLength: 1800.0,
    startX: 30.0,
    startY: -3.5,
    angle: 24.0,
    scale: 7.0,
    finishBrake: 25.0,
    showOutro: false,
    fogHeight: 0.35,
  };

  export const EXPLORE_MOUNTAINS: CourseConfig = {
    folder: "explore-mountains",
    width: 100.0,
    length: 2000.0,
    playWidth: 95.0,
    playLength: 1980.0,
    startX: 50.0,
    startY: -3.0,
    angle: 25.0,
    scale: 12.0,
    finishBrake: 25.0,
    showOutro: true,
    fogHeight: 0.2,
  };

  export const FROZEN_LAKES: CourseConfig = {
    folder: "frozen-lakes",
    width: 100.0,
    length: 2000.0,
    playWidth: 95.0,
    playLength: 1980.0,
    startX: 50.0,
    startY: -3.0,
    angle: 25.0,
    scale: 12.0,
    finishBrake: 25.0,
    showOutro: true,
    fogHeight: 0.35,
  };

  export const HIPPO_RUN: CourseConfig = {
    folder: "hippo-run",
    width: 30.0,
    length: 3500.0,
    playWidth: 30.0,
    playLength: 3495.0,
    startX: 16.0,
    startY: -3.5,
    angle: 25.0,
    scale: 13.5,
    finishBrake: 25.0,
    showOutro: false,
    fogHeight: 0.25,
  };

  export const HOLY_GRAIL: CourseConfig = {
    folder: "holy-grail",
    width: 100.0,
    length: 1500.0,
    playWidth: 95.0,
    playLength: 1485.0,
    startX: 50.0,
    startY: -3.0,
    angle: 25.0,
    scale: 22.0,
    finishBrake: 25.0,
    showOutro: true,
    fogHeight: 0.25,
  };

  export const IN_SEARCH_OF_VODKA: CourseConfig = {
    folder: "in-search-of-vodka",
    width: 60.0,
    length: 2500.0,
    playWidth: 60.0,
    playLength: 2500.0,
    startX: 30.0,
    startY: -3.5,
    angle: 25.0,
    scale: 10.0,
    finishBrake: 25.0,
    showOutro: false,
    fogHeight: 0.25,
  };

  export const MILOS_CASTLE: CourseConfig = {
    folder: "milos-castle",
    width: 54.0,
    length: 800.0,
    playWidth: 54.0,
    playLength: 800.0,
    startX: 20.0,
    startY: -5.0,
    angle: 23.0,
    scale: 15.0,
    finishBrake: 25.0,
    showOutro: false,
    fogHeight: 0.25,
  };

  export const PATH_OF_DAGGERS: CourseConfig = {
    folder: "path-of-daggers",
    width: 54.0,
    length: 800.0,
    playWidth: 48.0,
    playLength: 795.0,
    startX: 45.0,
    startY: -3.0,
    angle: 23.0,
    scale: 12.0,
    finishBrake: 25.0,
    showOutro: false,
    fogHeight: 0.25,
  };

  export const PENGUINS_CANT_FLY: CourseConfig = {
    folder: "penguins-cant-fly",
    width: 60.0,
    length: 2500.0,
    playWidth: 60.0,
    playLength: 2500.0,
    startX: 30.0,
    startY: -3.5,
    angle: 30.0,
    scale: 10.0,
    finishBrake: 25.0,
    showOutro: true,
    fogHeight: 0.25,
  };

  export const QUIET_RIVER: CourseConfig = {
    folder: "quiet-river",
    width: 50.0,
    length: 2000.0,
    playWidth: 49.0,
    playLength: 2000.0,
    startX: 20.0,
    startY: -3.0,
    angle: 25.0,
    scale: 12.0,
    finishBrake: 25.0,
    showOutro: false,
    fogHeight: 0.25,
  };

  export const SECRET_VALLEYS: CourseConfig = {
    folder: "secret-valleys",
    width: 100.0,
    length: 2000.0,
    playWidth: 95.0,
    playLength: 1980.0,
    startX: 50.0,
    startY: -3.0,
    angle: 25.0,
    scale: 12.0,
    finishBrake: 25.0,
    showOutro: true,
    fogHeight: 0.25,
  };

  export const THIS_MEANS_SOMETHING: CourseConfig = {
    folder: "this-means-something",
    width: 54.0,
    length: 800.0,
    playWidth: 52.0,
    playLength: 800.0,
    startX: 30.0,
    startY: -3.0,
    angle: 23.0,
    scale: 36.0,
    finishBrake: 25.0,
    showOutro: false,
    fogHeight: 0.25,
  };

  export const TUX_AT_HOME: CourseConfig = {
    folder: "tux-at-home",
    width: 100.0,
    length: 2000.0,
    playWidth: 95.0,
    playLength: 1980.0,
    startX: 50.0,
    startY: -3.0,
    angle: 25.0,
    scale: 15.0,
    finishBrake: 25.0,
    showOutro: true,
    fogHeight: 0.25,
  };

  export const TWISTY_SLOPE: CourseConfig = {
    folder: "twisty-slope",
    width: 90.0,
    length: 520.0,
    playWidth: 55.0,
    playLength: 470.0,
    startX: 45.0,
    startY: -3.5,
    angle: 25.0,
    scale: 7.0,
    finishBrake: 15.0,
    showOutro: true,
    fogHeight: 0.25,
  };

  export const WILD_MOUNTAINS: CourseConfig = {
    folder: "wild-mountains",
    width: 100.0,
    length: 2000.0,
    playWidth: 95.0,
    playLength: 1980.0,
    startX: 50.0,
    startY: -3.0,
    angle: 28.0,
    scale: 15.0,
    finishBrake: 15.0,
    showOutro: true,
    fogHeight: 0.25,
  };

  export const BUMPY_RIDE: CourseConfig = {
    folder: "bumpy-ride",
    width: 60.0,
    length: 604.0,
    playWidth: 30.0,
    playLength: 550.0,
    startX: 30.0,
    startY: -3.1,
    angle: 30.0,
    scale: 8.0,
    finishBrake: 15.0,
    showOutro: true,
    fogHeight: 0.25,
  };
}
