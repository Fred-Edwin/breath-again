# Email Service Integration Setup

This guide explains how to set up email functionality for the Breath-Again contact forms.

## Overview

The contact system includes three main forms:
1. **Contact Form** - Quick contact with basic information
2. **Project Inquiry Form** - Detailed 4-step questionnaire 
3. **Newsletter Signup** - Email subscription with preferences

## Quick Setup Options

### Option 1: Formspree (Recommended - Easiest)

1. **Create Account**
   - Go to [https://formspree.io/](https://formspree.io/)
   - Sign up for a free account (100 submissions/month)

2. **Create Forms**
   - Create 3 forms: "Contact", "Project Inquiry", "Newsletter"
   - Copy each form endpoint URL

3. **Add Environment Variables**
   ```bash
   # Add to .env.local
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-contact-form-id
   NEXT_PUBLIC_PROJECT_INQUIRY_ENDPOINT=https://formspree.io/f/your-inquiry-form-id  
   NEXT_PUBLIC_NEWSLETTER_ENDPOINT=https://formspree.io/f/your-newsletter-form-id
   ```

4. **Enable EmailService**
   - Uncomment the EmailService lines in the components:
   ```typescript
   // In ContactForm.tsx, ProjectInquiryForm.tsx, NewsletterSignup.tsx
   await EmailService.sendContactForm(data)
   ```

### Option 2: Netlify Forms

1. **Deploy to Netlify**
   - Connect your repository to Netlify
   - Deploy the site

2. **Add Environment Variable**
   ```bash
   NEXT_PUBLIC_NETLIFY_FORMS=true
   ```

3. **Add Hidden Form Fields**
   - Netlify automatically handles forms with `data-netlify="true"`
   - Forms are already configured in the components

### Option 3: Custom API Routes

1. **Create API Routes**
   ```typescript
   // pages/api/contact.ts or app/api/contact/route.ts
   export default async function handler(req, res) {
     // Handle form submission
     // Send email using nodemailer, sendgrid, etc.
   }
   ```

2. **Email Service Integration**
   - Choose: Nodemailer, SendGrid, Mailgun, AWS SES
   - Configure SMTP or API credentials
   - Create email templates

## Form Features

### Contact Form
- **Fields**: Name, Email, Phone, Project Type, Budget, Message
- **Validation**: Required fields, email format, phone format
- **Features**: Real-time validation, loading states, success messages

### Project Inquiry Form  
- **Multi-step**: 4-step wizard with progress indicator
- **Fields**: All contact fields plus space details, challenges, goals
- **Features**: Step navigation, comprehensive questionnaire, accessibility options

### Newsletter Signup
- **Variants**: Default, Compact, Sidebar styles
- **Fields**: Email, Name, Interest preferences
- **Features**: Interest checkboxes, responsive design

## Accessibility Features

All forms include:
- ✅ Proper ARIA labels and descriptions
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Focus management
- ✅ Error announcements
- ✅ High contrast support

## Mobile Optimization

- ✅ Touch-friendly form controls
- ✅ Responsive layouts
- ✅ Proper input types for mobile keyboards
- ✅ Optimized button sizes
- ✅ Swipe gestures where applicable

## Testing the Forms

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Visit Contact Page**
   - Go to http://localhost:3001/contact
   - Test both contact forms
   - Try the newsletter signup

3. **Check Console**
   - Form submissions are logged to console
   - Validation errors are displayed inline
   - Success/error states are animated

## Production Deployment

1. **Environment Variables**
   - Add your email service credentials to production environment
   - Ensure all NEXT_PUBLIC_ variables are set

2. **Email Templates**
   - Customize email templates in the EmailService
   - Add your branding and styling

3. **Analytics**
   - Track form submissions
   - Monitor success/failure rates
   - Set up notifications for new inquiries

## Troubleshooting

### Forms Not Submitting
- Check environment variables are set
- Verify EmailService is uncommented
- Check browser console for errors

### Validation Issues
- Ensure all required fields are filled
- Check email format is valid
- Verify phone number format

### Styling Issues
- Forms use Tailwind classes
- Ensure Tailwind CSS is properly loaded
- Check for conflicting styles

## Support

For setup assistance:
- Check the EmailService.ts file for detailed comments
- Review component code for integration examples
- Test with mock data first before connecting real email services

---

**Next Steps:**
1. Choose your email service provider
2. Set up environment variables
3. Test form submissions
4. Deploy to production
5. Monitor form analytics