let animationHandle;

function stopRegn() {
  clearInterval(animationHandle);
  const regndråper = document.querySelectorAll('.regndråpe');
  regndråper.forEach(regndråpe => {
    regndråpe.remove();
  });
}

function startRegn() {
  const antallRegndråper = 50;
  const animasjonsDelay = 3;
  const regndråpeTekst = '🍻';
  for (let i = 0; i < antallRegndråper; i++) {
    const regndråpe = document.createElement('div');
    regndråpe.className = 'regndråpe';
    regndråpe.innerHTML = regndråpeTekst;
    regndråpe.style.left = Math.random() * 100 + '%';
    regndråpe.style.animationDelay = Math.random() * animasjonsDelay + 's';
    document.body.appendChild(regndråpe);
  }
  animationHandle = setInterval(() => {
    const regndråper = document.querySelectorAll('.regndråpe');
    regndråper.forEach(regndråpe => {
      if (regndråpe.getBoundingClientRect().top > window.innerHeight) {
        regndråpe.style.top = '-10px';
        regndråpe.style.left = Math.random() * 100 + '%';
      }
    });
  }, 100);
}

startRegn(); // Kaller funksjonen automatisk ved lasting av siden