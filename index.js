const frequentlyTitle = document.querySelectorAll('.wrapper-title'); 
const frequentlyContent = document.querySelectorAll('.wrapper-content');
const wrapperPlus = document.querySelectorAll('.wrapper-plus');

frequentlyTitle.forEach(title => {
    title.addEventListener('click', function() {
        frequentlyContent.forEach(content => content.classList.remove('active'));
        wrapperPlus.forEach(plus => plus.classList.remove('active'));
        title.closest('.wrapper-col').querySelector('.wrapper-content').classList.add('active');
        title.closest('.wrapper-col').querySelector('.wrapper-plus').classList.add('active');        
    });
});