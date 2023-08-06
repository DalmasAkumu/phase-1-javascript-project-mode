document.getElementById('review-form').addEventListener("clicked", function(){
    alert("click")
})
reviewForm.addEventListener("submit", handleReviewSubmission);


  async function fetchData() {
    const url = 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=advil'; 
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();
    
    
    
    /*const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}