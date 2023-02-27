const connection = require("../../../../config");
export default async function handler(req, res) {
	if (req.method === "GET") {
		connection.query(
			`SELECT * FROM new_dev_db.v1_hospitalmaster hosm LEFT JOIN slugmaster_hospital slughosp ON hosm.RouteId = slughosp.RouteId LEFT JOIN citymaster cm ON cm.CityId = hosm.CityId`,
			function (err, results, fields) {
				if (!err) return res.send({ results });
				return res.send({ notFound: true });
			}
		);
	} else {
		res.status(404).send("Endpoint not found");
	}
}
