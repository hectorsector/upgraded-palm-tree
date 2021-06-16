const core = require("@actions/core");

const gradeLearner = require("./lib/gradeLearner");

async function run() {
  try {
    const results = gradeLearner();
    if (results === "Not Applicable") {
      throw results;
    }
    core.setOutput("reports", results);
  } catch (error) {
    core.setFailed(error);
  }
}
run();
