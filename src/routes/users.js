const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    const data = [{id: 0, name: "Salim"}, {id: 1, name: "Hassan"}, {id: 2, name: "Adam"}]
    res.status(200).json({
        status: 'success',
        data: data
    })
})

router.post('/', (req, res) => {

})
module.exports = router;