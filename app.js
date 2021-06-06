document.getElementById('get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  
  const number = document.getElementById('number').value;

  // Create XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Open - Establish connection
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

  // Response received, process data
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = '';
      // Check whether API response is success
      if (response.type === 'success') {

        // Loop through response values containing jokes
        response.value.forEach(function(jokeItem) {

          // Append each joke item to li element
          output += `<li>${jokeItem.joke}</li>`;
        });
      } else {
        // If API response is not proper than display error
        output += `<li>Something went wrong!!!</li>`;
      }
      // Send list data to ul element
      document.getElementById('output').innerHTML = output;
    }
  }
  // Complete the xhr request
  xhr.send();

  e.preventDefault();
}