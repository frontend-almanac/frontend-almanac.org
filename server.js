const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.get('/', async (req, res) => {
      return app.render(req, res, '/', { query: req.query })
    })

    server.get('/about', (req, res) => {
      return app.render(req, res, '/about', { id: req.params.id })
    })
    
    server.get('/persons', (req, res) => {
      return app.render(req, res, '/persons', { id: req.params.id })
    })

    server.get('/persons/:name', (req, res) => {
      return app.render(req, res, '/persons', { name: req.params.name })
    })

    server.get('/event/:name', (req, res) => {
      return app.render(req, res, '/event', { name: req.params.name })
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
