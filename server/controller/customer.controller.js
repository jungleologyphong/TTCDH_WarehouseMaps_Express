const Customer = require("../models/Customer");

exports.create = async (req, res) => {
    const { ID_Customer, nameCustomer, represent, leasedArea, leasedLot, totalRevenue, numberOfProduct,
        contractTerm, paymentSchedule, breachOfContract, companyUnit, colorLot, UserID } = req.body;

    if (!ID_Customer || !nameCustomer || !represent || !leasedArea || !leasedLot || !totalRevenue || !numberOfProduct ||
        !contractTerm || !paymentSchedule || !breachOfContract || !companyUnit) {
        return res.status(404).json({ Message_API_CreateCustomer: "ERROR_MISSING_PARAMS" });
    }

    pointRevenue(totalRevenue);
    pointNumberOfProduct(numberOfProduct);
    pointContractTerm(contractTerm);
    pointPaymentSchedule(paymentSchedule);
    pointBreachContract(breachOfContract);
    typeCustomer(pointRevenue, pointPaymentSchedule, pointContractTerm, pointBreachContract, pointNumberOfProduct);

    const customer = new Customer({

    })
}

const pointRevenue = (totalRevenue) => {
    //Point Revenue
    if ((totalRevenue >= 150000000) && (totalRevenue < 500000000)) {
        return pointRevenue = 20;
    } else if ((totalRevenue >= 500000000) && (totalRevenue < 2000000000)) {
        return pointRevenue = 35;
    } else {
        return pointRevenue = 50;
    }
}

const pointNumberOfProduct = (numberOfProduct) => {
    //Point Number Of Product
    if (numberOfProduct <= 2) {
        return pointNumberOfProduct = 10;
    } else {
        return pointNumberOfProduct = 20;
    }
}

const pointContractTerm = (contractTerm) => {
    //Point Contract Term
    if (contractTerm < 1) {
        return pointContractTerm = 0;
    } else if (contractTerm >= 1 && contractTerm < 3) {
        return pointContractTerm = 5;
    } else {
        return pointContractTerm = 10;
    }
}

const pointPaymentSchedule = (paymentSchedule) => {
    //Point Payment Schedule
    if (paymentSchedule === true) {
        return pointPaymentSchedule = 0;
    } else {
        return pointPaymentSchedule = 10;
    }
}

const pointBreachContract = (breachOfContract) => {
    //Point BreachOfContract
    if (breachOfContract === true) {
        return pointBreachContract = 0;
    } else {
        return pointBreachContract = 10;
    }
}
//Type Customer: Silver, Gold, Diamond
const typeCustomer = (pointRevenue, pointPaymentSchedule, pointContractTerm, pointBreachContract, pointNumberOfProduct) => {
    //Type Customer
    var totalPoint = pointRevenue + pointPaymentSchedule + pointContractTerm + pointBreachContract + pointNumberOfProduct;
    if ((totalPoint >= 60 && totalPoint < 79)) {
        return typeCustomer = "Bạc";
    } else if (totalPoint >= 80 && totalPoint < 99) {
        return typeCustomer = "Vàng";
    } else {
        return typeCustomer = "Kim Cương";
    }
}