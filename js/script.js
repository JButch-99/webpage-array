window.addEventListener("load", function(){ 
  const buttonArray1 = document.getElementById("arrayButton");
  const parentArray = ["Heather", "Daniel"];
  const movieArray = ["Ripley", "Rodgers", "Stark"];
  const favoriteArray = [];
  
  function arrayLoad(event) {
    event.preventDefault();
    const valueOne = document.getElementById("arrayValue1").value;
    const valueTwo = document.getElementById("arrayValue2").value;
    const valueThree = document.getElementById("arrayValue3").value;
    favoriteArray.push(valueOne, valueTwo, valueThree);
    
    

    function appendUl() {
      const h1Body2 = document.getElementById("body-h1");
      const ul = document.createElement("ul");
      const li1 = document.createElement("li");
      const li2 = document.createElement("li");
      const li3 = document.createElement("li");

      li1.append("test");
      li2.append("tteesstt");
      ul.prepend(h1Body2)
      document.querySelector("ul").append(li1, li2, li3);
    }
  }
  
  buttonArray1.addEventListener("click", arrayLoad);

})