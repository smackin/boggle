// create a form variable that selects the form from the html by class and add an event listener to prevent the page from reloading once the form is submitted.  
form = document.getElementById('form')
form.addEventListener('submit', async function(e){
    e.preventDefault()
    // variable that equals the word submitted via form 
    let word = document.getElementById('submittedword').value; 
    // console.log(word)
    // if the form is empty, nothing will return 
    if (!word) return; 

    let res = await axios.get('/check-word', { params: { word: word } }); 

    // console.log(res);

    let response = res.data.response; 
    console.log(response);
    //  return {"result" :response}
    // console.log(e)
    // console.log(form)
})

