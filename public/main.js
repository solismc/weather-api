const main = () => {
  document.querySelector('h1').textContent += ''
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
    this.searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + searchTerm + '&appid=' + weatherKey
  }

  getSearchResults() {
    fetch(this.searchUrl)
      .then(resp => {
        if (resp.status === 200) {
          console.log('response = ', resp)
          return resp.json()
        } else {
          console.log('err', resp)
        }
      }).then(weatherData => {
        console.log('search results = ', weatherData)
        const parent = document.querySelector('.searchResults')

        const newListItem = document.createElement('li')
        newListItem.textContent = 'Current Conditions in: ' + weatherData.name
        parent.appendChild(newListItem)

        const newListItem1 = document.createElement('li')
        newListItem1.textContent = 'The current temperature is: ' + weatherData.main.temp
        parent.appendChild(newListItem1)

        const newListItem2 = document.createElement('li')
        newListItem2.textContent = 'The feels like temperature is: ' + weatherData.main.feels_like
        parent.appendChild(newListItem2)

        const newListItem3 = document.createElement('li')
        newListItem3.textContent = "Today's min temperature is: " + weatherData.main.temp_min
        parent.appendChild(newListItem3)

        const newListItem4 = document.createElement('li')
        newListItem4.textContent = "Today's max temperature is: " + weatherData.main.temp_max
        parent.appendChild(newListItem4)
      })
  }
}

document.querySelector('.search-by-city-button').addEventListener('click', searchAPIEvent)
document.querySelector('.search-by-zip-button').addEventListener('click', searchAPIEvent)
document.querySelector('.search-by-temp-button').addEventListener('click', searchAPIEvent)



/*const newListItem1 = document.createElement('li')
newListItem1.textContent = 'Current Humidity is: ' + weatherData.main.humidity
parent.appendChild(newListItem1)*/