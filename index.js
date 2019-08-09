
function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    } )
    .then( function ( response ) {
      return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}












// Test 2 - Handle the Response
// On a successful POST request, expect the server to respond with a [Response][response] object. Just like we saw earlier in the dog example, the body property of this response will contain the data from the POST request along with a newly assigned id.

// Use a then() call to access the Response object and use its built in json() method to parse the contents of the body property. Use a second then() to access this newly converted object. From this object, find the new id and append this value to the DOM.

// Using index.html and the JSON server, if your code is successful, calling submitData in the console should cause an id number to appear on the page.

// Test 3 - Handle Errors
// For this final test, after the two then() calls on your fetch() request, add a catch().

// When writing the callback function for your catch(), expect to receive an object on error with a property, message, containing info about what went wrong. Append this message to the DOM when catch() is called.

// Conclusion
// Congratulations! You can now use fetch(): the browser inside your browser's JavaScript environment to both:

// READ data using HTTP GET (whose response you can put into the DOM)
// SEND data using HTTP POST (whose response you can put into the DOM)
// With this we're ready to to stitch server updates (reads and updates) with DOM updating and event handling. We're almost ready to build the "Simple Looker" from scratch!