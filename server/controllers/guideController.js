import { guides } from '../data/guides.js';

export const getAllGuides = (req, res) => {
    res.json(guides);
};

export const getGuideById = (req, res) => {
    const id = parseInt(req.params.id);
    const guide = guides.find(g => g.id === id);

    if (!guide) {
        return res.status(404).json({ message: 'Guide not found' });
    }

    res.json(guide);
};
