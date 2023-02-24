const connection = require("../../../../config");
export default async function handler(req, res) {
	if (req.method === "GET") {
		connection.query(
			`SELECT * FROM v1_hospitalmaster hm left join slugmaster_hospital sh on hm.RouteId = sh.RouteId;`,
			function (err, results, fields) {
				if (!err) return res.send({ results });
				return res.send({ notFound: true });
			}
		);
	} else {
		res.status(404).send("Endpoint not found");
	}
}
