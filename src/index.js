// console.log('%c HI', 'color: firebrick')
const dogArray = fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(response => response.json())
  .then(data => parseArray(data));



function parseArray(data) {
    const imageContainer = document.querySelector("#dog-image-container")
    const img = document.createElement('img')
    const messageArray = data.message
    messageArray.forEach(url => {
        img.innerText = `src="${url}"`
        imageContainer.append(img)
    });
}
