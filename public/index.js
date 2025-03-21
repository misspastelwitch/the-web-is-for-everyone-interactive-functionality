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