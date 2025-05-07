const qa = document.querySelectorAll(".js-ac"); // js-ac要素すべて取得
  function acToggle() {
    const content = this.nextElementSibling;
    content.classList.toggle("is-open");
    const qa = this;
    qa.classList.toggle('is-open');
  }

  for (let i = 0; i < qa.length; i++) { // for文でjs-acメニューをループ処理
    qa[i].addEventListener("click", acToggle);
  }

//モーダルウィンドウ

  const modal = document.querySelector('.js-modal');
  const modalButton = document.querySelector('.js-modal-button');


  const modalClose = document.querySelector('.js-close-button');

  modalButton.addEventListener('click', () => {
    modal.classList.add('is-open');

  });