import { ThemePresetType } from '@/types/section';

export const themeConfigToCssVars = (themeConfig: ThemePresetType) => {
  const cssVars: Record<string, string> = {};

  Object.entries(themeConfig.settings).forEach(([key, value]) => {
    const varName = `--${key.replace(/_/g, '-')}`;
    cssVars[varName] = value as string;
  });

  // 将CSS变量应用到body元素
  const style = document.createElement('style');
  let cssText = ':root {';
  Object.entries(cssVars).forEach(([key, value]) => {
    cssText += `${key}: ${value};`;
  });
  cssText += '}';
  style.textContent = cssText;
  document.head.appendChild(style);
};
