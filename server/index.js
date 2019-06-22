const express = require('express')
const logger = require('./logger')
const resolve = require('path').resolve

const app = express()

const port = process.env.PORT || 3001
const publicPath = '/'
const outputPath = resolve(process.cwd(), 'public')

// compression middleware compresses your server responses which makes them
// smaller (applies also to assets). You can read more about that technique
// and other good practices on official Express.js docs http://mxs.is/googmy
// app.use(compression())
app.use(publicPath, express.static(outputPath))

app.get('*', (req, res) => res.sendFile(resolve(outputPath, 'index.html')))

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = process.env.HOST
const host = customHost || null // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost'

// Start your app.
app.listen(port, host, (err) => {
    if (err) {
        return logger.error(err.message)
    }

    logger.appStarted(port, prettyHost)
})
