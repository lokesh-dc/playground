const connection = require("../../../../config");

export default async function handler(req, res) {
	if (req.method === "POST") {
		if (typeof req.body !== "string") req.body = JSON.stringify(req.body);
		const { slug } = JSON.parse(req.body);
		connection.query(
			`call new_dev_db.GetDoctorIdBySlug_v1_BE("${slug}")`,
			function (err, results, fields) {
				if (
					err == null &&
					results &&
					results[0].length !== 0 &&
					results[0][0].DoctorId
				) {
					connection.query(
						`SELECT * FROM v1_doctormaster where DoctorId=${results[0][0].DoctorId};`,
						function (err, results, fields) {
							if (!err)
								return res
									.status(200)
									.send({ notFound: false, results: results });
							return res.send({ notFound: true, error: err, type: "Query" });
						}
					);
				} else {
					return res
						.status(404)
						.send({ notFound: true, error: err, type: "Sp" });
				}
			}
		);
	} else {
		res.status(404).send("Endpoint not found");
	}
}
