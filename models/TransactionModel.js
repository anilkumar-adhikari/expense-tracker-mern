const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please enter name of the expense']
    },
    amount: {
        type: String,
        required: [true, 'Please enter positive or negative amount']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);