$('.CloseBtn').on('click', function() {
    $('.AdminControlPanel').toggleClass('AdminControlPanelActive');
    this.classList.toggle('CloseBtnActive');
})
// const Btn = document.querySelector('.CloseBtn');
// for(btn of Btn){
//     btn.addEventListener('click', function(){
//         this.classList.toggle('AdminControlPanelActive');
//     })
// }
// btn.addEventListener('click' , function() {
// 	 this.classList.toggle('AdminControlPanelActive');
// })