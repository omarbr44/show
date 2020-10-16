const body = document.querySelector('body');
const search =document.querySelector('#search');
const favlist=document.querySelector('.favlist');


const favlistbutt=document.querySelector('.na');

let check=[];
let x=[];

const but=document.getElementsByClassName('click1');
console.log(but.length);
for(let i=0;i<but.length;i++){
     but[i].value=but[i].nextSibling.innerText;
     function once(){
        check.push(but[i].parentElement.parentElement);
        but[i].style.display='none';
        but[i].removeEventListener('click',once);
     }
     but[i].addEventListener('click',once)
        
     }
     
     favlistbutt.addEventListener('click',()=>{
         scrollTo(0,0);         // it will scroll the page to the top
         favlistbutt.style.display='none';
         search.style.display='none';
        const retur =document.createElement('button');
        retur.innerText='return';
        retur.style.position='fixed';
        retur.style.cursor='pointer';
        retur.classList.toggle('return');
        body.appendChild(retur);
    
    
     for(let i=0;i<but.length;i++){
         if(check.indexOf(but[i].parentElement.parentElement)!==-1){but[i].parentElement.parentElement.style.display='block';
         but[i].value='true';
         but[i].style.display='block';
         but[i].innerText='Delete';
         function once(){
            but[i].parentElement.parentElement.style.display='none';
            x.push(but[i].parentElement.parentElement);
            but[i].value='false';
            but[i].removeEventListener('click',once);
         }
        but[i].addEventListener('click',once);

    
}
         else if(check.indexOf(but[i].parentElement.parentElement)===-1){but[i].parentElement.parentElement.style.display='none';
         but[i].style.display='none';}}
        
             
    retur.addEventListener('click',()=>{ 
        scrollTo(0,0);
        favlistbutt.style.display='grid';
        search.style.display='block';

        check.length=0;

        for(let i=0;i<but.length;i++){

            if(but[i].value==='true'){
            check.push(but[i].parentElement.parentElement);
            but[i].style.display='none';}
            else{  but[i].style.display='block';}
                
            function once(){
                if(x.indexOf(but[i].parentElement.parentElement)!==-1 && but[i].value==='true')
                but[i].value==='true';
                 check.push(but[i].parentElement.parentElement);
                 but[i].parentElement.parentElement.style.display='block';
                but[i].style.display='none';
                but[i].removeEventListener('click',once);
             }
             but[i].addEventListener('click',once);
             but[i].innerText='Favorite';
             but[i].parentElement.parentElement.style.display='block';
             retur.remove();
             x.length=0;

    }});

    });     
    document.querySelector('form').addEventListener('submit',e=>{
     e.preventDefault();                                              //it does not reload the page when pressing enter
    });

    search.addEventListener('keyup',e=>{            //e reffers to the eventlistener
    e.target.value.toLowerCase();
    
    const val=document.getElementsByClassName('but1');
    for(let i=0;i<val.length;i++){
        if (val[i].childNodes[0].textContent.toLowerCase().indexOf(e.target.value)!==-1)
        but[i].parentElement.parentElement.style.display='block';
        else{        but[i].parentElement.parentElement.style.display='none';
    }
}
    },false);


  




