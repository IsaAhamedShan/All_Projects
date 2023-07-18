const form = document.getElementById('copymain')

form.addEventListener("submit",e=>{
                e.preventDefault()
                const copy=document.getElementById("text1");
                copy.select();
                document.execCommand('copy');
                
                alert("Text Successfully copied");
            
            })
