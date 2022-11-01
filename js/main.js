(function ($) {
  $(function () {

    $('select').styler();

  });
})(jQuery);


$(document).ready(function closes() {
  $('.content_toggle').click(function () {
    $('.content_block').slideToggle(0);
    return false;
  });
  $('.content_close').click(function () {
    $('.content_high').slideToggle(0);
    return false;
  });
  $('.content_down').click(function () {
    $('.content_up').slideToggle(0);
    return false;
  });
  $('.content_toggle1').click(function () {
    $('.content_block1').slideToggle(0);
    return false;
  });
  $('.content_close1').click(function () {
    $('.content_high1').slideToggle(0);
    return false;
  });
  $('.content_down1').click(function () {
    $('.content_up1').slideToggle(0);
    return false;
  });
  $('.content_block-birg').click(function () {
    $('.content_toggle-birg').slideToggle(0);
    return false;
  });

  $('.content_closes').click(function () {
    $('.content_view').slideToggle(0);
    return false;
  });
});

$(document).ready(function close() {
  $('.content_text').click(function () {
    $('.content_exit').slideToggle(0);
    return false;
  });
  $('.content_toggle2').click(function () {
    $('.content_block2').slideToggle(0);
    return false;
  });
  $('.content_close2').click(function () {
    $('.content_high2').slideToggle(0);
    return false;
  });
  $('.content_down2').click(function () {
    $('.content_up2').slideToggle(0);
    return false;
  });
});


$('.filter__item-drop, .company').on('click', function () {
  $(this).toggleClass('filter__item-drop--active');
  $(this).next().slideToggle('200');
});


const openModal = document.querySelector('.openModal');
const openModalBtn = document.querySelector('.openModalBtn');
const openModalWin = document.querySelector('.openModalWin');
const openModalWindow = document.querySelector('.openModalWindow');
const openModalShow = document.querySelector('.openModalShow');
const closeModalWindow = document.querySelector('.close-modalWindow');
const closeModalBtn = document.querySelector('.close-modalBtn');
const closeModal = document.querySelector('.close-modal');
const closeModalShow = document.querySelector('.close-modalShow');
const closeModalWin = document.querySelector('.close-modalWin');
const modalWindow = document.querySelector('.modalWindow');
const modal = document.querySelector('.modal');
const modalShow = document.querySelector('.modalShow');
const modalWin = document.querySelector('.modalWin');
const modalBtn = document.querySelector('.modalBtn');


openModal.addEventListener('click', () => {
  modal.showModal();
});
openModalBtn.addEventListener('click', () => {
  modalBtn.showModal();
});
openModalWin.addEventListener('click', () => {
  modalWin.showModal();
});
openModalWindow.addEventListener('click', () => {
  modalWindow.showModal();
});
openModalShow.addEventListener('click', () => {
  modalShow.showModal();
});
closeModal.addEventListener('click', () => {
  modal.close();
});
closeModalBtn.addEventListener('click', () => {
  modalBtn.close();
});
closeModalWin.addEventListener('click', () => {
  modalWin.close();
});
closeModalShow.addEventListener('click', () => {
  modalShow.close();
});
closeModalWindow.addEventListener('click', () => {
  modalWindow.close();
});
modal.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target === modal) modal.close();
});
modalWin.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target === modalWin) modalWin.close();
});
modalWindow.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target === modalWindow) modalWindow.close();
});
modalShow.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target === modalShow) modalShow.close();
});
modalBtn.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target === modalBtn) modalBtn.close();
});

function goDefault() {
  let buttonReturn = getElementById('buttonReturn');
  buttonReturn.addventListener('click', function () {
    return false;
  });
}

// let inputRes = document.querySelector('input');
//     inputRes.forEach(item.checked = false);
//     inputRes = addEventListener(forEach, 'click');


// let inputRes = document.querySelector('input');
// let btnRes = document.getElementByClassName('butt');
//   btnRes.addEventListener('click', function(inputRes) {
//     item.checked = false;
//   });

// let inputRes = document.querySelector('input');
// let btnRes = document.getElementByClassName('butt');
// function resetClick() {
//   item.checked = false;
// }
// btnRes.addEventListener('click', resetClick);

let inputReset = document.querySelector('input');
let btnRes = document.getElementByClassName('butt');
inputReset.forEach(function (item, i, inputReset) {
  function resetClick() {
    item.checked = false;
  }
});
btnRes.addEventListener('click', resetClick);

// inputRes = addEventListener(forEach, 'click');




function notification() {
  const notif = 'Пожалуйста, поставьте в известность при успешном сохранении настроек при помощи обратной связи';
  alert(notif);
}



