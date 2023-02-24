const connection = require("../../../../config");

export default async function handler(req, res) {

    if (req.method === "POST") {
		const { slug } = req.body;

	    connection.query(
				`call new_dev_db.GetHospitalIdFromSlug("${slug}");`,
				function (err, results, fields) {
                    if (results && results[0].length!==0 && results[0][0].Id) {
						connection.query(
							`SELECT * FROM new_dev_db.v1_hospitalmaster where HospitalId=${results[0][0].Id};`,
							function (err, results, fields) {
								if (!err) return res.status(200).send({ results });
								return results;
							}
						);
					} else {
						return res.status(404).send ({notFound : true});
					}
				}
			);
	} else {
		res.status(404).send("Endpoint not found")
	}
}

