/* Stap 1: Selecteer de knop */
let expandButton = document.querySelector('.profile-card-example-button')

/* Stap 2: Wacht tot iemand op die knop klikt */
expandButton?.addEventListener('click', function() {

  /* Stap 3: Verander een class zodra iemand op die knop klikt */
  document.body.classList.toggle('is-expanded')
})

const wiebenik = document.querySelector('.wiebenik')

wiebenik.addEventListener('click', function(){
window.location.href = "wiebenik.html"
console.log('gelukt')
})