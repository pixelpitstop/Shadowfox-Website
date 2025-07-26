import express from "express";
import { google } from "googleapis";

const router = express.Router();
const timestamp= new Date().toLocaleDateString("en-IN",{timeZone:"Asia/Kolkata"})

router.post("/", async (req, res) => {
  try {
    const { 
    timestamp,
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
    agreeTerms
     } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ error: "Full Name and Email are required" });
    }

    const auth = new google.auth.GoogleAuth({
      keyFile: "google-credentials.json",
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth: await auth.getClient() });

    const spreadsheetId = "1IIzkHVOjmVtnFvf288MSAeVhfvwsCstbWzKTeqze47o"; // ✅ Replace this
    const range = "Internship!A:T";

    const formattedInterests = Array.isArray(interests) ? interests.join(", ") : "";

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values:[[timestamp,
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
    formattedInterests,
    strengths,
    unpaidReason,
    agreeTerms]],
      },
    });

    res.status(200).json({ message: "Success", response: response.data });

  } catch (error) {
    console.error("Google Sheets Error:", error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
});

export default router;
