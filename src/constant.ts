export const getEditorOrigin = () => {
  return isDev() ? 'http://localhost:5173' : 'https://lizuncong.github.io';
};

export const isDev = () => {
  return !location.host.includes('lizuncong.github.io');
};
