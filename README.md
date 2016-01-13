#express validator

simple request validation middleware for express.

## install

```
npm i oolon-express-validator
```

## usage
Validates a request agains a given [json schema](http://json-schema.org/)
The root of the schema must be an object with at least one of the properties: `param`, `query` or `body`
```js
const express = require('express')
const http = require('http')
const validate = require('../')
const schema = {
  id : "all",
  type: "object",
  properties: {
    query: {
      type: "object",
      required : ["prop1", "prop2"],
      properties: {
        prop1: { "type": "string" },
        prop2: { "type": "string" }
      }
    }
  }

}

const app = express()

app.all('*', [validate(schema)], (req, res) => res.send('Hello World'))
app.use((err, req, res, next) => {
  console.log('ERR:', err.type);

  res.send('ERROR', err)
})
http
  .createServer(app)
  .listen(3000)
```
