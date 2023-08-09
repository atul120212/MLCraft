const navbarHeight = document.querySelector("#navbar").offsetHeight;


document.documentElement.style.setProperty(
  "--scroll-padding-top", 
  navbarHeight  + "px"
);
