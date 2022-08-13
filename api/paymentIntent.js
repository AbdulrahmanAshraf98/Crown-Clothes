require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
module.exports = async (req, res) => {
	try {
		const amount = JSON.parse(req.body.amount);
		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency: "usd",
			payment_method_types: ["card"],
		});
		res.writeHead(200, { "Content-Type": "application/json" });
		res.write(JSON.stringify({ paymentIntent }));
		res.end();
	} catch (err) {
		console.error({ err });
		res.status(400).json({
			status: 400,
			message: err.message,
		});
	}
};
