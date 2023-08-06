document.getElementById('review-form').addEventListener("click", function(){
    alert("click")
})
//reviewForm.addEventListener("submit", handleReviewSubmission);





fetch('https://dailymed.nlm.nih.gov/dailymed/services/')
.then(res =>{
    return res.json();
})
 .then(data=>{
    console.log(data);
 })
 .catch(error=> console.log(error));


