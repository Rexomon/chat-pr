const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/auth", async (req, res) => {
	const { username } = req.body;
	try {
		const r = await axios.put(
			"https://api.chatengine.io/users",
			{ username: username, secret: username, first_name: username },
			{ headers: { "private-key": "7957efdd-63a2-41e9-864a-f2bb23cb6cbb" } },
		);
		return res.status(r.status).json(r.data);
	} catch (error) {
		return res.json(error.response.status).json(error.response.data);
	}
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
