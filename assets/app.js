openMenu = () => {
  document.getElementById("menu").style.width = "300px" 
};

closeMenu = () => {
  document.getElementById("menu").style.width = "0";
};

openFaq = () => {
  (document.getElementById("faq1").style.display = "block") &&
  (document.getElementsById("plus-icon").style.display =
      "none") &&
  (document.getElementsById("fa-minus-circle ").style.display =
      "block");
};

closeFaq = () => {
  document.getElementById("faq1").style.display = "none";
};
