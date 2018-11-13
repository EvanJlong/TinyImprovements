const User = require('../models/User');
const Kudo = require('../models/Kudos');

module.exports = function (app) {
    app.get('/api/user/:id', function (req, res) {
        User.find({ _id: req.params.id })
            // .populate('notes')
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
}















// module.exports = function (app) {

//     app.post('/api/session', function (req, res) {
//       User.find(req.body)
//       .then(function (data) {
//         res.json(data);
//       })
//       .catch(function (err) {
//         res.json(err);
//       });
//     });

//     app.get('/api/user/:id', function (req, res) {
//       User.find({_id: req.params.id})
//       .populate('notes')
//       .then(function (data) {
//         res.json(data);
//       })
//       .catch(function (err) {
//         res.json(err);
//       });
//     });

//     app.post('/api/user', function (req, res) {
//       User.create(req.body)
//       .then(function (data) {
//         res.json(data);
//       })
//       .catch(function (err) {
//         res.json(err);
//       });
//     });

//     app.post('/api/note', function (req, res) {
//       const userId = req.body.userId;
//       const newEntry = {
//         body: req.body.body
//       }

//       Note.create(newEntry)
//         .then(function (noteData) {
//         return User.findOneAndUpdate({_id: userId}, { $push: { notes: noteData._id } }, { new: true });
//       })
//       .then(function(userData) {
//         res.json(userData);
//       })
//       .catch(function (err) {
//         res.json(err);
//       });
//     });
//   }