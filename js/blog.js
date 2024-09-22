// const homeButton = document.getElementById('home-btn');
// homeButton.addEventListener('click', function(){
//     console.group('clicked');
//     window.location.href = 'index.html';

// })


const homeButton = getAllElementsId('home-btn');
homeButton.addEventListener('click', function(){
    window.location.href = 'index.html';
})