function redirect() {
  myInput = document.getElementById("searchId").value;

  switch (myInput) {
    case "taiwanese":
      window.open("catagory_taiwan.html", "_blank");
      break;
    case "tunisian":
      window.open("category-tunisia.html", "_blank");
      break;
    case "german":
      window.open("catagory-german.html", "_blank");
    case "sudanese":
      window.open("catagory-german.html", "_blank");
    default:
      window.open("http://127.0.0.1:5500/Coogle/index.html?", "_self");
  }
}
