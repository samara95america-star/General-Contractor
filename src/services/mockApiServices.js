// src/services/mockApiServices.js
// NOTE: This file contains mock API endpoints simulating asynchronous backend integration.
// Prior to launch, replace this file with real REST or GraphQL API calls to your server (Node.js, Express, PostgreSQL, MongoDB, CRM platforms, etc.).

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApiServices = {
  /**
   * Submits a detailed estimate request.
   * Prep for Node.js / Express / CRM integration.
   */
  async submitEstimateRequest(data) {
    console.log("[Mock API] Submitting Estimate Request:", data);
    await delay(1200); // Simulate network latency

    // Form validation checks
    if (!data.fullName || !data.email || !data.phone || !data.projectType) {
      throw new Error("Missing required fields. Please ensure Full Name, Email, Phone, and Project Type are provided.");
    }

    if (!data.email.includes("@")) {
      throw new Error("Invalid email format. Please enter a valid email address.");
    }

    return {
      success: true,
      message: "Estimate request submitted successfully! Your tracking code is SB-" + Math.floor(100000 + Math.random() * 900000),
      submittedAt: new Date().toISOString(),
      data
    };
  },

  /**
   * Submits a general contact form inquiry.
   * Prep for Email Notification service / HubSpot CRM.
   */
  async submitContactMessage(data) {
    console.log("[Mock API] Submitting Contact Message:", data);
    await delay(1000);

    if (!data.name || !data.email || !data.message) {
      throw new Error("Please complete all required fields (Name, Email, Message).");
    }

    if (!data.email.includes("@")) {
      throw new Error("Please enter a valid email address.");
    }

    return {
      success: true,
      message: "Your message has been received! A Summit Build representative will email or call you within 24 business hours.",
      submittedAt: new Date().toISOString()
    };
  },

  /**
   * Submits a job application form.
   * Prep for HR portal / AWS S3 Resume upload.
   */
  async submitJobApplication(data) {
    console.log("[Mock API] Submitting Job Application:", data);
    await delay(1500);

    if (!data.fullName || !data.email || !data.phone || !data.position) {
      throw new Error("Please fill in all primary fields (Full Name, Email, Phone, Position).");
    }

    return {
      success: true,
      message: "Your application for the " + data.position + " position has been successfully filed. Thank you for your interest in Summit Build Contractors!",
      submittedAt: new Date().toISOString()
    };
  },

  /**
   * Submits a customer review.
   * Prep for PostgreSQL / MongoDB database storage.
   */
  async submitReview(data) {
    console.log("[Mock API] Submitting Customer Review:", data);
    await delay(1000);

    if (!data.name || !data.projectType || !data.rating || !data.text) {
      throw new Error("All review fields are required to submit.");
    }

    return {
      success: true,
      message: "Thank you for sharing your experience! Your verified review has been submitted and is pending moderation.",
      submittedAt: new Date().toISOString(),
      review: {
        id: Math.floor(Math.random() * 100000),
        ...data,
        verified: true,
        completionDate: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })
      }
    };
  },

  /**
   * Submits a newsletter subscription request.
   * Prep for Mailchimp / Constant Contact / SendGrid.
   */
  async submitNewsletterSubscription(email) {
    console.log("[Mock API] Submitting Newsletter Subscription:", email);
    await delay(800);

    if (!email || !email.includes("@")) {
      throw new Error("Please enter a valid email address.");
    }

    return {
      success: true,
      message: "Success! You have been subscribed to Summit Build Contractors' quarterly newsletter.",
      submittedAt: new Date().toISOString()
    };
  }
};
