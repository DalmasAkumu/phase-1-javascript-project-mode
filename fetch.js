document.addEventListener('DOMContentLoaded', function(){

    const myform = document.getElementById('review-form');
    myform.addEventListener("submit", (e)=>{
        e.preventDefault();

        console.log('Form has been submitted!');

    })

    const btn = document.getElementById('cart');
    btn.addEventListener("click", function(){
        alert("clicked")
    })

    //Fetch API for Website

    fetch("https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=advil")
  .then((resp) => resp.json())
  .then((json) => console.log(json));