import { tours } from '../data/tours.js';

export const getAllTours = (req, res) => {
    res.json(tours);
};

export const getTourById = (req, res) => {
    const tour = tours.find(t => t.id === parseInt(req.params.id));
    tour ? res.json(tour) : res.status(404).json({ message: 'Tour not found' });
};
