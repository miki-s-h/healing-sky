// 監視する時の設定を作る
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 画面に入ってきたら
      entry.target.classList.add('visible');
    }
  });
});

// 監視したい要素を全部登録する
document.querySelectorAll('.sky-section').forEach(section => {
  observer.observe(section);
});