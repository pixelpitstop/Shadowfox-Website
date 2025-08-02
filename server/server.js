import express from "express";
import cors from "cors";
import submitInternshipRouter from "./routes/InternshipSheets.js";
import submitBootcampRouter from "./routes/Bootcampsheets.js";
import CertificateVerify from "./routes/verification.js";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/submit-internship", submitInternshipRouter);
app.use("/api/submit-bootcamp", submitBootcampRouter);
app.use("/api/verify", CertificateVerify);

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
