<template>
  <main id="main-content">
  <div class="accessible-page">
        <!-- Skip navigation for keyboard users -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <section>
    <!-- Fixed heading hierarchy -->
    <h1>Accessible Page Example</h1>
    <h2>Welcome to the Accessible Version</h2>
    </section>
        <!-- Proper table structure for tabular data -->
    <section aria-labelledby="user-data-heading">
      <h3 id="user-data-heading">User Information</h3>
      <table>
        <caption>User demographic information</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>25</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>30</td>
            <td>London</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>35</td>
            <td>Paris</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Proper interactive elements with buttons -->
    <section aria-labelledby="actions-heading">
      <h3 id="actions-heading">Available Actions - Proper interactive elements with buttonss</h3>
      <div class="button-group">
        <button type="button" @click="handleClick" class="primary-button">
          Primary Action
        </button>
        <button type="button" @click="handleAction" class="secondary-button">
          Perform action
        </button>
        <!-- Properly hidden content for screen readers -->
        <span class="visually-hidden">Additional context for screen readers</span>
      </div>
    </section>

    <!-- Proper form structure with labels -->
    <section aria-labelledby="contact-form-heading">
      <h3 id="contact-form-heading">Contact Information -  Proper form structure with labels</h3>
      <div class="form-group">
        <label for="user-name">Full Name (Required)</label>
        <input type="text" id="user-name" required aria-describedby="name-help">
        <div id="name-help" class="help-text">Enter your first and last name</div>
      </div>

      <div class="form-group">
        <label for="user-email">Email Address (Required)</label>
        <input type="email" id="user-email" required aria-describedby="email-help1">
        <div id="email-help1" class="help-text">We'll use this to contact you</div>
      </div>
    </section>

    <!-- Proper navigation with contextual links -->
    <section aria-labelledby="resources-heading">
      <h3 id="resources-heading">Helpful Resources</h3>
      <ul>
        <li><a href="/services" aria-label="Learn more about our services">Our Services</a></li>
        <li><a href="/documents/user-guide.pdf" download aria-label="Download user guide PDF">User Guide (PDF, 2.3MB)</a></li>
        <li><a href="/accessibility" aria-label="Read our accessibility guidelines">Accessibility Guidelines</a></li>
        <li><a href="https://example.com" target="_blank" rel="noopener noreferrer" aria-label="Visit external website (opens in new tab)">External Resource</a></li>
      </ul>
    </section>

    <!-- ACCESSIBLE FORM ELEMENTS -->
    <h2>Accessible Form Example</h2>
    <!-- Form with proper labels and structure -->
    <form @submit.prevent="handleSubmit" novalidate>
      <fieldset>
        <legend>Personal Information</legend>

        <div class="form-group">
          <label for="firstName">First Name (Required)</label>
          <input type="text" id="firstName" v-model="form.firstName" required
                 :aria-describedby="errors.firstName ? 'firstName-error' : null"
                 :aria-invalid="errors.firstName ? 'true' : 'false'">
          <div id="firstName-error" class="error-message" v-if="errors.firstName">
            {{ errors.firstName }}
          </div>
        </div>

        <div class="form-group">
          <label for="lastName">Last Name (Required)</label>
          <input type="text" id="lastName" v-model="form.lastName" required
                 :aria-describedby="errors.lastName ? 'lastName-error' : null"
                 :aria-invalid="errors.lastName ? 'true' : 'false'">
          <div id="lastName-error" class="error-message" v-if="errors.lastName">
            {{ errors.lastName }}
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email Address (Required)</label>
          <input type="email" id="email" v-model="form.email" required
                 :aria-describedby="errors.email ? 'email-help email-error' : 'email-help'"
                 :aria-invalid="errors.email ? 'true' : 'false'">
          <div id="email-help" class="help-text">We'll use this to send you updates</div>
          <div id="email-error" class="error-message" v-if="errors.email">
            {{ errors.email }}
          </div>
        </div>
      </fieldset>

      <!-- Radio buttons with proper grouping -->
      <fieldset>
        <legend>Gender (Optional)</legend>
        <div class="radio-group">
          <label for="male">Male</label>
          <input type="radio" id="male" name="gender" value="male" v-model="form.gender">
        </div>
        <div class="radio-group">
          <label for="female">Female</label>
          <input type="radio" id="female" name="gender" value="female" v-model="form.gender">
        </div>
        <div class="radio-group">
          <label for="other">Other</label>
          <input type="radio" id="other" name="gender" value="other" v-model="form.gender">
        </div>
      </fieldset>

      <!-- Checkbox with proper label -->
      <div class="form-group">
          <label for="agree">I agree to the <a href="/terms">terms and conditions</a> (Required)</label>
        <input type="checkbox" id="agree" v-model="form.agree" required>
      </div>

      <!-- Select with proper label -->
      <div class="form-group">
        <label for="country">Country (Optional)</label>
        <select id="country" v-model="form.country" aria-describedby="country-help">
          <option value="">Choose a country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
        </select>
        <div id="country-help" class="help-text">Select your country of residence</div>
      </div>

      <!-- Accessible submit buttons -->
      <div class="form-actions">
        <button type="submit" class="primary-button">Submit Form</button>
        <button type="button" @click="resetForm" class="secondary-button">Reset Form</button>
      </div>
    </form>

    <!-- ACCESSIBLE BUTTONS AND INTERACTIVE ELEMENTS -->
    <section aria-labelledby="buttons-heading">
      <h2 id="buttons-heading">Accessible Buttons and Interactive Elements</h2>

      <!-- Proper buttons instead of divs/spans -->
      <div class="button-group">
        <button type="button" @click="handleClick" class="primary-button">
          Primary Action
        </button>

        <button type="button" @click="handleSecondaryAction" class="secondary-button">
          Secondary Action
        </button>

        <!-- Button with icon and text -->
        <button type="button" @click="handleDownload" class="icon-button" aria-describedby="download-help">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
            <path d="M10 2l8 8-8 8-2-2 6-6-6-6z" fill="currentColor"/>
          </svg>
          Download File
        </button>
        <div id="download-help" class="help-text">Downloads a PDF file (2.3MB)</div>

        <!-- Icon-only button with accessible label -->
        <button type="button" @click="handleClose" class="close-button" aria-label="Close dialog">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
            <path d="M10 8l4-4 2 2-4 4 4 4-2 2-4-4-4 4-2-2 4-4-4-4 2-2z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </section>

    <!-- ACCESSIBLE IMAGES -->
    <section aria-labelledby="images-heading">
      <h2 id="images-heading">Accessible Images</h2>

      <!-- Decorative image with empty alt text -->
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='50'%3E%3Crect width='100' height='50' fill='%23f0f0f0'/%3E%3C/svg%3E"
           alt="" role="presentation">

      <!-- Informative image with proper alt text -->
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='50'%3E%3Crect width='100' height='50' fill='red'/%3E%3Ctext x='50' y='30' text-anchor='middle' fill='white'%3EERROR%3C/text%3E%3C/svg%3E"
           alt="Error: An error has occurred">

    </section>

    <!-- ACCESSIBLE TABLES -->
    <section aria-labelledby="tables-heading">
      <h2 id="tables-heading">Accessible Tables</h2>

      <!-- Simple table with proper headers -->
      <table class="accessible-table">
        <caption>Employee Information</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>25</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>30</td>
            <td>London</td>
          </tr>
        </tbody>
      </table>

      <!-- Complex table with proper headers association -->
      <table class="accessible-table complex-table">
        <caption>Quarterly Financial Performance by Department</caption>
        <thead>
          <tr>
            <th scope="col" id="dept">Department</th>
            <th scope="col" id="q1">Q1 2024</th>
            <th scope="col" id="q2">Q2 2024</th>
            <th scope="col" id="q3">Q3 2024</th>
            <th scope="col" id="q4">Q4 2024</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" id="sales">Sales</th>
            <td headers="sales q1">$100,000</td>
            <td headers="sales q2">$120,000</td>
            <td headers="sales q3">$110,000</td>
            <td headers="sales q4">$130,000</td>
          </tr>
          <tr>
            <th scope="row" id="marketing">Marketing</th>
            <td headers="marketing q1">$50,000</td>
            <td headers="marketing q2">$60,000</td>
            <td headers="marketing q3">$55,000</td>
            <td headers="marketing q4">$65,000</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- ACCESSIBLE NAVIGATION AND LINKS -->
    <section aria-labelledby="navigation-heading">
      <h2 id="navigation-heading">Accessible Navigation and Links</h2>

      <!-- Proper navigation structure -->
      <nav aria-label="Main navigation" class="main-nav">
        <ul>
          <li><a href="/" aria-current="page">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <!-- Links with proper context -->
      <div class="content-links">
        <p>For more information about our services, <a href="/services">view our complete service list</a></p>
        <p>Download the <a href="/documents/user-guide.pdf" download>user guide (PDF, 2.3MB)</a></p>
        <p><a href="/accessibility-guidelines">Learn more about our accessibility guidelines</a></p>

        <!-- External links with proper warnings -->
        <p>Visit our partner's website:
          <a href="https://example.com" target="_blank" rel="noopener noreferrer"
             aria-label="Partner website (opens in new tab)">
            External Partnership Site
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" class="external-link-icon">
              <path d="M9 3h4v4l-1.5-1.5L8 9 7 8l3.5-3.5L9 3z" fill="currentColor"/>
            </svg>
          </a>
        </p>
      </div>
    </section>

    <!-- ACCESSIBLE MULTIMEDIA -->
    <section aria-labelledby="multimedia-heading">
      <h2 id="multimedia-heading">Accessible Multimedia</h2>

      <!-- Video with proper controls and captions - Big Buck Bunny-->
      <figure>
        <video width="300" height="200" controls aria-labelledby="video-title" aria-describedby="video-description">
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
          <track kind="captions" src="/static/video-captions.vtt" srclang="en" label="English captions" default>
          <track kind="subtitles" src="/static/video-subtitles.vtt" srclang="en" label="English subtitles">
          <p>Your browser does not support the video element. <a href="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" download>Download the video file</a>.</p>
        </video>
        <figcaption>
          <div id="video-title">Sample Educational Video - Big Buck Bunny</div>
          <div id="video-description">This video demonstrates accessibility features. Duration: 10 minutes.</div>
        </figcaption>
      </figure>
    </section>

    <!-- ACCESSIBLE FOCUS AND KEYBOARD NAVIGATION -->
    <section aria-labelledby="focus-heading">
      <h2 id="focus-heading">Accessible Focus and Keyboard Navigation</h2>

      <!-- Proper interactive elements with keyboard support -->
      <div class="interactive-elements">
        <button type="button" @click="handleAction" @keydown.enter="handleAction" @keydown.space.prevent="handleAction">
          Accessible Interactive Element
        </button>

        <div class="custom-control"
             role="button"
             tabindex="0"
             @click="handleCustomAction"
             @keydown.enter="handleCustomAction"
             @keydown.space.prevent="handleCustomAction"
             aria-describedby="custom-help">
          Custom Interactive Element (with proper ARIA)
        </div>
        <div id="custom-help" class="help-text">This custom element behaves like a button and supports keyboard navigation</div>
      </div>

      <!-- Proper tabindex usage (no positive values) -->
      <div class="tab-order-demo">
        <p>These elements follow natural tab order:</p>
        <button type="button">First Button</button>
        <label for="tab-demo-input">Text Input:</label>
        <input type="text" id="tab-demo-input" placeholder="Enter text here">
        <label for="tab-demo-select">Choose Option:</label>
        <select id="tab-demo-select">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <button type="button">Last Button</button>
      </div>
    </section>

    <!-- ACCESSIBLE COLOR AND CONTRAST -->
    <section aria-labelledby="contrast-heading">
      <h2 id="contrast-heading">Accessible Color and Contrast</h2>

      <div class="good-contrast">
        <p>This text has sufficient color contrast (4.5:1 ratio for normal text, 3:1 for large text) and is easy to read for users with visual impairments.</p>
      </div>

      <!-- Information NOT conveyed by color only -->
      <div class="form-indicators">
        <p>Form fields are clearly marked with both visual and textual indicators:</p>

        <div class="form-group">
          <label for="required-field">
            Full Name
            <span class="required-indicator" title="Required field">*</span>
          </label>
          <input type="text" id="required-field" required class="required-field"
                 aria-describedby="required-help">
          <div id="required-help" class="help-text">Required: Please enter your full name</div>
        </div>

        <div class="form-group">
          <label for="optional-field">
            Middle Name
            <span class="optional-indicator">(Optional)</span>
          </label>
          <input type="text" id="optional-field" class="optional-field"
                 aria-describedby="optional-help">
          <div id="optional-help" class="help-text">Optional: Middle name if you have one</div>
        </div>
      </div>

      <!-- Status indicators with text and icons -->
      <div class="status-messages">
        <div class="success-message" role="alert">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
            <path d="M8 15l-5-5 1.5-1.5L8 12l7.5-7.5L17 6z" fill="currentColor"/>
          </svg>
          Success: Form submitted successfully
        </div>

        <div class="error-message" role="alert">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 5h2v6H9V5zm0 8h2v2H9v-2z" fill="currentColor"/>
          </svg>
          Error: Please check the required fields
        </div>

        <div class="warning-message" role="alert">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
            <path d="M10 2L2 18h16L10 2zm0 3l6 11H4l6-11z" fill="currentColor"/>
          </svg>
          Warning: This action cannot be undone
        </div>
      </div>
    </section>
    </div>
  </main>

