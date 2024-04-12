const div = document.querySelector(".pro-container");
const URL = "https://striveschool-api.herokuapp.com/api/product/";

const funcForGenerateCard = () => {
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

      data.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("pro");
        card.innerHTML = `<img class="IMG" src=${product.imageUrl} alt="img" />
        <div class="des">
          <span>${product.brand}</span>
          <h5>${product.name}</h5>
          <p>${product.description} </p>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4> € ${product.price}</h4>
        </div>
        <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
        <a href="back-office.html?id=${product._id}"><i id="modify" class="bi bi-pencil-square"></i></a>`;
        div.appendChild(card);

        const img = document.querySelectorAll(".IMG");
        img.forEach((imageOne) => {
          imageOne.addEventListener("click", () => {
            data.forEach((product) => {
              window.location.href = "details.html?id=" + product._id;
            });
          });
        });
      });
    })

    .catch((err) => {
      console.log(err);
    });
};
funcForGenerateCard();
