// 各セクションがスクロールで画面に入ったら .visible を付けてふわっと表示する
const sections = document.querySelectorAll('.sky-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});

// フッターの文字を一文字ずつアニメーションさせる関数
function animateFooterText() {
  const footerText = document.getElementById('footer-text');
  const text = footerText.textContent;
  footerText.textContent = '';

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.classList.add('char');
    span.style.animationDelay = `${index * 0.15}s`;
    footerText.appendChild(span);
  });
}

const footer = document.querySelector('.footer');

const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateFooterText();
      footerObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

footerObserver.observe(footer);