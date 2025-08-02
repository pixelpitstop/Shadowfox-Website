import express from "express";
import { google } from "googleapis";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Certificate ID is required" });
    }

    // Google Sheets Auth using local credentials file
    const auth = new google.auth.GoogleAuth({
      keyFile: "google-credentials.json",
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth: await auth.getClient() });

    const spreadsheetId = "1IIzkHVOjmVtnFvf288MSAeVhfvwsCstbWzKTeqze47o"; // Your spreadsheet ID

    // 🔹 Get spreadsheet metadata
    const meta = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    const availableTabs = meta.data.sheets.map((s) => s.properties.title);
    console.log("Available Tabs for Service Account:", availableTabs);

    // If Certificates tab doesn't exist, return an error early
    if (!availableTabs.includes("Certificates")) {
      return res.status(404).json({
        error: `"Certificates" tab not found. Available tabs: ${availableTabs.join(", ")}`,
      });
    }

    // Proceed to fetch data
    const range = "Certificates!A:D";
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values || [];

    if (rows.length === 0) {
      return res.status(404).json({ error: "No data found in sheet" });
    }

    const headers = rows[0];
    const match = rows
      .slice(1)
      .find((row) => String(row[0]).trim().toLowerCase() === String(id).trim().toLowerCase());

    if (!match) {
      return res.status(404).json({ error: "Certificate not found" });
    }

    const result = headers.reduce((obj, header, index) => {
      obj[header] = match[index] || "";
      return obj;
    }, {});

    res.status(200).json(result);

  } catch (error) {
    console.error("Google Sheets Error:", error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
});

export default router;
