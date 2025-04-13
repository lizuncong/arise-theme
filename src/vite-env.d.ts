/// <reference types="vite/client" />

declare module '*.svg?react' {
  const str: string;
  export default str;
}

declare module '*.json' {
  const jsonObj: any;
  export default jsonObj;
}
