const app = require('./app')({ spoofCookies: false })

app.listen(8886, () => console.log('App listening on 8886'))
