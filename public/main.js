const main = () => {
  document.querySelector('h1').textContent += '?'
}

document.addEventListener('DOMContentLoaded', main)




const searchWeatherAPI = () => {
  const userInput = document.querySelector('.input').value

  console.log(userInput)

  const weatherKey = 'd75481a15f615534ede744531d37163a'


  const _url = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + weatherKey

  fetch(_url)
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




  document.querySelector('button').addEventListener('click', searchWeatherAPI)