const flipcard = document.querySelector(".flipcard");

flipcard.addEventListener("mouseover", () => {
  console.log("Mouse entered the flipcard");
  flipcard.classList.toggle("flip"); // Ajouter une classe pour le style ou autre logique
});

flipcard.addEventListener("mouseout", () => {
  console.log("Mouse left the flipcard");
  flipcard.classList.toggle("flip"); // Supprimer la classe quand la souris sort
});
