
 //Show more button
 
 let showMoreButton = document.querySelector('.showmore');
 showMoreButton.addEventListener('click', function() {
     showMoreButton.classList.toggle('showingmore');
     // Change the text on the button to 'Show more' when it's
     //'Show less', and to 'Show less' when it's 'Show more'
     if (showMoreButton.textContent == 'Show more') {
         showMoreButton.textContent = 'Show less';
     } else {
         showMoreButton.textContent = 'Show more';
     }
 })