let Input = document.querySelector('input');
let btn = document.querySelector('button');
let content = document.querySelector('.todos');
let count =-1
btn.addEventListener('click',function(){
    count +=1;
    let paragraph =document.createElement('p');
    paragraph.innerHTML= Input.value
    paragraph.setAttribute("key",count);
    content.appendChild(paragraph);
    paragraph.addEventListener('click',function(){
        content.removeChild(paragraph);
    })
})