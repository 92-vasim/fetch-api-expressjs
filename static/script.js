console.log("Page is running")

// Fetch api has a process
// Its processes are divided into pieces using then

// Fetch is a function 
// 1st Process
// fetch('')

//     // 2nd Process
//     .then((response) => response.json())

//     // 3rd Process 
//     .then((data) => console.log(data));

// Creating a function to get request
const getRequest = async  (url) => {
    
    // Fetching data by url
    const response = await fetch(url);
    
    // Converting data to json
    const data = await  response.json();
    
    // Returning data
    return data
}

// Creating a function to post request
// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  

/*
getRequest('/data').then(data => {
    let student = document.getElementById('student')
    let age = document.getElementById('age')
    let college = document.getElementById('college')
    let arshad = data[0]
    student.innerHTML = arshad.name
    age.innerHTML = arshad.age
    college.innerHTML = arshad.college
    console.log(arshad.name)
    // console.log(data)
})*/

postBtn.addEventListener('click', ()=> {
    console.log("Event is clicked")
    let subject = document.getElementById("subject")
    let message = document.getElementById("message")
    console.log(subject.value, message.value)
    let subjectData = {
        'subject': subject.value,
        'message': message.value
    }
    let resp = postData('/message', subjectData)
    console.log(resp)
})
