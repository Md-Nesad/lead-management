const Lead = require("../models/lead");
const addDays = require("../utils/addDays");

/* Create Lead */

exports.createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);

    res.json(lead);
  } catch (err) {
    res.status(500).json(err);
  }
};

/* Get Leads */

exports.getLeads = async (req, res) => {
  const leads = await Lead.find().sort({
    createdAt: -1,
  });

  res.json(leads);
};

/* Mark Contacted */

exports.markContacted = async (req, res) => {
  const today = new Date();

  const firstFollowUp = addDays(today, 3);

  const lead = await Lead.findByIdAndUpdate(
    req.params.id,

    {
      status: "Contacted",

      followUpStage: "first",

      lastContactDate: today,

      followUpDate: firstFollowUp,
    },

    { new: true },
  );

  res.json(lead);
};

/* First Follow-up */

exports.firstFollowUp = async (req, res) => {
  const today = new Date();

  const nextDate = addDays(today, 5);

  const lead = await Lead.findByIdAndUpdate(
    req.params.id,

    {
      status: "First Follow-up",

      followUpStage: "second",

      lastContactDate: today,

      followUpDate: nextDate,
    },

    { new: true },
  );

  res.json(lead);
};

/* Second Follow-up */

exports.secondFollowUp = async (req, res) => {
  const today = new Date();

  const nextDate = addDays(today, 7);

  const lead = await Lead.findByIdAndUpdate(
    req.params.id,

    {
      status: "Second Follow-up",

      followUpStage: "final",

      lastContactDate: today,

      followUpDate: nextDate,
    },

    { new: true },
  );

  res.json(lead);
};

/* Final Close */

exports.finalFollowUp = async (req, res) => {
  const lead = await Lead.findByIdAndUpdate(
    req.params.id,

    {
      status: "Closed",

      followUpStage: "none",

      followUpDate: null,
    },

    { new: true },
  );

  res.json(lead);
};

exports.getLeadStats = async (req, res) => {
  try {
    const total = await Lead.countDocuments();

    const newLeads = await Lead.countDocuments({
      status: "New",
    });

    const contacted = await Lead.countDocuments({
      status: "Contacted",
    });

    const closed = await Lead.countDocuments({
      status: "Closed",
    });

    res.json({
      total,
      newLeads,
      contacted,
      closed,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching stats",
    });
  }
};

exports.deleteLead = async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);

    res.json({
      message: "Lead deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Delete failed",
    });
  }
};
