const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const URL = "https://striveschool-api.herokuapp.com/api/product/" + id;
const p = document.querySelectorAll(".p");
p[0].innerHTML = "";
p[0].innerHTML = "";
p[0].innerHTML = "";
p[0].innerHTML = "";
const showCard=()=>{
fetch(URL, {
  method: "GET",
  // body: JSON.stringify(), //serve solo post e put
  headers: {
    //   "Content-Type": "application/json", //quando invio body
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZTcyYTdmMzA0NjAwMWFlNTlmNWYiLCJpYXQiOjE3MTI5MDgwODMsImV4cCI6MTcxNDExNzY4M30.3vmIgCB5x2ghQa6h-d62Y5qbqwJB0WLwDs535GHIK3w",
  }, //chiave
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  })
  .then((data) => {
    console.log(data);
    p[0].innerHTML = data.name;
    p[1].innerHTML = data.description;
    p[3].innerHTML = data.brand
    p[2].innerHTML = "€ "+ data.price;
  });
}
showCard()