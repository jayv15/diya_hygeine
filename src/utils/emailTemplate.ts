export const generateEmailTemplate = (
  name: string,
  email: string,
  contactNumber: string,
  message: string
) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333333;
          margin: 0;
          padding: 0;
          background-color: #f6f6f7;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(90deg, #8B5CF6 0%, #D946EF 100%);
          padding: 30px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .header h1 {
          color: white;
          margin: 0;
          font-size: 24px;
        }
        .content {
          background-color: white;
          padding: 30px;
          border-radius: 0 0 8px 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .field {
          margin-bottom: 20px;
        }
        .field-label {
          font-weight: bold;
          color: #8B5CF6;
          margin-bottom: 5px;
          display: block;
        }
        .field-value {
          padding: 10px;
          background-color: #F1F0FB;
          border-radius: 4px;
          border-left: 3px solid #8B5CF6;
        }
        .message-value {
          white-space: pre-wrap;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          font-size: 12px;
          color: #888888;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <span class="field-label">Name:</span>
            <div class="field-value">${name}</div>
          </div>
          <div class="field">
            <span class="field-label">Email:</span>
            <div class="field-value">${email}</div>
          </div>
          <div class="field">
            <span class="field-label">Contact Number:</span>
            <div class="field-value">${contactNumber || "Not provided"}</div>
          </div>
          <div class="field">
            <span class="field-label">Message:</span>
            <div class="field-value message-value">${message}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the website contact form.</p>
          <p>&copy; ${new Date().getFullYear()} Diya Hyiegene Flours Pvt. Ltd., All rights reserved.</p>
          <div style="font-family: Arial, sans-serif;">
  Designed and developed by ReD<span style="display: inline-block; width: 12px; height: 12px; background-color: #dc2626; border-radius: 9999px; vertical-align: middle; margin-bottom: 2px;"></span>t Solution.
</div>

        </div>
      </div>
    </body>
    </html>
  `;
};
