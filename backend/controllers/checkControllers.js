const asyncHandler = require("express-async-handler");
const Monitor = require("../models/monitorModel");
const testUrl = require("../utils/testUrl");

const availabilityCheck = asyncHandler(async (req, res) => {
  //Querying
  const monitors = await Monitor.find({ active: true })
    .select("url alertEmails  userId")
    .populate({ path: "user", select: "firstName" });

  for (const monitor of monitors) {
    await testUrl(monitor);
  }

  res.send(<div>hello</div>);
});

module.exports = { availabilityCheck };
