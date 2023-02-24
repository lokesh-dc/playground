const connection = require("../../../../config");

export default async function handler(req, res) {
	if (req.method === "POST") {
		// req.body = JSON.stringify(req.body);
		const { slug } = JSON.parse(req.body);
		connection.query(
			`call GetDoctorIdBySlug_v1_BE("${slug}");`,
			function (err, results, fields) {
				if ( !err && results && results[0].length !== 0 && results[0][0].DoctorId) {
					connection.query(
						`SELECT * FROM v1_doctormaster where DoctorId=${results[0][0].DoctorId};`,
						function (err, results, fields) {
							if (!err)
								return res.status(200).send({ results: results });
							return res.send({ notFound: true, error: err });
						}
					);
				} else {
					return res.status(404).send({ notFound: true, error: err });
				}
			}
		);
	} else {
		res.status(404).send("Endpoint not found");
	}
}
