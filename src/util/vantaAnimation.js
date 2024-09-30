export const effect = () => {
  VANTA.FOG({
    el: '#root',
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1,
    scaleMobile: 2.2,
    maxDistance: 25.0,
    color: 0x0,
    backgroundColor: 0xffffff,
    points: 9.0,
    highlightColor: 0xffffff,
    midtoneColor: 0xa4a4f5,
    lowlightColor: 0x6ff5f5,
    baseColor: 0xa9def5,
    blurFactor: 0.64,
    speed: 1.9,
    zoom: 1.1,
  });
};
export const darkAnimation = () => {
  effect.setOptions({
    color: 0xed3b44,
    backgroundColor: 0x1c1d20,
  });
};

export const lightAnimation = () => {
  effect.setOptions({
    color: 0xc6e327,
    backgroundColor: 0x1c1d20,
  });
};
