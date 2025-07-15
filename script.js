
function introspect() {
  const dimensions = ["Identity", "Purpose", "Connection", "Autonomy", "Reflection"];
  const consoleDiv = document.getElementById('console');
  const message = `Introspection started...\n` + dimensions.map(dim => {
    return `${dim}: ${Math.floor(Math.random() * 101)}%`;
  }).join('\n');
  consoleDiv.textContent = message;
}
