'use strict'

const path = require('path')
const serveStatic = require('feathers').static
const favicon = require('serve-favicon')
const compress = require('compression')
const cors = require('cors')
const feathers = require('feathers')
const configuration = require('feathers-configuration')
const hooks = require('feathers-hooks')
const rest = require('feathers-rest')
const bodyParser = require('body-parser')
const socketio = require('feathers-socketio')
const middleware = require('./middleware')
const services = require('./services')

module.exports = function(options) {
  const app = feathers()

  app.configure(configuration(path.join(__dirname, '..')))

  if (process.env.MONGODB_URL) {
    app.set('mongodb', process.env.MONGODB_URL)
  }

  app.use(compress())
    .options('*', cors())
    .use(cors())
    .use(favicon(path.join(app.get('public'), 'favicon.ico')))
    .use('/', serveStatic(app.get('public')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .configure(hooks())
    .configure(rest())
    .configure(socketio())
    .configure(services)
    .configure(middleware(options))
    .use(function (req, res, next) {
      Object.keys(res.headers).forEach((key) => {
        if (key.indexOf('Access-Control') === 0) {
          res.removeHeader(key)
        }
      })

      res.set('Access-Control-Allow-Origin', '*')
      res.set('Access-Control-Request-Method', req.method.toUpperCase())
      res.set('Access-Control-Expose-Headers', 'x-set-cookie, content-type')
      res.set('Access-Control-Allow-Headers', 'x-cookie, content-length, content-type')
      next()
    })

  return app
}
