# Dutch Design Agency - Vacatures

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)


## Beschrijving
<!-- In de Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->

Deze project is een vacature pagina voor DDA, waar de user verschillende vacatures kan zien, beschrijvingen lezen en een korte formulier invullen om te soliciteren.

## Gebruik
<!--Bij Gebruik staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->

Het styling is gebaseerd op de andere DDA paginas en huisstijl, met een paar veranderingen om te zorgen dat het pagina makkelijk te navigeren is.
![Screenshot 2025-04-02 103337](https://github.com/user-attachments/assets/7601a5f3-8bbb-46e1-bf6c-0358c72350c2)
![Screenshot 2025-04-02 103356](https://github.com/user-attachments/assets/a95d0401-cfec-4bbf-b0b9-b503fa1f4f13)
![image](https://github.com/user-attachments/assets/0002e137-88d3-4f4c-a039-736521f39c04)


</br> 
Ik heb de buttons veranderd van zwart naar blauw om ze meet aantrekkelijk te maken. Zonder dit vind ik dat de pagina te monotoon is, en dat het niet visueel stimulerend genoeg is dat mensen soliciteren willen.

![Screenshot 2025-04-02 103213](https://github.com/user-attachments/assets/e52e5c17-d857-40b2-b5b4-4a63c6c61fc4)

Daarnast heb ik een dropdown description binnen de pagina gemaakt waar de user meer informatie kan krijgen over een vacature. Dit bestaat uit een korte beschijving van de role en een solicitatieformulier.
![image](https://github.com/user-attachments/assets/0ea8dab7-1c85-4491-8403-2c2f1d380348)

Als de user zijn informatie in de formulier schrijft, krijg hen een ideal state als een korte bericht in plaats van de formulier, die verzekert de user dat alles gelukt is van het opslaan van informatie.
![image](https://github.com/user-attachments/assets/e8c7c1b4-9c7c-459a-a9d5-fc65c7ed5a98)


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
In CSS gebruik ik een grid layout en max-inline-size met characters zodat de text die geladen word niet de hele width van de pagina over loopt.
 ``` 
.speakerinfo {
max-inline-size: 80ch;
}
 ``` 
Ik heb met javascript een dropdown menu gemaakt met query selectors en event listeners.

  ```
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
 ```

Met Liquid kon ik een method="POST" gebruiken om alle data vanuit de formulier naar de database sturen.

 ```
<form id="solicitatieform" method="POST" action="/">
<label for="name">Naam</label>
<input type="text" id="input" name="name" placeholder="John Doe">

<label for="email">E-mail</label>
<input type="text" id="input" name="email" placeholder="johndoe@gmail.com">
<input type="hidden" name="vacature" value="{{ vacature.id }}">
<input type="submit" id="verstuur" value="verstuur">
</form>
 ```
Dit koppelt aan de POST die in de Server.js staat.
 ```
app.post ('/', async function (request, response) {

 const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_applications', {
  method:'POST',
  headers: {
    'Content-Type':'application/json;charset=utf-8',

  },
  body: JSON.stringify({
    vacancy: request.body.vacature,
    name: request.body.name,
    email: request.body.email,
  })
 })
 console.log(apiResponse);

 
 response.redirect(303, '/?appliedFor=' + request.body.vacature);
});
 ```
Met Liquid kon ik ook de formulier partial vervangen met de gelukt bericht als de formulier verstuurt is naar de database.
 ```
        {% if appliedFor == vacature.id %}
        {% render './partials/gelukt.liquid' %}
            {% else %}
        {% render 'partials/soliciteer.liquid', vacature: vacature %}

        {% endif %}
 ```

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
Dit repo kan geforked worden, en alle verwijzingen naar de server of database kunne verwerkt worden om de code aan een andere server koppelen.

## Bronnen

## Licentie


This project is licensed under the terms of the [MIT license](./LICENSE).
