import { google } from 'googleapis'
import dayjs from 'dayjs' // optional, makes date math cleaner

export async function GET() {
  const auth = new google.auth.GoogleAuth({
    // your scopes and credentials
  })
  const sheets = google.sheets({ version: 'v4', auth })

  const sheetId = process.env.SHEET_ID
  const tabName = 'BootCamp' // or 'Internships'

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${tabName}!A2:H`, // Adjust range based on columns
  })

  const rows = res.data.values || []

  const now = new Date()
  const currentMonth = now.getMonth()
  const currentYear = now.getFullYear()

  const thisMonthData = rows.filter(row => {
    const timestamp = new Date(row[0]) // timestamp is column A
    return (
      timestamp.getMonth() === currentMonth &&
      timestamp.getFullYear() === currentYear
    )
  })

  return Response.json({
    count: thisMonthData.length,
    byProgram: Object.groupBy(thisMonthData, row => row[3]) // assuming Program is column D (index 3)
  })
}
