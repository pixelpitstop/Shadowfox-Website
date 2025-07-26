import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const auth = new google.auth.JWT(
    process.env.GOOGLE_SHEET_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_SHEET_PRIVATE_KEY.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  const sheets = google.sheets({ version: 'v4', auth });

  try {
    const {
      fullName,
      email,
      phone,
      school,
      yearOfStudy,
      address,
      fieldOfStudy,
      experience,
      cgpa,
      linkedin,
      howHeard,
      duration,
      startDate,
      firstInternship,
      goals,
      skills,
      teamwork,
      interests,
      strengths,
      unpaidReason,
      agreeTerms,
    } = req.body;

    const row = [
      fullName,
      email,
      phone,
      school,
      yearOfStudy,
      address,
      fieldOfStudy,
      experience,
      cgpa,
      linkedin,
      howHeard,
      duration,
      startDate,
      firstInternship,
      goals,
      skills,
      teamwork,
      interests.join(", "), // convert array to string
      strengths,
      unpaidReason,
      agreeTerms ? "Yes" : "No"
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Bootcamps!A1', // or your correct tab name
      valueInputOption: 'RAW',
      requestBody: {
        values: [row],
      },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error writing to Google Sheet:', error);
    res.status(500).json({ error: 'Failed to write to sheet' });
  }
}
