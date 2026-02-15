# 📧 EmailJS Setup Guide

This guide will walk you through setting up EmailJS for your portfolio contact form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's free!)
3. Complete the registration process
4. Verify your email address

## Step 2: Add an Email Service

1. After logging in, go to **Email Services** from the dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (Recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other supported service
4. Click **Connect Account**
5. Follow the authentication process for your chosen provider
6. Once connected, you'll see your **Service ID** (e.g., `service_abc1234`)
7. **Copy and save this Service ID** - you'll need it later!

### Gmail Setup Tips:
- Make sure to allow less secure apps or use App Passwords
- Go to Google Account Settings → Security
- Enable 2-Step Verification
- Generate an App Password for EmailJS

## Step 3: Create an Email Template

1. Go to **Email Templates** from the dashboard
2. Click **Create New Template**
3. Set up your template with these exact variable names:

### Template Configuration:

**Template Name:** Portfolio Contact Form

**Subject:** New Contact from {{from_name}} - {{subject}}

**Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #ef4444 0%, #6366f1 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #ef4444; }
    .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">From:</div>
        <div class="value">{{from_name}}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">{{from_email}}</div>
      </div>
      <div class="field">
        <div class="label">Subject:</div>
        <div class="value">{{subject}}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">{{message}}</div>
      </div>
    </div>
  </div>
</body>
</html>
```

**To Email:** your.email@example.com (Your actual email)

**From Name:** {{from_name}}

**Reply To:** {{from_email}}

4. Click **Save**
5. Note your **Template ID** (e.g., `template_xyz5678`)
6. **Copy and save this Template ID**!

### Required Template Variables:
Make sure these exact variable names are in your template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address  
- `{{subject}}` - Email subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (optional)
- `{{to_email}}` - Your email (optional)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** from the dashboard
2. Find the **Public Key** section
3. Copy your public key (e.g., `aBcDeFgHiJkLmNoPqR`)
4. **Save this Public Key**!

## Step 5: Update Your Portfolio Code

Open `src/components/Contact.jsx` and find these lines:

```javascript
// Replace these with your actual EmailJS credentials
const serviceId = 'YOUR_SERVICE_ID'
const templateId = 'YOUR_TEMPLATE_ID'
const publicKey = 'YOUR_PUBLIC_KEY'
```

Replace them with your actual values:

```javascript
const serviceId = 'service_abc1234'        // Your Service ID
const templateId = 'template_xyz5678'      // Your Template ID
const publicKey = 'aBcDeFgHiJkLmNoPqR'    // Your Public Key
```

## Step 6: Test Your Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email inbox for the test message

## Troubleshooting

### Issue: "Service Error" or 400 Bad Request

**Solution:**
- Double-check all IDs are correct
- Ensure Service ID, Template ID, and Public Key match exactly
- Remove any extra spaces when copying IDs

### Issue: Not Receiving Emails

**Solution:**
- Check your spam/junk folder
- Verify the "To Email" in your template is correct
- Check EmailJS dashboard for delivery logs
- Ensure your email service is properly connected

### Issue: "Template not found"

**Solution:**
- Confirm Template ID is correct
- Make sure the template is saved and not in draft mode
- Try recreating the template

### Issue: Variables Not Appearing

**Solution:**
- Ensure variable names match exactly: `{{from_name}}`, not `{{fromName}}`
- Use double curly braces: `{{variable}}` not `{variable}`
- Check template preview in EmailJS dashboard

## Free Tier Limits

EmailJS Free Plan includes:
- ✅ 200 emails per month
- ✅ 2 email templates
- ✅ 1 email service
- ✅ Basic support

For a personal portfolio, this is usually more than enough!

## Alternative: Environment Variables (Recommended)

For better security, use environment variables:

1. Create a `.env` file in your project root:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. Update Contact.jsx:
   ```javascript
   const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
   const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
   const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   ```

3. Add `.env` to your `.gitignore` (already included)

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)

## Support

If you encounter any issues:
- Check the [EmailJS FAQ](https://www.emailjs.com/docs/faq/)
- Contact EmailJS support through their dashboard
- Review your browser console for error messages

---

**✅ Once configured, your contact form will send emails directly to your inbox!**
