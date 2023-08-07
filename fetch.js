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
    
    function fetchData(){
        
        fetch("https://reqres.in/api/users")
    .then((resp) => {
        //console.log(response);

        //if (!response.ok){
          //  throw new error ("Unsuccessful report")
          //};
        
        return resp.json();
    })
    .then((data) => {
        console.log(data.data);
        const html = data.data.map(user =>{
            return `
            <div class= "user"> 
            
                <p> Name:${user.first_name}</p>
                <p> Email:${user.email}</p>

            </div>`;

        }).join('')
        console.log(html);
        document.querySelector('#clients').insertAdjacentHTML("afterbegin", html);
    })
    .catch(error =>{
        console.log(error);
    });  

    }
    fetchData();

    


})
 
