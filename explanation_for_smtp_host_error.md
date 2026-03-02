**Error:** `getaddrinfo ENOTFOUND your_smtp_host`
**Reason:** This error indicates that your server cannot find the IP address for the hostname `your_smtp_host`. This means the `SMTP_HOST` variable in your `.env` file is still set to the placeholder value.

**Solution:**
1.  Open your `.env` file in the project root.
2.  Change the line `SMTP_HOST=your_smtp_host` to `SMTP_HOST=smtp.gmail.com`.
3.  Ensure all other `SMTP_USER`, `SMTP_PASS`, and `RECIPIENT_EMAIL` variables are correctly filled with your Gmail address, App Password, and the desired recipient email.
4.  **Restart your backend server.** (If you're using `npm run dev`, you'll need to stop and restart that command for the `.env` changes to take effect.)

Once you've made these changes and restarted your server, the `verifySmtpConnection()` function should log "SMTP connection verified successfully" on startup, and emails should start sending.