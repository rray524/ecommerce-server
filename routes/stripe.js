const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = "sk_test_51HtIWYCoNre9C6cgiUe5CCPPMcXEsWdqB2Z2s5M2pXuTHHqouZFgBCGAFG3XpJB2S8t4Lalcs0vcOE3D7uklmbAb00HGUWhVGE";
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;