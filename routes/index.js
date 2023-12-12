import express from "express";
import localDataRoutes from "./localData.js";
import mongoRoutes from "./mongoData.js";
const router = express.Router();

router.use("/local", localDataRoutes);
router.use("/mongo", mongoRoutes);

export default router;
