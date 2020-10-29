// // CHALLENGE 1 CODE
function renderImage(imageUrl) {
    const img = document.createElement("img")
    img.src = imageUrl
    img.width = '400'
    const imageContainer = document.querySelector("#dog-image-container")
    imageContainer.append(img)
  }
  // when the page loads
  // make a GET request
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => {
      // when we have the data
      const images = data.message
      // append to the DOM
      images.forEach(imageUrl => {
        renderImage(imageUrl)
      })
    })
  
// CHALLENGE 2 and 3 OLD CODE
// function addBreedToUl(breed, breeds) {
//     const li = document.createElement('li')
//     const breedsUl = document.querySelector("#dog-breeds")
//     li.innerText = `${breed}: ${breeds[breed]}`
//     breedsUl.append(li)
//     var notRed = false
//     li.addEventListener('click', function(event) {
//          (notRed == false)  ?
//             event.target.style.color = 'red' : event.target.style.color = 'black' 
//          notRed = !notRed
//          })
//   }

fetch("https://dog.ceo/api/breeds/list/all")
.then(response => response.json())
.then(data => {
    const breeds = data.message
    for (const breed in breeds) {
        addBreedToUl(breed, breeds)
    }
    sortBreed()
    turnRed()
})

// CHALLENGE 4 CODE

const breedDropdown = document.getElementById("breed-dropdown")
const breedsUl = document.querySelector("#dog-breeds")

function addBreedToUl(breed, breeds) {
    const li = document.createElement('li')
    breedsUl.append(li)
    li.innerText = `${breed}: ${breeds[breed]}`
    li.style.display = "none"
}

breedDropdown.addEventListener('change', function(event) {
    sortBreed(event.target.value)
})

function sortBreed(letter = "a") {
    const breedList = breedsUl.querySelectorAll('li')
    breedList.forEach(breed => {
        if (breed.innerText.startsWith(letter)) {
            breed.style.display = ""
        } else {
            breed.style.display = "none"
        }    
    })
}

function turnRed() {
    let notRed = false
    breedsUl.querySelectorAll('li').forEach(li => {    
        li.addEventListener('click', function(event) {
            (notRed == false)  ?
                event.target.style.color = 'red' : event.target.style.color = 'black' 
            notRed = !notRed
        })
    });
}