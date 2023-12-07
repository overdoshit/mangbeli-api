/* eslint-disable new-cap */
import express from "express";
import {myProfile, getVendor, patchVendor} from "../controller/vendor.js";
import {verifyToken} from "../middleware/verify.js";

const router = express.Router();

router.get("/profile", verifyToken, myProfile);
router.get("/", verifyToken, getVendor);
router.patch("/", verifyToken, patchVendor);
router.all("/", (req, res) => {
    res.status(405).json({
        error: true,
        message: "Method not allowed",
    });
});

export default router;
