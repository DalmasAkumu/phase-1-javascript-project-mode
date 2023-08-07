document.addEventListener('DOMContentLoaded', function(){

    const myform = document.getElementById('review-form');
    myform.addEventListener("submit", (e)=>{
        e.preventDefault();

        console.log('Form has been submitted!');

    })

    const btn = document.getElementById('btnconvert');
    btn.addEventListener("click", function(){
        alert("clicked")
    })

   

    //Fetch API for Website
    
    fetch("https://open.fda.gov/apis/drug/label/how-to-use-the-endpoint/")
    .then((resp) => resp.json())
    .then((json) => console.log(json));


})
 
