import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Certificate ID is required" });
  }

  try {
    // Authenticate with Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1IIzkHVOjmVtnFvf288MSAeVhfvwsCstbWzKTeqze47o"; // From .env
    const range = "Certificate!A:D"; // Your sheet tab and range

    // Fetch data from Google Sheets
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    console.log(response);

    const rows = response.data.values || [];

    if (rows.length === 0) {
      return res.status(404).json({ error: "No data found in sheet" });
    }

    const headers = rows[0]; // First row is the header: ["Certificate ID", "Name", "Domain", "Duration"]

    // Debug: Uncomment to see what IDs the sheet actually contains
    console.log("All IDs in sheet:", rows.slice(1).map(r => r[0]));

    // Skip the header row and search in column A (index 0)
    const match = rows
      .slice(1)
      .find(
        (row) =>
          String(row[0]).trim().toLowerCase() === String(id).trim().toLowerCase()
      );

    if (!match) {
      return res.status(404).json({ error: "Certificate not found" });
    }


    const result = headers.reduce((obj: any, header: string, index: number) => {
      obj[header] = match[index] || "";
      return obj;
    }, {});

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching certificate:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
