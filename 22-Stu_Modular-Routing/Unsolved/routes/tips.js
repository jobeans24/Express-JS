const tips = require('express').Router();
// TODO: Import helper functions and dependencies
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// TODO: GET Route for retrieving all the tips
tips.get('/', (req, res) => {
    readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
    });
// TODO: POST Route for a new UX/UI tip
 tips.post('/', (req, res) => {
    console.log(req.body);
    const { username, topic, tip } = req.body;
    if (username && topic && tip) {
      const newTip = {
        username,
        topic,
        tip,
      };
      readAndAppend(newTip, './db/tips.json');
      res.json('Tip added');
    } else {
      res.error('Error in adding tip');
    }
  }
);
   
module.exports = tips;
