fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
  .then((res) => {
    const data = res.json();
    return data;
  })
  .then((data) => {
    console.log("data::", data.meals);
    console.log("document", document);
    const ulElement = document.getElementById("list");
    console.log(ulElement);

    const liElement = document.createElement("li");
    liElement.innerText = "hi";

    const liElement2 = document.createElement("li");
    liElement2.innerText = "World";

    ulElement.appendChild(liElement);
    ulElement.appendChild(liElement2);

    for (let i = 0; i < data.meals.length; i++) {
      console.log(data.meals[i]);

      // ELEMENT CREATION
      // create Li element <li>
      // create img element <img>
      // create h1 element <h1>

      // ELEMENT UPDATION
      // update img element with src <img src="">
      // img.src = data.meals[i].strMealThumb

      // update h1 with title <h1>text<h1>
      // h1.innerText = data.meals[i].strMeal

      // ELEMENT APPEND IN DOM
      // img will be child of li
      // h1 will be child of li
      // li will be child of ul
    }
  });
