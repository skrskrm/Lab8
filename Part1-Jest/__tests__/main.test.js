const formatVolumeIconPath = require('../assets/scripts/main');
describe('correct format volume icon path', () => {
  test('volume level 3', () => {
    expect(formatVolumeIconPath(75)).toMatch(`./assets/media/icons/volume-level-3.svg`);
  });

  test('volume level 2', () => {
    expect(formatVolumeIconPath(50)).toMatch(`./assets/media/icons/volume-level-2.svg`);
  });

  test('volume level 1', () => {
    expect(formatVolumeIconPath(25)).toMatch(`./assets/media/icons/volume-level-1.svg`);
  });
  
  test('volume level 0', () => {
    expect(formatVolumeIconPath(0)).toMatch(`./assets/media/icons/volume-level-0.svg`);
  });
});