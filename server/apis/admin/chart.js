import { google } from "googleapis"

async function getSheetRowCount(sheetName: string) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  })

  const sheets = google.sheets({ version: "v4", auth })

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `${sheetName}!A2:Z`, // Skip header
  })

  const data = res.data.values || []
  return data.length
}

export default async function handler(req, res) {
  try {
    const internshipCount = await getSheetRowCount("Internship")
    const bootcampCount = await getSheetRowCount("BootCamp")

    res.status(200).json({
      Internship: internshipCount,
      Bootcamp: bootcampCount,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to fetch chart data" })
  }
}
