let dele = 0;
let fatui = 0;
let foodid = 0;
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

      dele = dele+1;
      console.log("dele number is",dele);


    


      let category = event.target.innerText;
      category = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;

      // get the data and create html
      function add_category() {
        fetch(category)
          .then((res) => {
            const data = res.json();
            return data;
          })
          .then((data) => {
            const ulElement = document.getElementById("list");
            for (let i = 0; i < data.meals.length; i++) {
              let x = i+1;
              

        
              // create Li element <li>
              let liElement = document.createElement("li");
            
        
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
              console.log("fatui is",fatui);
              //modal elements

              liElement.addEventListener("click", function (event) {
                console.log("Button is clicked!");
                let fdas = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + data.meals[i].idMeal
                fetch(fdas)
                .then((res) => {
                const cool = res.json();
                return cool;
                               })
                .then((cool) => {
                  
                  // get modal
                  var modal = document.getElementById("myModal");
                   // creating list
                  let igElement = document.createElement("li");

                  const ingElement = document.createElement("li");
                  const insElement = document.createElement("p");
                  const measElement = document.createElement("li");

                  igElement.classList.add("modal-content");


                  for (let i = 0; i <= 20; i++) {
                    const key = "strIngredient" + (i +1);
                    const wee =  "strMeasure" + (i +1);
                    ingElement.innerText = cool.meals[0].key;
                    measElement.innerText = cool.meals[0].wee;
                    if ( i >0){
                      modal.style.display = "block";
                    }
                    

                  }
                
                  measElement.innerText = cool.meals[0].strInstructions;
     
                  const closeElement = document.createElement("button");
                  closeElement.innerText = "close";

                  
                  closeElement.onclick = function() {
                    modal.style.display = "none";
                    modal.removeChild(modal.firstElementChild);
                  }
                  
                 
                  igElement.appendChild(insElement);
                  igElement.appendChild(ingElement);
                  igElement.appendChild(measElement);
                  igElement.appendChild(closeElement);
                  modal.appendChild(igElement);

                  
                
                  
                })

              });
             
            
            
              
            }
            if(dele>1){
              for(let i=0; i < fatui; i++)
              ulElement.removeChild(ulElement.firstElementChild);
             }
             fatui = data.meals.length;
            
          
          });
      }     
    
      
        add_category();
        
          
    });
  }
}
/*
document.getElementsByClassName("img-with-text").addEventListener("click", function () {
  let fdas = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + data.meals[i].idMeal
  fetch(fdas)
  .then((res) => {
    const cool = res.json();
    return cool;
  })
  .then((cool) => {
    let igElement = document.createElement("li");

    const ingElement = document.createElement("p");
    ingElement.innerText = cool.meals[0].strIngredient[i];

    const insElement = document.createElement("p");
    insElement.innerText = cool.meals[0].strInstructions;

    const measElement = document.createElement("p");
    measElement.innerText = cool.meals[0].strMeasure[i];
     
    const closeElement = document.createElement("button");
    closeElement.innerText = "close";

    igElement.classList.add("hox");

    igElement.appendChild(ingElement);
    igElement.appendChild(insElement);
    igElement.appendChild(measElement);
    igElement.appendChild(closeElement);



  })
});*/
  
