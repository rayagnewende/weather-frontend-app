// Insert your code here

const signUpBtn = document.querySelector('#register'); 



signUpBtn.addEventListener('click', function(){
const userName = document.querySelector('#registerName').value;  
const email = document.querySelector('#registerEmail').value;  
const password = document.querySelector("#registerPassword").value; 
const data = { name:userName, email:email,password:password}; 
  
    fetch("http://localhost:3000/signup", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then( res => res.json())
      .then( data => {
        console.log(data);
        if(data.result)
        {
                return true; 
                window.location.assign()
        }
      })
}); 



const signInBtn = document.querySelector('#connection'); 

signInBtn.addEventListener('click', function(){
  const connectionEmail = document.querySelector('#connectionEmail').value;  
const connectionPassw = document.querySelector("#connectionPassword").value; 
const data2 =  { email:connectionEmail,password:connectionPassword}; 

  fetch("http://localhost:3000/signin", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data2), // body data type must match "Content-Type" header
    })
    .then( res => res.json())
    .then( data => {
      console.log(data);
      if(data.result)
      {
              return true; 
              window.location.assign()
      }
    })
}); 