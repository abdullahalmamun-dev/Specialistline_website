"use server";

import { promises as fs } from "node:fs";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export async function submitInquiry(prevState: any, formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const goals = formData.get("goals") as string;
    const smsConsent = formData.get("smsConsent") === "on";

    // Validate minimum required fields
    if (!firstName || !lastName || !email || !company) {
      return { success: false, error: "Please fill out all required fields." };
    }

    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

    const page = pdfDoc.addPage([595, 842]); // A4 Size
    const { width, height } = page.getSize();
    let y = height - 50;

    // Helper to draw text
    const drawText = (text: string, size = 12, font = timesRomanFont) => {
      page.drawText(text, { x: 50, y, size, font, color: rgb(0, 0, 0) });
      y -= size + 10;
    };

    drawText("Peachtree Capital Group - Financing Inquiry", 18, timesRomanBold);
    y -= 10;
    drawText(`Date: ${new Date().toLocaleString()}`, 12);
    y -= 20;

    drawText("Customer Information", 14, timesRomanBold);
    drawText(`First Name: ${firstName}`);
    drawText(`Last Name: ${lastName}`);
    drawText(`Email: ${email}`);
    drawText(`Phone: ${phone}`);
    drawText(`Company: ${company}`);
    y -= 10;

    drawText("Inquiry Details", 14, timesRomanBold);
    // Handle multi-line goals simply
    const maxChars = 80;
    const goalLines = goals ? goals.match(new RegExp(`.{1,${maxChars}}`, 'g')) || [] : ["N/A"];
    for (const line of goalLines) {
      drawText(line);
    }
    y -= 10;

    drawText("Consents", 14, timesRomanBold);
    drawText(`SMS Consent: ${smsConsent ? "Granted" : "Not Granted"}`);

    const pdfBytes = await pdfDoc.save();

    // Ensure directory exists
    const inquiriesDir = path.join(process.cwd(), "inquiries");
    await fs.mkdir(inquiriesDir, { recursive: true });

    // Save to file
    const timestamp = Date.now();
    const safeName = `${firstName}-${lastName}`.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const filePath = path.join(inquiriesDir, `inquiry-${safeName}-${timestamp}.pdf`);
    
    await fs.writeFile(filePath, pdfBytes);

    return { success: true, message: "Inquiry submitted successfully!" };
  } catch (error) {
    console.error("Error generating or saving inquiry PDF:", error);
    return { success: false, error: "An error occurred while processing your inquiry." };
  }
}
