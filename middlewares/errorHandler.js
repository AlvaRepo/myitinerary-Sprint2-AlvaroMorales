export default function(err, req, res, next) {
    console.log(err);
    return res.status(500).json({
        succes: false,
        message: err.message,
        return: err
    })
}