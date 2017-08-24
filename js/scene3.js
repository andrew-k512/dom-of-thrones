function scene3() {

  console.log('Executing scene 3!')

  // Setup Stage
  stage = document.querySelector('#stage');
  desert = document.querySelector('#desert');
  stageImg = document.querySelector('#stage-img');
  desertImgSrc = desert.getAttribute('src');
  stageImg.setAttribute('src', desertImgSrc);

  // Setup Cast
  // Character 1
// <img id="drogo" title="#drogo" src="img/cast/drogo.jpg">
var drogoContainer = document.createElement('div');
stage.append(drogoContainer)

drogoContainer.style.position = 'absolute'
drogoContainer.style.width = '10%'
drogoContainer.style.height = '20%'
drogoContainer.style.top = '55%'
drogoContainer.style.left = '75%'
drogoContainer.style.height = '37%'

var drogo = document.querySelector('#drogo')
drogoContainer.append(drogo)
var drogobod = document.querySelector('#bulky-man')
drogoContainer.append(drogobod)

drogo.style.position = 'absolute'
drogo.style.top = 0
drogo.style.left = '13%'
drogobod.style.position = 'absolute'
drogobod.style.bottom = 0
drogo.style.width = '70%'

  // Character 2
// <img id="danerys" title="#danerys" src="img/cast/danerys.jpg">
var danerysContainer = document.createElement('div');
stage.append(danerysContainer)

danerysContainer.style.position = 'absolute'
danerysContainer.style.width = '10%'
danerysContainer.style.height = '20%'
danerysContainer.style.top = '55%'
danerysContainer.style.left = '45%'
danerysContainer.style.height = '37%'

var danerys = document.querySelector('#danerys')
danerysContainer.append(danerys)
var danerysbod = document.querySelector('#blue-dress')
danerysContainer.append(danerysbod)

danerys.style.position = 'absolute'
danerys.style.top = '5%'
danerys.style.left = '8%'
danerysbod.style.position = 'absolute'
danerysbod.style.bottom = 0
danerys.style.width = '58%'


  // Setup Props
  // Prop 1


var egg = document.querySelector('#egg')
stage.append(egg)
egg.style.position = 'absolute'
egg.style.top = '64%'
egg.style.left = '52%'
egg.style.height = '9%'
egg.style.transform = 'rotateY(150deg)'

  // Prop 2

  // Action!

  // Stage direction 1

  // frame(function() {
  // egg.style.top = '64%'
  // egg.style.left = '52%'
  // })

  // Stage direction 2

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '59%'
  })

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '66%'

  })

  frame(function() {
  egg.style.top = '64%'
  egg.style.left = '72%'
  })

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '66%'
  })

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '59%'
  })


  frame(function() {
  egg.style.top = '64%'
  egg.style.left = '52%'
  })

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '59%'
  })

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '66%'

  })

  frame(function() {
  egg.style.top = '64%'
  egg.style.left = '72%'
  })

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '66%'
  })

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '59%'
  })


  frame(function() {
  egg.style.top = '64%'
  egg.style.left = '52%'
  })

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '59%'
  })

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '66%'

  })

  frame(function() {
  egg.style.top = '64%'
  egg.style.left = '72%'
  })

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '66%'
  })

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '59%'
  })


  frame(function() {
  egg.style.top = '64%'
  egg.style.left = '52%'
  })

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '59%'
  })

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '66%'

  })

  frame(function() {
  egg.style.top = '64%'
  egg.style.left = '72%'
  })

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '66%'
  })

  frame(function() {
  egg.style.top = '44%'
  egg.style.left = '59%'
  })

  frame(function() {
  egg.style.top = '64%'
  egg.style.left = '52%'
  })


}
