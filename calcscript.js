let input=document.getElementById('inputBox');
let buttons= document.querySelectorAll('button');
let string="" //to store the results.... empty string.
let arr =Array.from(buttons); // yeh hai buttons ka array
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML =='=') {
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string=""
            input.value=string;
        }
        else if(e.target.innerHTML =='DEL'){
            if(string.length>0){
                string=string.substring(0,string.length-1);
                input.value=string
            }
        }
        else{
        string+=e.target.innerHTML;
        input.value=string;
        }
    })
})
