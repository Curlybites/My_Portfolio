

// dark mode js

function myFunction() {
    // var element = document.body;
    // element.classList.toggle("dark-mode")

    const element = document.getElementById("Header");
   element.classList.toggle("header-darkmode");

   const body = document.body;
   body.classList.toggle("light-mode");

  const light = document.getElementById("light");
  light.classList.toggle("fa-sun");
  light.classList.toggle("fa-moon")

 }

