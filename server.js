// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

const vacaturesResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies_vacancies')  
const vacaturesResponseJSON = await vacaturesResponse.json()
console.log('Welcome back, Stella! ^^')
// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')


// Maak een GET route voor de index (meestal doe je dit in de root, als /)
app.get('/', async function (request, response) {
  // Render index.liquid uit de Views map
  // Geef hier eventueel data aan mee

  console.log('we zijn op home');

  let appliedFor = false;
  if (request.query.appliedFor) {
    appliedFor = Number(request.query.appliedFor)
  }
  
  response.render('vacatures.liquid', {
    vacatures: vacaturesResponseJSON.data,
    appliedFor: appliedFor
   }
  )
})

app.get('/solici', async function (request, response) {
  response.render('solicitatie.liquid')
})


app.post('/soliciatie', async function (request, response) {
 console.log(request.body.name);
 response.redirect(303, '/')
})

// app.get('/gelukt', async function (request, response) {
//   response.render('gelukt.liquid')
// })


// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen


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




// Hier doen we nu nog niets mee, maar je kunt er mee spelen als je wilt
app.post('/', async function (request, response) {
 // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
 // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
 response.redirect(303, '/')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
 // Toon een bericht in de console en geef het poortnummer door
 console.log(`Application started on http://localhost:${app.get('port')}`)
})

// Zie https://expressjs.com/en/5x/api.html#app.get.method over app.get()
//app.get(), async function (request, response) {
  
  // Zie https://expressjs.com/en/5x/api.html#res.render over response.render()
 // response.render()
//}

console.log('Routes clear!')
/*
// Zie https://expressjs.com/en/5x/api.html#app.post.method over app.post()
app.post(…, async function (request, response) {

  // In request.body zitten alle formuliervelden die een `name` attribuut hebben in je HTML
  console.log(request.body)

  // Via een fetch() naar Directus vullen we nieuwe gegevens in

  // Zie https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch over fetch()
  // Zie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify over JSON.stringify()
  // Zie https://docs.directus.io/reference/items.html#create-an-item over het toevoegen van gegevens in Directus
  // Zie https://docs.directus.io/reference/items.html#update-an-item over het veranderen van gegevens in Directus
  await fetch(…, {
    method: …,
    body: JSON.stringify(…),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });

  // Redirect de gebruiker daarna naar een logische volgende stap
  // Zie https://expressjs.com/en/5x/api.html#res.redirect over response.redirect()
  response.redirect(303, …)
})
*/

