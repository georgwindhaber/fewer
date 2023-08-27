// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  getFiles: () => {
    ipcRenderer.send("getFiles", "/Users/georg/Private/AppleImages/export");
  },
  onGotFiles: (callback: (files: string[]) => void) => {
    ipcRenderer.on("gotFiles", (event, files) => callback(files));
  },
});
