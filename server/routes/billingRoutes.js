const keys = require('../../config/keys');
var stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 fopr 5 credits',
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();
  });
};
