function initLifeGrid(config) {
  const canvas = document.getElementById("lifeGrid");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const { totalWeeks, livedWeeks, weeksPerRow, rows, marcosEspeciais } = config;
  const baseSquareSize = 10;
  const baseGap = 2;
  const marcos = new Map(marcosEspeciais.map((m) => [m.semana, m.cor]));

  // A semana atual pulsa, a não ser que já seja um marco ou que a grade tenha
  // acabado. Quem pediu menos movimento vê o quadrado parado.
  const pulsar = livedWeeks < totalWeeks
    && !marcos.has(livedWeeks)
    && !matchMedia("(prefers-reduced-motion: reduce)").matches;

  let opacity = 1;
  let fadingIn = true;
  let squareSize = 0;
  let gap = 0;

  function resizeCanvas() {
    const containerWidth = canvas.parentElement.clientWidth;
    const gridWidth = weeksPerRow * (baseSquareSize + baseGap) - baseGap;
    const scale = Math.min(containerWidth * 0.95, gridWidth) / gridWidth;
    squareSize = Math.max(baseSquareSize * scale, 3);
    gap = Math.max(baseGap * scale, 1);
    canvas.width = weeksPerRow * (squareSize + gap) - gap;
    canvas.height = rows * (squareSize + gap) - gap;
  }

  function fillWeek(week, color) {
    const x = (week % weeksPerRow) * (squareSize + gap);
    const y = Math.floor(week / weeksPerRow) * (squareSize + gap);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, squareSize, squareSize);
  }

  function drawGrid() {
    resizeCanvas();
    for (let week = 0; week < totalWeeks; week++) {
      fillWeek(week, marcos.get(week) || (week <= livedWeeks ? "#2a2a2a" : "#1a1a1a"));
    }
  }

  // Só o quadrado da semana atual muda a cada quadro: redesenhar as milhares de
  // semanas da grade 60 vezes por segundo gastaria CPU (e bateria) à toa.
  function tick() {
    if (fadingIn) {
      opacity += 0.003;
      if (opacity >= 1) fadingIn = false;
    } else {
      opacity -= 0.012;
      if (opacity <= 0.3) fadingIn = true;
    }
    const x = (livedWeeks % weeksPerRow) * (squareSize + gap);
    const y = Math.floor(livedWeeks / weeksPerRow) * (squareSize + gap);
    ctx.clearRect(x, y, squareSize, squareSize);
    fillWeek(livedWeeks, `rgba(42, 42, 42, ${opacity})`);
    requestAnimationFrame(tick);
  }

  window.addEventListener("resize", drawGrid);
  drawGrid();
  if (pulsar) requestAnimationFrame(tick);
}
