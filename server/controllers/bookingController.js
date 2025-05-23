import { bookings } from '../data/bookings.js';

export const getAllBookings = (req, res) => {
    res.json(bookings);
};

export const getBookingById = (req, res) => {
    const id = parseInt(req.params.id);
    const booking = bookings.find(b => b.id === id);

    if (!booking) {
        return res.status(404).json({ message: 'Booking not found' });
    }

    res.json(booking);
};
