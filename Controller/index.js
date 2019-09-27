exports.send = function (code, data, res) {

    if (code) {
        res.status(code).send(data);
    } else {
        res.send(data)
    }
};

