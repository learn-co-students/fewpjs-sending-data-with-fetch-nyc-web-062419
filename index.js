const spot = document.querySelector("script")
// Add your code here
function submitData(name1, email1) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ name: name1, email: email1 })
      })
      .then(resp => resp.json())
      .then(json => newFunction(json))
      .catch(function(error) {
        alert("Bad things! Ragnarők!");
        spot.append(error.message);
      });
}

function newFunction(json) {
        let something = json.id 
        let some = document.createAttribute("p")
        some.innerText = something
        spot.append(something)

}