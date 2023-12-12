import express from "express";
import * as mongo from "../clients/mongoClient.js";
const router = express.Router();

//============================
// MONGO DATA ROUTES /mongo
//============================

router.get("/test", mongo.testMongoController);

export default router;
