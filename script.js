function redirect() {
  myInput = document.getElementById("searchId").value;

  switch (myInput) {
    case "taiwanese":
      window.open("https://www.google.com", "_blank");
      break;
    case "tunisian":
      window.open("https://www.google.com", "_blank");
      break;
    case "german":
      window.open("https://www.google.com", "_blank");
    case "sudanese":
      window.open("https://www.google.com", "_blank");
    default:
      window.open("http://127.0.0.1:5500/Coogle/index.html?", "_self");
  }
}
