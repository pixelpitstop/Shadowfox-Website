const { google } = require("googleapis");
const { readFileSync } = require("fs");
const path = require("path");

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(readFileSync(path.join(__dirname, "../service-account.json"))),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

module.exports = sheets;
