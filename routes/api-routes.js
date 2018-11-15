const User = require('../models/User');
const Kudo = require('../models/Kudos');

// const db = require('../models');

module.exports = function (app) {

    app.get('/api/user', function (req, res) {
        User.find({})
            .populate('kudos')
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.get('/api/kudos', function (req, res) {
        Kudo.find(req.body)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
    //kudos update route
    app.put('/api/kudos/:id', function (req, res) {
        Kudo.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //kudos delete route
    app.delete('/api/kudos/:id', function (req, res) {
        Kudos.findOneAndDelete({ _id: req.params.id })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });


}



    //user get route
//   app.get('/api/users', function (req, res) {
//         db.users.find({})
//     //     .populate('kudos')
//         .then(function (data) {
//           res.json(data);
//         })
//         .catch(function (err) {
//           res.json(err);
//         });
//       });


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