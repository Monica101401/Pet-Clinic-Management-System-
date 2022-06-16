/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function fun(){
            event.preventDefault();
           window.location.href="success.html";
       }
       fun();


    function letters(input){
          const lett = /[^a-z]/gi;
          input.value = input.value.replace(lett,""); 
       }
       letters(input);
       
       function noletter(input){
           const nolet = /[^0-9]/gi;
           input.value = input.value.replace(nolet,"");
       }
       noletter(input);
       
       function sample(){
            event.preventDefault();
           window.location.href="paymenttype.html";
       }
       sample();
       
       