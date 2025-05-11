// アコーディオンメニュー
const qa = document.querySelectorAll(".js-ac"); 

qa.forEach((qaButton) => {
  qaButton.addEventListener("click", () => {
    const content = qaButton.nextElementSibling;
    qaButton.classList.toggle('is-open');
    content.classList.toggle("is-open");
  });
})


//モーダルウィンドウ
  const modal = document.querySelector('.js-modal');
  const modalButton = document.querySelector('.js-modal-button');
  const modalClose = document.querySelector('.js-close-button');

  modalButton.addEventListener('click', () => {
    modal.classList.add('is-open');
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('is-open');
  });

//タブメニュー

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab,index) => {
  //各タブに click イベントを追加
  tab.addEventListener('click', () => {
    //すべてのタブから active クラスを削除（見た目上の「選択状態」を解除
    for(const tab of tabs){
      tab.classList.remove('active');
    }
    //すべてのコンテンツも非表示
    for(const content of contents){
      content.classList.remove('active');
    }
    //対応するコンテンツ（タブと同じ順番）に active クラスを追加
    tab.classList.add('active');
    contents[index].classList.add('active');
  });
});