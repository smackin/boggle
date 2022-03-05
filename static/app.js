"use strict";

let score = 0; 

let words = []; 

// create a form variable that selects the form from the html by class and add an event listener to prevent the page from reloading once the form is submitted.  
let form = document.getElementById('form');
form.addEventListener('submit', async function(e){
    e.preventDefault()
    // variable that equals the word submitted via form 
    let word = document.getElementById('submittedword').value; 
     console.log(word)
    // if the form is empty, nothing will return 
     if (!word) return; 

    // send get request with axios to '/check-word' route with params passed in 
    let res = await axios.get('/check-word', { params: { word: word } }); 
    
    //console.log(res)
   
    let response = res.data.response; 
    console.log(response);
// append response to p id = response 
    let paragraph = document.getElementById("response");
    paragraph.textContent = response;
//reset form
    form.reset();

    // score initialized to 0 - write function - if word is 'ok' then add word.length to the score.  and display it in the DOM.   

    if (response === 'ok' ) {
        console.log(response)
        score += word.length; 
        let addScore = document.getElementById("score");
        addScore.textContent = ` Your score is ...  ${score}`;  
    };
})

