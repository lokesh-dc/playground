const connection = require("../../../../config");

export default async function handler(req, res) {
	if (req.method === "GET") {        
		connection.query(
			`SELECT * FROM new_dev_db.v1_doctormaster docm LEFT JOIN slugmaster_doctor slugdoc ON docm.RouteId = slugdoc.RouteId LIMIT ${
				(req.query.limit || 10)
			} OFFSET ${(req.query.page || 0) * (req.query.limit || 1)}`,
			function (err, results, fields) {
				if (!err) return res.send({ results });
				res.send({notFound : true, error : err})
			}
		);
	} else {
		res.status(404).send("Endpoint not found");
	}
}
