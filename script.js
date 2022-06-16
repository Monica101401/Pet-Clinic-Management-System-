$('#submit2').click((event) => {
                event.preventDefault();
                
                const owner = document.getElementById('owner').value;
                const email = document.getElementById('email').value;
                const pname = document.getElementById('pname').value;
                const contact = document.getElementById('contact').value;
                const city = document.getElementById('city').value;
                const address = document.getElementById('address').value;
                
                let ownerValid = true; 
                let emailValid = true; 
                let pnameValid = true; 
                let contactValid = true; 
                let cityValid = true; 
                let addressValid = true; 
                
                if(owner === ''){
                   document.getElementById('Msg0').innerHTML='Please enter Owner name';
                   upiValid = false;
                    return false;
                }
                
                if(email === ''){
                   document.getElementById('Msg1').innerHTML='Please enter email id';
                   emailValid = false;
                    return false;
                }
                if(pname === ''){
                   document.getElementById('Msg2').innerHTML='Please enter petname';
                   pnameValid = false;
                    return false;
                }
                if(contact === ''){
                   document.getElementById('Msg3').innerHTML='Please fill contact field';
                   contactValid = false;
                    return false;
                }
                if(city === ''){
                   document.getElementById('Msg4').innerHTML='Please enter your city name';
                   cityValid = false;
                    return false;
                }
                if(address === ''){
                   document.getElementById('Msg5').innerHTML='Please fill in your address';
                   addressValid = false;
                    return false;
                }
                if(owner&&email&&pname&&contact&&city&&address){
                    window.location.href="paymenttype.html";
                }
             });

