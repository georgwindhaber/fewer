import "./initApp";
api.getFiles();
api.onGotFiles((files) => {
  console.log(files);
});

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack'
);
