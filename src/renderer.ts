api.getFiles();
api.onGotFiles((files) => {
  window.files = files;
});

import "./initApp";

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack'
);
