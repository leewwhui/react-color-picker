export const isBrowserEyeDropper = () => {
  // @ts-ignore
  if (!window.EyeDropper) return false;
  return true;
};
