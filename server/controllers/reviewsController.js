import { reviews } from '../data/reviews.js';

export const getAllReviews = (req, res) => {
    res.json(reviews);
};

export const getReviewById = (req, res) => {
    const id = parseInt(req.params.id);
    const review = reviews.find(r => r.id === id);

    if (!review) {
        return res.status(404).json({ message: 'Review not found' });
    }

    res.json(review);
};