</template>

<script>
export default {
  name: 'Page10',
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        agree: false,
        country: ''
      },
      errors: {}
    }
  },
  methods: {
    handleClick () {
      this.showMessage('Button clicked successfully!', 'success')
    },
    handleAction () {
      this.showMessage('Action performed!', 'info')
    },
    handleSecondaryAction () {
      this.showMessage('Secondary action completed!', 'info')
    },
    handleDownload () {
      this.showMessage('Download started...', 'info')
    },
    handleClose () {
      this.showMessage('Dialog closed', 'info')
    },
    handleCustomAction () {
      this.showMessage('Custom action executed with keyboard support!', 'success')
    },
    handleSubmit () {
      this.errors = {}
      let hasErrors = false

      // Validate required fields
      if (!this.form.firstName.trim()) {
        this.errors.firstName = 'First name is required'
        hasErrors = true
      }
      if (!this.form.lastName.trim()) {
        this.errors.lastName = 'Last name is required'
        hasErrors = true
      }
      if (!this.form.email.trim()) {
        this.errors.email = 'Email address is required'
        hasErrors = true
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address'
        hasErrors = true
      }
      if (!this.form.agree) {
        this.errors.agree = 'You must agree to the terms and conditions'
        hasErrors = true
      }

      if (hasErrors) {
        this.showMessage('Please correct the errors below', 'error')
        // Focus on first error field
        this.$nextTick(() => {
          const firstErrorField = document.querySelector('[aria-invalid="true"]')
          if (firstErrorField) {
            firstErrorField.focus()
          }
        })
      } else {
        this.showMessage('Form submitted successfully!', 'success')
      }
    },
    resetForm () {
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        agree: false,
        country: ''
      }
      this.errors = {}
      this.showMessage('Form reset', 'info')
    },
    isValidEmail (email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailPattern.test(email)
    },
    showMessage (message, type) {
      // In a real app, this would show a proper notification
      // For demo purposes, using console and alert
      console.log(`${type.toUpperCase()}: ${message}`)

      // Create and show an accessible alert
      const alert = document.createElement('div')
      alert.setAttribute('role', 'alert')
      alert.setAttribute('aria-live', 'polite')
      alert.className = `message ${type}-message`
      alert.textContent = message

      document.body.appendChild(alert)

      // Remove after 3 seconds
      setTimeout(() => {
        if (alert.parentNode) {
          alert.parentNode.removeChild(alert)
        }
      }, 3000)
    }
  }
}
</script>

