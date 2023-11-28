require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const CryptoJs = require("crypto-js");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI);

const identityCheckSchema = new mongoose.Schema({
	userId: String,
	email: String,
	status: String
});
const IdentityCheck = mongoose.model("IdentityCheck", identityCheckSchema);

app.use(express.json());

app.post("/identity-check", async (req, res) => {
	const input = {
		customer: { id: uuidv4(), email: req.body.email },
		webhook: "https://3cec-2804-7f0-3889-82e1-a523-989f-a565-be04.ngrok.io/webhook"
	};
	const response = await axios.post("https://oauth.sandbox.verifymycontent.com/api/v1/identity-verification", input, {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `hmac ${process.env.KEY}:${CryptoJs.HmacSHA256(JSON.stringify(input), process.env.SECRET).toString()}`
		}
	});

	const newRecord = new IdentityCheck({
		userId: response.data.id,
		email: req.body.email,
		status: "pending"
	});
	await newRecord.save();

	res.json({ verificationUrl: response.data.redirect_uri });
});

app.post("/webhook/", async (req, res) => {
	const { customer_id: userId, status } = req.body;

	await IdentityCheck.findOneAndUpdate(
		{ userId },
		{
			status
		}
	);

	res.sendStatus(200);
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
