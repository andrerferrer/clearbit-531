// we get the user input when the user 

// the submit event can only happen in ONE kind of element

// 1st select the form
const form = document.querySelector('form#clearbitForm');

// 2nd add event listener
// form.addEventListener('event', callback)
// callback is a function which means () => {}
form.addEventListener('submit', (event) => {
  // 3rd do callback
  event.preventDefault(); // this is to prevent the page from reloading
  // console.log(event.currentTarget);
  
  // select the element
  // find the email in the input and get what's inside
  const emailInput = document.getElementById('clearbitEmail');
  const queryEmail = emailInput.value;
  // with the inputted email we fetch the API
  const url = `https://person.clearbit.com/v2/combined/find?email=${queryEmail}`;
  fetch(url, {
    headers: {
      Authorization: `Bearer sk_f3f04bef2d500f1b9e7f42152a47edc3`
    }
  })
    .then(response => response.json())
    .then((data) => {
      // With the response we need to extract
      // DIG THE JSON
      const bio = data.person.bio
      const email = data.person.email
      const name = data.person.name.fullName
      const location = data.person.location
      
      // we display them in the DOM
      
      // select the element to display the bio
      // const userBio = document.querySelector("#userBio");
      // change the innerText with the bio variable
      // userBio.innerText = bio;
      
      document.querySelector("#userBio").innerText = bio;
      document.querySelector("#userName").innerText = name;
      document.querySelector("#userEmail").innerText = email;
      document.querySelector("#userLocation").innerText = location;

    });
  

});

