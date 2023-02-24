import main from "config";

export async function fetchDoctorDetails() {
	// const output = await main.execute(
	// 	`SELECT * FROM v1_doctormaster where DoctorId=9;`
	// );

	// console.log(output);

    console.log("main => ",main)
}

// et output = await connection.execute(
// 	`call new_dev_db.GetDoctorIdBySlug_v1_BE("${id}")`,
// 	function (err, results, fields) {
// 		if (
// 			err == null &&
// 			results &&
// 			results[0].length !== 0 &&
// 			results[0][0].DoctorId
// 		) {
// 			return connection.query(
// 				`SELECT * FROM v1_doctormaster where DoctorId=${results[0][0].DoctorId};`,
// 				function (err, results, fields) {
// 					if (!err)
// 						// return res
// 						// 	.status(200)
// 						// 	.send({ notFound: false, results: results });
// 						// output = results;
// 						return results;
// 					console.log(err);
// 					// return res.send({ notFound: true, error: err, type: "Query" });
// 				}
// 			);
// 		} else {
// 			console.log(err);
// 		}
// 	}
// );
