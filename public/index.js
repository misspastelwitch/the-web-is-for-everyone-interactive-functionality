 //Show more button
 console.log("hello")

 let showMoreButton = document.querySelector('.showmore');
 console.log(showMoreButton)

showMoreButton.addEventListener('click', function() {
    showMoreButton.classList.toggle('showmore');
    // Change the text on the button to 'Show more' when it's
    //'Show less', and to 'Show less' when it's 'Show more'
    if (showMoreButton.textContent == 'Show less') {
        showMoreButton.textContent = 'Show more';
    } else {
        showMoreButton.textContent = 'Show less';
    }
})
 console.log("hello")

 document.startViewTransition(updateFunction)

 if (document.startViewTransition) {
    document.startViewTransition(function() {
        // Verander hier iets in de DOM, 
    })
} else {
    // Verander hier iets in de DOM
}
// Loading state vervangen door een Success state
form.outerHTML = newState.outerHTML
// Overschrijf ons formulier met de nieuwe HTML, met of zonder een View Transition, afhankelijk van de browser
if (document.startViewTransition) {
    document.startViewTransition(function() {
        form.outerHTML = newState.outerHTML
    })
} else {
    form.outerHTML = newState.outerHTML
}