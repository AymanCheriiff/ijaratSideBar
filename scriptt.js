const items = document.querySelectorAll('.item');
const options = document.querySelectorAll('.expend-option');
const inOptions = document.querySelectorAll('.expended-options');

function expend(i){
    if(inOptions[i].style.display == 'block'){
        inOptions[i].style.display = 'none';
        options[i].style.backgroundColor = 'transparent';
    }else{
        inOptions[i].style.display = 'block';
    }    
}

function navigate(i){
    items.forEach((item)=>{
        item.classList.remove('active');
    })
    items[i].classList.add('active');
    inOptions.forEach((index)=>{
        index.style.display = 'none';
    })
    if(items[i].classList.contains('expend-option')){
        expend(i-4);
    }
}