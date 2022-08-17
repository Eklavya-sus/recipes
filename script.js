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
      liElement.classList.add('img-with-text');
      
      // update img element with src <img src="">
      
      imgElement.src = data.meals[i].strMealThumb;
      // update img class
      imgElement.classList.add('pic');
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
