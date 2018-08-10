const main = () => {
  document.querySelector('h1').textContent += '?'
}

document.addEventListener('DOMContentLoaded', main)




const searchWeatherAPI = () => {
  const userInput = document.querySelector('.input').value
  console.log(userInput)
}


const searchAPIEvent = () => {
  const userInput = document.querySelector('.input').value
  const apiSearch = new Search(userInput)
  apiSearch.getSearchResults()
}

class Search {
  constructor(searchTerm) {
    const weatherKey = 'd75481a15f615534ede744531d37163a'
    this.searchTerm = searchTerm
    this.searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + searchTerm + '&appid=' + weatherKey + '&unit=imperial'
  }

  getSearchResults() {
    fetch(this.searchUrl)
      .then(resp => {
        if (resp.status === 200) {
          console.log("response = ", resp)
          return resp.json()
        } else {
          console.log("err", resp)
        }
      }).then(weatherData => {
        console.log("search results = ", weatherData)
        const parent = document.querySelector('.searchResults')

        const newListItem = document.createElement('li')
        newListItem.textContent = weatherData.main.temp
        parent.appendChild(newListItem)


      })
  }
}

document.querySelector('.search-by-city-button').addEventListener('click', searchAPIEvent)
document.querySelector('.search-by-zip-button').addEventListener('click', searchAPIEvent)