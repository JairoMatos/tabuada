const numtb = document.querySelector('#numtb')
const liTb = document.querySelector('.txt-tb')
const inputtb = document.querySelector('input')
const color = document.querySelector('#color')
const container = document.querySelector('.container')

inputtb.addEventListener('change', function(){
    liTb.innerHTML = '';
})

function gerar(){
    
    liTb.innerHTML = ''
    if(inputtb.value == ''){
        liTb.innerHTML = `<li>Valor vazio!! escolha Tabuada</li>`
    }else{
    for(let x=1; x<=10; x++){
        liTb.innerHTML += `<li> ${Number(numtb.value)} x ${x} = ${Number(numtb.value * x)}</li>`;
    }
    }
}
function col(){
    container.style.background = String(color.value)
    color.style.background = String(color.value)
}