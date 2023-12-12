export const testMongoController = async (req, res) => {
	try {
		res.status(200).json("Test route successful");
	} catch (err) {
		res.status(500).json(`Error encountered in test route: ${err}`);
	}
};