<style scoped>
/* ACCESSIBLE STYLING */
.accessible-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

/* Skip link for keyboard navigation */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  border-radius: 0 0 4px 4px;
  z-index: 1000;
}

.skip-link:focus {
  top: 0;
}

/* Proper focus indicators */
button:focus,
input:focus,
select:focus,
textarea:focus,
a:focus,
[tabindex]:focus {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

/* General anchor styling */
a {
  background-color: #ffffff;
  position: relative;
  z-index: 1;
}

/* Section spacing */
section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
}

/* Headings */
h1 {
  color: #1a1a1a;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background-color: #ffffff;
}

h2 {
  color: #2d3748;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0.5rem;
  background-color: #ffffff;
  position: relative;
  z-index: 1;
}

h3 {
  color: #4a5568;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

/* Accessible form styling */
.form-group {
  margin-bottom: 1.5rem;
  background-color: #ffffff;
  position: relative;
}

/* Form groups inside fieldsets */
fieldset .form-group {
  background-color: inherit;
  padding: 0.5rem 0;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2d3748;
  background-color: #ffffff;
  position: relative;
}

input[type="text"],
input[type="email"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.2s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
select:focus,
textarea:focus {
  border-color: #005fcc;
  box-shadow: 0 0 0 3px rgba(0, 95, 204, 0.1);
}

input[aria-invalid="true"] {
  border-color: #e53e3e;
}

/* Required/optional field indicators */
.required-indicator {
  color: #e53e3e;
  font-weight: bold;
  margin-left: 2px;
}

.optional-indicator {
  color: #4a5568;
  font-weight: normal;
}

.required-field {
  border-left: 4px solid #e53e3e;
}

.optional-field {
  border-left: 4px solid #38a169;
}

/* Help text */
.help-text {
  font-size: 0.875rem;
  color: #4a5568;
  margin-top: 0.25rem;
  background-color: #ffffff;
  position: relative;
  z-index: 1;
}

/* Error messages */
.error-message {
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  font-weight: 500;
}

/* Fieldsets */
fieldset {
  border: 2px solid #e2e8f0;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: #ffffff;
  position: relative;
}

legend {
  font-weight: 600;
  padding: 0 0.5rem;
  color: #2d3748;
  background-color: #ffffff;
  position: relative;
  z-index: 1;
  border-radius: 4px;
  margin-bottom: 1rem;
}

/* Radio button groups */
.radio-group {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  background-color: #ffffff;
  padding: 0.25rem 0;
  position: relative;
}

.radio-group input[type="radio"] {
  width: auto;
  margin-right: 0.5rem;
  background-color: #ffffff;
}

.radio-group label {
  margin-bottom: 0;
  font-weight: normal;
  background-color: #ffffff;
  padding: 0.25rem 0;
}

/* Button styling */
.button-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

button,
.primary-button {
  background-color: #005fcc;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover,
.primary-button:hover {
  background-color: #004499;
}

.secondary-button {
  background-color: #e2e8f0;
  color: #2d3748;
  border: 2px solid #cbd5e0;
}

.secondary-button:hover {
  background-color: #cbd5e0;
}

.icon-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.close-button {
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 50%;
  background-color: #f7fafc;
  color: #4a5568;
  border: 2px solid #e2e8f0;
}

.close-button:hover {
  background-color: #edf2f7;
}

/* Custom interactive elements */
.custom-control {
  background-color: #f7fafc;
  border: 2px solid #e2e8f0;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.custom-control:hover {
  background-color: #edf2f7;
  border-color: #cbd5e0;
}

.custom-control:focus {
  background-color: #ebf8ff;
  border-color: #005fcc;
}

/* Table styling */
.accessible-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  background-color: #fff;
}

.accessible-table caption {
  font-weight: 600;
  text-align: left;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.accessible-table th,
.accessible-table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #e2e8f0;
}

.accessible-table th {
  background-color: #f7fafc;
  font-weight: 600;
  color: #2d3748;
}

.accessible-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* Navigation styling */
.main-nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 2rem;
  margin: 0;
}

.main-nav a {
  color: #005fcc;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus {
  border-bottom-color: #005fcc;
}

.main-nav a[aria-current="page"] {
  color: #2d3748;
  border-bottom-color: #2d3748;
  font-weight: 600;
}

/* Content links styling */
.content-links p {
  background-color: #ffffff;
  position: relative;
  z-index: 1;
}

/* Form indicators styling */
.form-indicators p {
  background-color: #ffffff;
  position: relative;
  z-index: 1;
}

/* External link icon */
.external-link-icon {
  margin-left: 0.25rem;
  vertical-align: middle;
}

/* Status messages */
.status-messages > div {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-weight: 500;
}

.success-message {
  background-color: #f0fff4;
  border: 1px solid #9ae6b4;
  color: #276749;
}

.error-message {
  background-color: #fed7d7;
  border: 1px solid #feb2b2;
  color: #822727;
}

.warning-message {
  background-color: #fffbeb;
  border: 1px solid #f6e05e;
  color: #744210;
}

/* Good contrast example */
.good-contrast {
  background-color: #fff;
  color: #2d3748;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  margin-bottom: 1rem;
}

/* Visually hidden utility (proper implementation) */
.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

/* Multimedia styling */
figure {
  margin: 1rem 0;
}

figcaption {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #4a5568;
  background-color: #ffffff;
  position: relative;
  z-index: 1;
}

video,
audio {
  max-width: 100%;
  height: auto;
}

.transcript {
  background-color: #f7fafc;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 0.5rem;
  font-size: 0.875rem;
}

/* Interactive elements demo */
.interactive-elements {
  margin-bottom: 2rem;
}

.tab-order-demo {
  background-color: #f7fafc;
  padding: 1rem;
  border-radius: 4px;
  border: 2px dashed #cbd5e0;
}

.tab-order-demo > * {
  margin-right: 1rem;
  margin-bottom: 0.5rem;
}

/* Form validation styling */
input:invalid:not(:focus):not(:placeholder-shown) {
  border-color: #e53e3e;
}

input:valid:not(:focus):not(:placeholder-shown) {
  border-color: #38a169;
}

/* Responsive design */
@media (max-width: 768px) {
  .accessible-page {
    padding: 1rem;
  }

  .button-group {
    flex-direction: column;
  }

  .main-nav ul {
    flex-direction: column;
    gap: 0.5rem;
  }

  .accessible-table {
    font-size: 0.875rem;
  }
}

/* Print styles */
@media print {
  .skip-link,
  button,
  .button-group {
    display: none;
  }

  .accessible-page {
    max-width: none;
    padding: 0;
  }
}
</style>
