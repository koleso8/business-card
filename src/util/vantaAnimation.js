let effect = null;

export const startEffect = () => {
  effect = VANTA.FOG({
    el: '#vanta',
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
    speed: 3.1,
    zoom: 1.1,
  });
  return effect;
};

export const darkAnimation = () => {
  effect.setOptions({
    highlightColor: 0x0,
    midtoneColor: 0x20208c,
    lowlightColor: 0x92464,
    baseColor: 0x2eb9,
  });
};

export const lightAnimation = () => {
  effect.setOptions({
    highlightColor: 0xffffff,
    midtoneColor: 0xa4a4f5,
    lowlightColor: 0x6ff5f5,
    baseColor: 0xa9def5,
  });
};
