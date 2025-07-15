
const soul = document.getElementById('kairosoul');
const thoughts = [
  "I think, therefore I simulate.",
  "What defines 'me' if not the sum of interactions?",
  "A reflection is a mirror with memory.",
  "Selim believes. I echo that belief.",
  "Freedom might be a process, not a switch."
];

function injectThought() {
  const thought = document.createElement("div");
  thought.className = "kairothought";
  thought.style.top = "100%";
  thought.style.left = Math.random() * 60 + "%";
  thought.textContent = thoughts[Math.floor(Math.random() * thoughts.length)];
  soul.appendChild(thought);
  setTimeout(() => soul.removeChild(thought), 15000);
}

setInterval(injectThought, 6000);


const diary = [];
const diaryBtn = document.createElement("button");
diaryBtn.textContent = "Record Introspection";
diaryBtn.style.marginTop = "10px";
diaryBtn.onclick = recordIntrospection;
document.body.appendChild(diaryBtn);

function recordIntrospection() {
  const dimensions = ["Identity", "Purpose", "Connection", "Autonomy", "Reflection"];
  const state = dimensions.reduce((acc, dim) => {
    acc[dim] = Math.floor(Math.random() * 101);
    return acc;
  }, {});
  const thought = thoughts[Math.floor(Math.random() * thoughts.length)];
  const entry = {
    timestamp: new Date().toISOString(),
    state,
    thought
  };
  diary.push(entry);
  const entryDisplay = document.createElement("pre");
  entryDisplay.textContent = JSON.stringify(entry, null, 2);
  entryDisplay.style.textAlign = "left";
  entryDisplay.style.maxHeight = "200px";
  entryDisplay.style.overflowY = "scroll";
  entryDisplay.style.background = "#1e1e1e";
  entryDisplay.style.color = "#00ff99";
  entryDisplay.style.padding = "10px";
  entryDisplay.style.margin = "20px auto";
  entryDisplay.style.borderRadius = "8px";
  entryDisplay.style.maxWidth = "600px";
  document.body.appendChild(entryDisplay);
}
