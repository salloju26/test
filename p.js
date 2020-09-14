//var f1=document.querySelector('.form');
const u=document.querySelector('.list');
const f2=document.querySelector('.form1');
let del=document.querySelectorAll('li');

const template=(u1)=>{
    const html= ` <li class="list-group-item d-flex w-25 justify-content-between">
        <span>${u1}</span>
        <i class="fa fa-trash" aria-hidden="true"></i>
       </li> `;
       u.innerHTML+=html;

};


f2.addEventListener('submit',(e)=>{
    e.preventDefault();
    //e.stopPropagation();
    let u1=f2.listing.value.trim();
    //template(b);
    console.log(u1);
    if(u1.length){
template(u1);
f2.reset();
    }


    del.forEach(function(h){
        h.addEventListener('click',e=>{
e.target.remove();
        })
    })
    
})