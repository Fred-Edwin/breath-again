import { ContactFormData, ProjectInquiryData, NewsletterData } from '@/types/contact'

// Environment configuration
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''
const NETLIFY_FORMS = process.env.NEXT_PUBLIC_NETLIFY_FORMS === 'true'

/**
 * Email service for handling form submissions
 * This service is configured to work with multiple providers:
 * 1. Formspree (recommended for easy setup)
 * 2. Netlify Forms (if hosting on Netlify)
 * 3. Custom API endpoint
 */

export class EmailService {
  /**
   * Send contact form submission
   */
  static async sendContactForm(data: ContactFormData): Promise<void> {
    if (FORMSPREE_ENDPOINT) {
      await this.sendToFormspree(FORMSPREE_ENDPOINT, data)
    } else if (NETLIFY_FORMS) {
      await this.sendToNetlify('contact', data)
    } else {
      await this.sendToCustomAPI('/api/contact', data)
    }
  }

  /**
   * Send detailed project inquiry
   */
  static async sendProjectInquiry(data: ProjectInquiryData): Promise<void> {
    const endpoint = process.env.NEXT_PUBLIC_PROJECT_INQUIRY_ENDPOINT || FORMSPREE_ENDPOINT
    
    if (endpoint) {
      await this.sendToFormspree(endpoint, data)
    } else if (NETLIFY_FORMS) {
      await this.sendToNetlify('project-inquiry', data)
    } else {
      await this.sendToCustomAPI('/api/project-inquiry', data)
    }
  }

  /**
   * Subscribe to newsletter
   */
  static async subscribeNewsletter(data: NewsletterData): Promise<void> {
    const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || FORMSPREE_ENDPOINT
    
    if (endpoint) {
      await this.sendToFormspree(endpoint, data)
    } else if (NETLIFY_FORMS) {
      await this.sendToNetlify('newsletter', data)
    } else {
      await this.sendToCustomAPI('/api/newsletter', data)
    }
  }

  /**
   * Send to Formspree
   * Setup: Create account at https://formspree.io/
   * Add your form endpoint to environment variables
   */
  private static async sendToFormspree(endpoint: string, data: any): Promise<void> {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || 'Failed to send message')
    }
  }

  /**
   * Send to Netlify Forms
   * Setup: Add data-netlify="true" to your form element
   * Netlify will automatically handle form submissions
   */
  private static async sendToNetlify(formName: string, data: any): Promise<void> {
    const formData = new FormData()
    formData.append('form-name', formName)
    
    Object.keys(data).forEach(key => {
      const value = data[key]
      if (Array.isArray(value)) {
        formData.append(key, value.join(', '))
      } else {
        formData.append(key, value.toString())
      }
    })

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }
  }

  /**
   * Send to custom API endpoint
   * Setup: Create API routes in your Next.js app
   */
  private static async sendToCustomAPI(endpoint: string, data: any): Promise<void> {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || 'Failed to send message')
    }
  }
}

/**
 * Example environment variables to add to your .env.local file:
 * 
 * # Formspree (recommended)
 * NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
 * NEXT_PUBLIC_PROJECT_INQUIRY_ENDPOINT=https://formspree.io/f/your-inquiry-form-id
 * NEXT_PUBLIC_NEWSLETTER_ENDPOINT=https://formspree.io/f/your-newsletter-form-id
 * 
 * # Netlify Forms
 * NEXT_PUBLIC_NETLIFY_FORMS=true
 * 
 * # Custom API (if you build your own endpoints)
 * NEXT_PUBLIC_API_BASE_URL=https://your-api-domain.com
 */

/**
 * Setup Instructions:
 * 
 * 1. FORMSPREE SETUP (Recommended - Easiest):
 *    - Go to https://formspree.io/
 *    - Create a free account
 *    - Create new forms for contact, project inquiry, and newsletter
 *    - Copy the form endpoints and add to your .env.local file
 * 
 * 2. NETLIFY FORMS SETUP:
 *    - Deploy to Netlify
 *    - Add data-netlify="true" to your HTML forms
 *    - Set NEXT_PUBLIC_NETLIFY_FORMS=true in environment
 * 
 * 3. CUSTOM API SETUP:
 *    - Create API routes in pages/api/ or app/api/
 *    - Implement email sending with nodemailer, sendgrid, etc.
 *    - Handle form validation and email templates
 */