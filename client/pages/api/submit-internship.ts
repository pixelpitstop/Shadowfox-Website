import type { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' })
  }

  try {
    const {
      fullName, email, phone, school, yearOfStudy, address,
      fieldOfStudy, experience, cgpa, linkedin, howHeard,
      duration, startDate, firstInternship, goals,
      skills, teamwork, interests, strengths, unpaidReason,
      agreeTerms
    } = req.body;

    // Initialize Google Spreadsheet
    const doc = new GoogleSpreadsheet('19Uy3fMMVMDiO5rK8EN6okp-SCLQcB-Sj-ITOhGnjPcs');
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_CLIENT_EMAIL!,
      private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
    });

    await doc.loadInfo();

    const sheet = doc.sheetsByTitle["InternshipForm"]; // Use the actual tab name
    await sheet.addRow({
      fullName, email, phone, school, yearOfStudy, address,
      fieldOfStudy, experience, cgpa, linkedin, howHeard,
      duration, startDate, firstInternship, goals,
      skills, teamwork, interests: interests.join(", "), strengths, unpaidReason,
      agreeTerms: agreeTerms ? "Yes" : "No"
    });

    return res.status(200).json({ message: 'Form submitted successfully!' });

  } catch (error: any) {
    console.error('API Error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}
