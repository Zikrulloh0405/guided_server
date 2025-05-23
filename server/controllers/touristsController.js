import { tourists } from '../data/tourists.js';

export const getAllTourists = (req, res) => {
    res.json(tourists);
};

export const getTouristById = (req, res) => {
    const id = parseInt(req.params.id);
    const tourist = tourists.find(t => t.id === id);

    if (!tourist) {
        return res.status(404).json({ message: 'Tourist not found' });
    }

    res.json(tourist);
};
