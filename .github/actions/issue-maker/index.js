const core = require("@actions/core");
const github = require("@actions/github");


async function run() {
    try{
        const issueTitle = core.getInput("issue-title");
        const jokeBody = core.getInput("joke");
        const token = core.getInput("repo-token");

        const octokit = github.getOctokit(token);
    }
    catch (err){
        core.setFailed(err.message);
    }
}

run()