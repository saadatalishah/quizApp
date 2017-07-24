    function sign() {
        var x=document.getElementById("input1").value;
         var x1=document.getElementById("input2").value;
         var x2=document.getElementById("input3").value;
         var x3=document.getElementById("input4").value
         if(x==''){alert('plz fill the form first');}
         if(x1==''){alert('plz fill the form first');}
         if(x2==''){alert('plz fill the form first');}
         if(x3==''){alert('plz fill the form first');}
        var array=[];
        array.push(x);
        array.push(x1);
        array.push(x2);
        array.push(x3);
        console.log(array);
        localStorage.setItem('userdata',JSON.stringify(array));
        // for(var i=0;i<array.length;i++)
        // {
        // }
         var win=window.location.href='saadatalishah.github.io/questions.html';
         console.log(win);   
         }

 
