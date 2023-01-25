const express = require('express')
const path = require("path");
const app = express()

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(express.static('build', options))

app.route("/resume")
.get((req,res) => {
  console.log(`\n\n\npath ${__dirname + "\\public\\html\\" }\n\n\n`)
  res.sendFile("index.html", { root: __dirname + "\\public\\html\\" });
})

app.route("/")
.get((req,res) => {
  // res.sendFile("index.html", { root: __dirname + "\\public\\html\\" });
  res.send("under Construction. Currently unavailable 😭");
})
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`)
})