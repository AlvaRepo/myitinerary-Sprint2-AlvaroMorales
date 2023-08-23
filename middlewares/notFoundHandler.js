export default function(req, res, next) {
    return res.status(404)
    .json({
    success: false,
    message: 'error 404: not found - misswritten or missrouted ' + req.method + ' ' + req.url,
    response: null
    })
}