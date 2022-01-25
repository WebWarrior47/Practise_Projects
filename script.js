let priceOpen = document.getElementById("price-open");
let priceClose = document.getElementById("price-close");
let calcBtn = document.getElementById("calc-btn");
let numEl = document.getElementById("pip-num");
let resultEl = document.getElementById("result")
let lotSize = document.getElementById("lot-size");


calcBtn.addEventListener('click', function(){
    calculate();
})

function calculate(){
    let numOfPips = (priceOpen.value - priceClose.value).toFixed(0);
    let profitLoss = (priceOpen.value - priceClose.value) * lotSize.value;
    numEl.textContent = numOfPips;
    resultEl.textContent = profitLoss.toFixed(2);
}



