const express = require("express");

const router = express.Router();

const controller = require("../controllers/leadControllers");

router.post("/create", controller.createLead);

router.get("/", controller.getLeads);

router.get("/stats", controller.getLeadStats);

router.put("/contacted/:id", controller.markContacted);

router.put("/first/:id", controller.firstFollowUp);

router.put("/second/:id", controller.secondFollowUp);

router.put("/final/:id", controller.finalFollowUp);

router.delete("/delete/:id", controller.deleteLead);

module.exports = router;
