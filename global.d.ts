export interface IImages {
  getFiles: () => void;
  onGotFiles: (callback: (files: string[]) => void) => void;
}

declare global {
  interface Window {
    api: IImages;
  }
}
