import express from "express";
import * as local from "../clients/localDataClient.js";
const router = express.Router();

//============================
// LOCAL DATA ROUTES /local
//============================

router.get("/test", local.testGetController);
router.post("/test", local.testPostController);
router.put("/test", local.testPutController);
router.delete("/test", local.testDeleteController);

export default router;
