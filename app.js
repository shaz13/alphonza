const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Alphonza')
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Alphonza server listening on port %d in %s mode", this.address().port, app.settings.env);
});
