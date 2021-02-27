const db = require('../models');

const index = async (req, res) => {
    try {
        const colors = await db.color.findAll({
            attributes: ['id', 'color_name', 'hex_value'],
            limit: 100,
        });
        res.json({ colors: colors });
    } catch (err) {
        console.error('Error with colors#index', err);
    }
};

const show = async (req, res) => {
    try {
        const color = await db.color.findOne({
            attributes: ['color_name', 'hex_value'],
            where: {
                id: req.params.id,
            },
        });
        if (!color) return res.json({ message: 'No color matching your selection.' });
        res.json({ color: color });
    } catch (err) {
        console.error('Provided ID Not Found!', err);
    }
};

module.exports = {
    index,
    show,
};