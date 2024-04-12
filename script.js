// const-back
const imageProduct = document.getElementById("img");
const nameProduct = document.getElementById("name");
const descriptionProduct = document.getElementById("description");
const priceProduct = document.getElementById("price");
const brandProduct = document.getElementById("brand");
const button = document.querySelector(".btn");
const buttonDelete = document.querySelector(".btn2");
const form = document.getElementById("form");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const URL = id
  ? "https://striveschool-api.herokuapp.com/api/product/" + id
  : "https://striveschool-api.herokuapp.com/api/product/";
// const method = id ? "PUT" : "POST";

console.log(id);
const funcForCreateCard = () => {
  if (id) {
    button.innerHTML = `Modifica`;
    button.classList.add("btn3");
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
        const input = document.querySelectorAll("input");
        console.log(data);
        console.log(input);
        input[0].value = data.imageUrl;
        input[1].value = data.name;
        input[2].value = data.description;
        input[3].value = data.brand;
        input[4].value = data.price;
      })
      .catch((err) => {
        console.log(err);
      });

    //invio modifica
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const objCard = {
        imageUrl: imageProduct.value,
        name: nameProduct.value,
        description: descriptionProduct.value,
        price: priceProduct.value,
        brand: brandProduct.value,
      };
      console.log(objCard);

      fetch(URL, {
        method: "PUT",
        body: JSON.stringify(objCard), //serve solo post e put
        headers: {
          "Content-Type": "application/json", //quando invio body
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
        })
        .catch((err) => {
          console.log(err);
        });
      alert("MODIFICATO con successo!");
    });


    buttonDelete.addEventListener("click", (event) => {
      event.preventDefault();
      const objCard = {
        imageUrl: imageProduct.value,
        name: nameProduct.value,
        description: descriptionProduct.value,
        price: priceProduct.value,
        brand: brandProduct.value,
      };
      console.log(objCard);

      fetch(URL, {
        method: "DELETE",
        // body: JSON.stringify(objCard), //serve solo post e put
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
        })
        .catch((err) => {
          console.log(err);
        });
        
      alert("ELIMINATO con successo!");
    });
  } else {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const objCard = {
        imageUrl: imageProduct.value,
        name: nameProduct.value,
        description: descriptionProduct.value,
        price: priceProduct.value,
        brand: brandProduct.value,
      };
      console.log(objCard);

      fetch(URL, {
        method: "POST",
        body: JSON.stringify(objCard), //serve solo post e put
        headers: {
          "Content-Type": "application/json", //quando invio body
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
        })
        .catch((err) => {
          console.log(err);
        });
      event.target.reset();
    });
  }
};
funcForCreateCard();
