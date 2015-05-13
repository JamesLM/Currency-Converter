/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var xhttp;
function loadXMLDoc(filename)
{
    if (window.XMLHttpRequest)
      {
      xhttp=new XMLHttpRequest();
      }
    else // code for IE5 and IE6
      {
      xhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
     
    xhttp.open("GET",filename,false);
    try {
        xhttp.send();
    } catch(err){
       return "fail"; 
    }
    return xhttp.responseXML;
}

function loadCurrencyRates(){
    

    var xmlDoc;
    var tag;

    
    xmlDoc = loadXMLDoc('//devweb2014.cis.strath.ac.uk/~aes02112/ecbxml.php');
    
    
    
    if (xmlDoc === "fail"){
            document.getElementById('result').innerHTML = "FAILED TO CONNECT TO SERVER";
            
            var fromComboBox = document.getElementById('fromCurrency');
            var toComboBox = document.getElementById('toCurrency');


            for (var i=0; i<(localStorage.length) - 4; i++){
               var option = document.createElement('option');
               option.innerHTML = localStorage.key(i);
               option.innerHTML += " - ";
               option.innerHTML += localStorage.getItem(localStorage.key(i));
               option.value = localStorage.getItem(localStorage.key(i));
               fromComboBox.appendChild(option);
            }
             for (var i=0; i<(localStorage.length) -4 ; i++){
               var option = document.createElement('option');
               option.innerHTML = localStorage.key(i);
               option.innerHTML += " - ";
               option.innerHTML += localStorage.getItem(localStorage.key(i));
               option.value = localStorage.getItem(localStorage.key(i));
               toComboBox.appendChild(option);
            }
            
    } else {
            tag = xmlDoc.getElementsByTagName("Cube");

            console.log(tag[1].getAttribute('time'));
            //then get the currencies and their rates
            for(var i = 2; i < tag.length; i++){
                console.log(tag[i].getAttribute('currency'));
                console.log(tag[i].getAttribute('rate'));
                localStorage.setItem(tag[i].getAttribute('currency'), tag[i].getAttribute('rate'));
            }


            var fromComboBox = document.getElementById('fromCurrency');
            var toComboBox = document.getElementById('toCurrency');


            for (var i=0; i<(localStorage.length) - 4; i++){
               var option = document.createElement('option');
               option.innerHTML = localStorage.key(i);
               option.innerHTML += " - ";
               option.innerHTML += localStorage.getItem(localStorage.key(i));
               option.value = localStorage.getItem(localStorage.key(i));
               fromComboBox.appendChild(option);
            }
             for (var i=0; i<(localStorage.length) -4 ; i++){
               var option = document.createElement('option');
               option.innerHTML = localStorage.key(i);
               option.innerHTML += " - ";
               option.innerHTML += localStorage.getItem(localStorage.key(i));
               option.value = localStorage.getItem(localStorage.key(i));
               toComboBox.appendChild(option);
            }
    }
}

function setSettings(){
    
    var sel;

    sel = document.getElementById('fromCurrency')
    localStorage.setItem('fromCurrencySelect', sel.options[sel.selectedIndex].value);
    localStorage.setItem('fromCurrencyName', sel.options[sel.selectedIndex].innerHTML);
    sel = document.getElementById('toCurrency')
    localStorage.setItem('toCurrencySelect', sel.options[sel.selectedIndex].value);
    localStorage.setItem('toCurrencyName', sel.options[sel.selectedIndex].innerHTML);
    
    window.location.href = "index.html";
}
