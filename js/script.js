window.addEventListener("load", function(){ 
  const buttonArray = document.getElementById("arrayButton");
  const familyArray = ["Heather", "Daniel"];
  const movieArray = ["Ripley", "Stark"];
  const divArray = document.getElementById("arrayBody");
  const h1Body2 = document.getElementById("body-h1");
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  const li5 = document.createElement("li");
  const li6 = document.createElement("li");

  divArray.append(ul);
  ul.before(h1Body2);
  document.querySelector("ul").append(li1, li2, li3, li4, li5, li6);
  
  styleLoad();

  function styleLoad() {
    const body1 = document.getElementById("bodyOne");
    const body2 = document.getElementById("bodyTwo");
    const body3 = document.getElementById("bodyThree");

    bodyOne();
    bodyTwo();
    bodyThree();
    styleUL();

    function bodyOne() {
      body1.style.backgroundColor = "green";
      body1.style.border = "solid black 3px";
      body1.style.padding = "10%";
      body1.style.margin = "1%";
      body1.style.borderRadius = "10px";
    }

    function bodyTwo() {
      body2.style.backgroundColor = "red";
      body2.style.padding = "10%";
      body2.style.margin = "1%";
      body2.style.border = "solid black 3px";
      body2.style.borderRadius = "10px";
    }

    function bodyThree() {
      body3.style.backgroundColor = "lightBlue";
      body3.style.padding = "10%";
      body3.style.margin = "1%";
      body3.style.border = "solid black 3px";
      body3.style.borderRadius = "10px";
    }

    function styleUL() {
      ul.style.backgroundColor = "white";
      ul.style.margin = "5%";
      ul.style.padding = "10%";
      ul.style.border = "solid black 3px";
    }
  }
  
  function arrayLoad(event) {
    event.preventDefault();
    const valueOne = document.getElementById("arrayValue1").value;
    const valueTwo = document.getElementById("arrayValue2").value;
    const valueThree = document.getElementById("arrayValue3").value;
    const mergedArray = familyArray.concat(movieArray);
    const favoriteArray = [valueOne, valueTwo, valueThree];
    
    
    console.log(mergedArray);

    appendUL();
    function appendUL() {
      const slicedArray = mergedArray.slice(0, 3);
      const combinedArray = favoriteArray.concat(slicedArray);
      console.log(slicedArray);
      console.log(combinedArray);
      
      li1.innerText = combinedArray[0];
      li2.innerText = combinedArray[1];
      li3.innerText = combinedArray[2];
      li4.innerText = combinedArray[3];
      li5.innerText = combinedArray[4];
      li6.innerText = combinedArray[5];
    }
  }

  buttonArray.addEventListener("click", arrayLoad);
})