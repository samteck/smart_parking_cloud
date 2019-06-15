const Status = require('../models/status.model');

//Simple version, without validation or sanitation
// exports.saveSlots = function (req, res) {
//    res.send(req.body.occupiedSlot);
// };

var id

exports.saveSlots = function (req, res) {
    let status = new Status(
        {
            timeStamp: Date.now(),
            occupiedSlot: req.body.occupiedSlot,
            unoccupiedSlot: req.body.unoccupiedSlot
            
        }
    );
    //sam = req.body
    //res.send(sam)

    status.save(function (err,a) {
        if (err) {
            return next(err);
        }
        id = a._id
        console.log("ID of record inserted : " + a._id);
        res.send('Slots Details Successfully saved')
    })
};

exports.freeSlots = function (req, res) {
    Status.findById(id, function (err, status) {
        if (err) return next(err);
        res.send(status.unoccupiedSlot);
    })
};

exports.occupiedSlots = function (req, res) {
   Status.findById(id, function (err, status) {
        if (err) return next(err);
        res.send(status.occupiedSlot);
    })
};
