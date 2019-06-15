const Status = require('../models/status.model');

//Simple version, without validation or sanitation
// exports.saveSlots = function (req, res) {
//    res.send(req.body.occupiedSlot);
// };

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

    status.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Slots Details Successfully saved')
    })
};
