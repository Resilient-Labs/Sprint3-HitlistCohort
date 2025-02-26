const express = require('express')
const app = express()

// app.get('/', (request, response) => {
//   response.send('<h1>Hello World!</h1>')
// })

app.use(express.static('dist'))

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})