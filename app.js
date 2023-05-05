'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click',function() {
    document.body.classList.toggle('light-theme')

    var className =  document.body.className;
    if(className == "dark-theme") {
        this.textContent = "Branco";   
    }
    else{   
        this.textContent =  "Preto";    
    };

});