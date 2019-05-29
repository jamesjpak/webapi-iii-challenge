const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

// function validateUser(req, res, next) {
//     if (req.body && req.body.name) {
//         next();
//     } else {
//       res.status(400).json({ message: "Not a valid user!"})
//     }
//   }

function validatePost(req, res, next) {

};

module.exports = router;
