const mongoose = require('mongoose');

const Customer = new mongoose.Schema({
    ID_Customer: {
        type: String,
        require: true,
    },
    nameCustomer: {
        type: String,
        require: true,
    },
    represent: {
        type: String,
        require: true,
    },
    leasedArea: {
        type: String,
        require: true,
    },
    leasedLot: {
        type: String,
        require: true,
    },
    totalRevenue: {
        type: Number,
        required: true,
    },
    pointRevenue: {
        type: Number,
        require: true,
    },
    numberOfProduct: {
        type: Number,
        require: true,
    },
    pointRevenue: {
        type: Number,
        require: true,
    },
    contractTerm: {
        type: String,
        require: true,
    },
    pointContractTerm: {
        type: Number,
        require: true,
    },
    paymentSchedule: {
        type: Boolean,
        require: true,
    },
    pointPaymentSchedule: {
        type: Number,
        require: true,
    },
    breachOfContract: {
        type: Boolean,
        require: true,
    },
    pointBreachContract: {
        type: Boolean,
        require: true
    },
    companyUnit: {
        type: String,
        require: true,
    },
    typeCustomer: {
        type: String,
        require: true,
    },
    typeColorLot: {
        type: String,
        require: true,
    },
    UserID: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model("Customer", Customer);