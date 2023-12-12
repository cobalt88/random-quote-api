import { assert } from "console";
import * as localData from "../data/quotes.json" assert { type: "json" };

const quotes = localData;

export const testGetController = async (req, res) => {
	try {
		res.status(200).json("GET data Test route successful");
	} catch (err) {
		res.status(500).json(`Error encountered in test route: ${err}`);
	}
};

export const testPostController = async (req, res) => {
	try {
		res.status(200).json("POST data Test route successful");
	} catch (err) {
		res.status(500).json(`Error encountered in test route: ${err}`);
	}
};

export const testPutController = async (req, res) => {
	try {
		res.status(200).json("PUT data Test route successful");
	} catch (err) {
		res.status(500).json(`Error encountered in test route: ${err}`);
	}
};

export const testDeleteController = async (req, res) => {
	try {
		res.status(200).json("DELETE data Test route successful");
	} catch (err) {
		res.status(500).json(`Error encountered in test route: ${err}`);
	}
};

export const getRandomQuoteController = async (req, res) => {
	try {
		const randomQuote = quotes.default[Math.floor(Math.random() * quotes.default.length)];
		let formattedQuote = {
			Quote: randomQuote.Quote,
			Author: randomQuote.Author,
		};
		res.status(200).json(formattedQuote);
	} catch (err) {
		res.status(500).json(`Error encountered in getRandomQuoteController route: ${err}`);
	}
};
