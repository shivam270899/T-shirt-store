const stripe  = require("stripe")("sk_test_51IgTCYSGBz8MfHu6LjJxF0RrQ3K23Llv92XmIIgC8ZiuURMqAgIuI5OdgIVKIoVCrIcFfhayCGPzwQSsV2x8K5rD00JWaOncZN");
const uuid = require("uuid/v4");

exports.makepayment = (req,res) => {
    const {products , token} = req.body

    let amount= 0;
        products.map(p => {
            amount= amount + p.price
        });

    const idempotencyKey = uuid()

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customers => {
        stripe.charges.create({
            amount: amount*100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            shipping: {
                name:token.card.name,
                address: {
                    line1:token.card.address_line1,
                    line2:token.card.address_line2,
                    city:token.card.address_city,
                    country:token.card.address_country,
                    postal_code:token.card.address_zip
                }
            }
        }, {idempotencyKey})
        .then(result => res.status(200).json(result))
        .catch(error => console.log(error));
    } );

};