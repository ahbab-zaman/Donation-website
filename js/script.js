// Blog page functions
const blogButton = getAllElementsId('blog-btn');
blogButton.addEventListener('click', function(){
    window.location.href = 'blog.html';
})


// Card-1 functions
const donateButton1 = getAllElementsId('donate-btn1');
donateButton1.addEventListener('click', function(){
    const inputValue1 = getInputValue('donate-input1');
    const donationBalance1 = getInnerText('donate-amount1');
    const mainBalance = parseFloat(getInnerText('main-balance'));
    if(inputValue1 <= 0  || isNaN(inputValue1) || inputValue1 > mainBalance){
        alert('Invalid input');
        return donationBalance1.innerText;     
   }
    const currBalance1 = inputValue1 + donationBalance1;
    document.getElementById('donate-amount1').innerText = currBalance1;
    const remainingBalance = mainBalance - inputValue1;
    document.getElementById('main-balance').innerText = remainingBalance;
    document.getElementById('donate-input1').value = "";
})

// Card-2 functions
const donateButton2 = getAllElementsId('donate-btn2');donateButton2.addEventListener('click', function(){
    const inputValue2 = getInputValue('input-amount2');
    const donationBalance2 = getInnerText('donate-amount2');
    const mainBalance = parseFloat(getInnerText('main-balance'));
    if(inputValue2 <= 0  || isNaN(inputValue2) || inputValue2 > mainBalance){
        alert('Invalid input');
        return donationBalance2.innerText;     
   }
    const currBalance2 = inputValue2 + donationBalance2;
    document.getElementById('donate-amount2').innerText = currBalance2;
    const remainingBalance = mainBalance - inputValue2;
    document.getElementById('main-balance').innerText = remainingBalance;
    document.getElementById('input-amount2').value = "";
})

// Card-3 functions

const donateButton3 = getAllElementsId('donate-btn3');
donateButton3.addEventListener('click', function(){
    const inputValue3 = getInputValue('donate-input3');
    const donationBalance3 = getInnerText('donate-amount3');
    const mainBalance = parseFloat(getInnerText('main-balance'));
    if(inputValue3 <= 0  || isNaN(inputValue3) || inputValue3 > mainBalance){
        alert('Invalid input');
        return donationBalance3.innerText;     
   }
    const currBalance3 = inputValue3 + donationBalance3;
    document.getElementById('donate-amount3').innerText = currBalance3;
    document.getElementById('donate-input3').value = "";
    const remainingBalance = mainBalance - inputValue3;
    document.getElementById('main-balance').innerText = remainingBalance;
})

