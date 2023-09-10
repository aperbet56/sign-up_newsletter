// Récupération des différents éléments
const mainContainer = document.querySelector(".container");
const input = document.getElementById("email");
const error = document.getElementById("error");
const submitBtn = document.querySelector(".btn");
const messagePopup = document.querySelector(".success__modal");
const closeBtn = document.querySelector("#close__btn");

// Regex email
const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

//Déclaration de la fonction emailValidation pour la validation du champ email
const emailValidation = (input) => {
  // Ecoute de l'événement click sur le bouton soumission du formulaire
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (regexEmail.test(input.value) === false) {
      error.textContent = input.validationMessage;
      input.style.backgroundColor = "#ff6257";
      input.style.borderColor = "#ff0000";
      return false;
    } else {
      messagePopup.style.display = "block";
      mainContainer.style.display = "none";
      error.textContent = "";
      return true;
    }
  });
};
// Appel de la fonction emailValidation
emailValidation(email);

// Ecoute de l'événement click sur le bouton close de la popup/modale
closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload();
  input.value = "";
});
