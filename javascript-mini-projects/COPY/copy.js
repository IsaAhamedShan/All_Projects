const form = document.getElementById('copymain')

form.addEventListener("submit",e=>{
                // const input = document.querySelector('#text1')
                e.preventDefault()
                const copy=document.getElementById("text1");
                // const val = copy.value
   
                // console.log(val)
                // var copy=document.getElementById("text2");
                // var copy=document.getElementById("text3");
                // val.setSelectionRange(0,99999);
                copy.select();//copies the value of the input value of 'variable copy'
                document.execCommand('copy');
                
                alert("Text Successfully copied");
            
            })
