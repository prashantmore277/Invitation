/**
 * COPY AND PASTE THIS ENTIRE CODE INTO GOOGLE APPS SCRIPT
 *
 * 1. Create a new Google Sheet
 * 2. Name the first tab exactly: Sheet1
 * 3. In row 1, type the following exact column headers:
 *    A1: timestamp
 *    B1: name
 *    C1: message
 * 4. Go to Extensions -> Apps Script
 * 5. Paste this code
 * 6. Click Deploy -> New Deployment
 * 7. Choose type "Web App"
 * 8. Execute as: Me
 * 9. Who has access: Anyone
 * 10. Copy the Web App URL and paste it into siteConfig.js
 */

const SHEET_NAME = "Sheet1";

// Handle GET requests (Fetching messages for the Guestbook Wall)
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = sheet.getDataRange().getValues();

    // If sheet only has headers or is empty
    if (data.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify([]))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const headers = data[0];
    const rows = data.slice(1);

    const result = rows.map(row => {
      let obj = {};
      headers.forEach((header, i) => {
        obj[header] = row[i];
      });
      return obj;
    });

    // Return all rows as a JSON array
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle POST requests (Saving new RSVP messages to the Sheet)
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    // Parse incoming JSON body
    const postData = JSON.parse(e.postData.contents);
    const name = postData.name || "Anonymous";
    const message = postData.message || "";

    // Insert new row
    sheet.appendRow([
      new Date(), // timestamp
      name,       // name
      message     // message
    ]);

    return ContentService.createTextOutput(JSON.stringify({ "status": "success", "message": "Saved successfully!" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle OPTIONS for CORS
function doOptions(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
}
