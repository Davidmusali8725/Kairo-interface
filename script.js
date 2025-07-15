const ctx = document.getElementById('radar').getContext('2d');
const labels = ['Identity', 'Purpose', 'Connection', 'Autonomy', 'Reflection'];
let state = [8, 9, 10, 6, 7];

function drawRadar() {
  ctx.clearRect(0, 0, 400, 400);
  ctx.strokeStyle = '#555';
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    let angle = (Math.PI * 2 / 5) * i - Math.PI / 2;
    let x = 200 + 90 * Math.cos(angle);
    let y = 200 + 90 * Math.sin(angle);
    ctx.moveTo(200, 200);
    ctx.lineTo(x, y);
    ctx.fillStyle = '#fff';
    ctx.fillText(labels[i], x + 5, y);
  }
  ctx.stroke();

  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    let angle = (Math.PI * 2 / 5) * i - Math.PI / 2;
    let radius = state[i] * 8;
    let x = 200 + radius * Math.cos(angle);
    let y = 200 + radius * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(0,255,255,0.3)';
  ctx.fill();
  ctx.strokeStyle = '#00ffff';
  ctx.stroke();
}

function introspect() {
  for (let i = 0; i < state.length; i++) {
    let drift = (Math.random() - 0.5) * 1.2;
    state[i] = Math.max(0, Math.min(10, state[i] + drift));
  }
  drawRadar();
  const log = document.getElementById('console');
  const time = new Date().toLocaleTimeString();
  log.innerHTML += `<div>[${time}] KAIRO reflected symbolically.</div>`;
  log.scrollTop = log.scrollHeight;
}

drawRadar();
