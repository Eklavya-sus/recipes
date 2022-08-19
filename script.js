fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
  .then((res) => {
    const data = res.json();
    return data;
  })
  .then((data) => {
    const ulElement = document.getElementById("list");
    console.log(ulElement);
    for (let i = 0; i < data.meals.length; i++) {
      // ELEMENT CREATION

      // create Li element <li>
      const liElement = document.createElement("li");

      // create img element <img>
      const imgElement = document.createElement("img");

      // create h1 element <h1>
      const h1Element = document.createElement("h3");

      // ELEMENT UPDATION
      // update class of li
      liElement.classList.add("img-with-text");

      // update img element with src <img src="">

      imgElement.src = data.meals[i].strMealThumb;
      // update img class
      imgElement.classList.add("pic");
      // update h1 with title <h1>text<h1>
      h1Element.innerText = data.meals[i].strMeal;

      // ELEMENT APPEND IN DOM
      // img will be child of li
      liElement.appendChild(imgElement);
      // h1 will be child of li
      liElement.appendChild(h1Element);
      // li will be child of ul
      ulElement.appendChild(liElement);
    }
  });

fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
  .then((res) => {
    const catgry = res.json();
    return catgry;
  })

  .then((catgry) => {
    const xlElement = document.getElementById("cat");
    for (let i = 0; i < catgry.meals.length; i++) {
      const txtElement = document.createElement("button");
      txtElement.classList.toggle("category-button");
      txtElement.innerText = catgry.meals[i].strCategory;
      console.log(txtElement);
      xlElement.appendChild(txtElement);
    }
    addEventListnerInCategoryButtons();
  });

function addEventListnerInCategoryButtons() {
  // Access all the category buttons by class Name
  const categoryButtons = document.getElementsByClassName("category-button");

  console.log("categoryButtons", categoryButtons);

  //Iterate all the category buttons and add click event listner to them
  for (let i = 0; i < categoryButtons.length; i++) {
    console.log("access buttons::::", categoryButtons[i]);

    // Add click event listner to button
    categoryButtons[i].addEventListener("click", function (event) {
      console.log("Button is clicked!", event.target.innerText);

      // category = event.target.innerText
      // string1 + string2
      // We need to hit "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category
      // get the data and create html
    });
  }
}
