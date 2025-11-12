<template>
  <div class="page-with-no-accessible-orders">
    <!-- Heading hierarchy violation -->
    <h4>Scan the page</h4>
    <h3>Hello h3</h3>

    <!-- Inaccessible unordered list #7: Table data presented as list -->
    <ul>
      <li>Name | Age | City</li>
      <li>John | 25 | New York</li>
      <li>Jane | 30 | London</li>
      <li>Bob | 35 | Paris</li>
    </ul>

    <!-- Inaccessible unordered list #8: Complex interactive content -->
    <ul>
      <li>
        <div onclick="handleClick()" tabindex="0" class="fake-button">
          Click me (div pretending to be button)
        </div>
      </li>
      <li>
        <span role="button">Span as button without proper keyboard support</span>
      </li>
      <li class="visually-hidden-wrong">Hidden item that screen readers can't access</li>
    </ul>

    <!-- Inaccessible unordered list #9: Form elements without proper labels -->
    <ul>
      <li>
        <input type="text" placeholder="Enter name (placeholder as label - bad!)">
      </li>
      <li>
        <input type="email" title="Email address (title as label - also bad!)">
      </li>
      <li>
        Name: <input type="text"> (visual label only)
      </li>
    </ul>

    <!-- Not proper navigation with contextual links -->
    <ul class="low-contrast">
      <li><a href="#">Click here</a></li>
      <li><a href="#">Read more</a></li>
      <li><a href="#">Download</a></li>
      <li><a href="javascript:void(0)">Link with JavaScript href</a></li>
    </ul>

    <!-- FORMS WITH ACCESSIBILITY VIOLATIONS -->
    <h2>Inaccessible Form Elements</h2>

    <!-- Form without proper labels and structure -->
    <form>
      <input type="text" placeholder="First Name"> <!-- No label, placeholder only -->
      <input type="text"> <!-- No label, title only -->
      Email: <input type="email"> <!-- Visual label only, not programmatically associated -->

      <!-- Radio buttons without proper grouping -->
      <input type="radio" name="gender" value="male"> Male
      <input type="radio" name="gender" value="female"> Female

      <!-- Checkbox without label -->
      <input type="checkbox" id="agree"> I agree to terms

      <!-- Select without label -->
      <select>
        <option>Choose country</option>
        <option value="us">USA</option>
        <option value="uk">UK</option>
      </select>
    </form>

    <!-- BUTTONS AND INTERACTIVE ELEMENTS -->
    <h2>Inaccessible Buttons and Interactive Elements</h2>

    <!-- Fake buttons (divs/spans as buttons) -->
    <div @click="handleDivClick" style="background: gray; padding: 10px; cursor: pointer;">
      Fake Button (div)
    </div>

    <span @click="handleSpanClick" style="background: blue; color: white; padding: 5px; cursor: pointer;">
      Fake Button (span)
    </span>

    <!-- Image as button without proper attributes -->
    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='30'%3E%3Crect width='50' height='30' fill='red'/%3E%3Ctext x='25' y='20' text-anchor='middle' fill='white'%3EClick%3C/text%3E%3C/svg%3E"
         @click="handleImageClick"
         style="cursor: pointer;">

    <!-- IMAGES WITH ACCESSIBILITY ISSUES -->
    <h2>Inaccessible Images</h2>
    <!-- Decorative image with alt text (should be empty) -->
    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='50'%3E%3Crect width='100' height='50' fill='%23f0f0f0'/%3E%3C/svg%3E"
         alt="Decorative border pattern">

    <!-- Informative image without alt text -->
    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='50'%3E%3Crect width='100' height='50' fill='red'/%3E%3Ctext x='50' y='30' text-anchor='middle' fill='white'%3EERROR%3C/text%3E%3C/svg%3E">

    <!-- TABLES WITH ACCESSIBILITY ISSUES -->
    <h2>Inaccessible Tables</h2>

    <!-- Table without headers -->
    <table border="1">
      <tr>
        <td>Name</td>
        <td>Age</td>
        <td>City</td>
      </tr>
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
    </table>

    <!-- Complex table without proper headers association -->
    <table border="1">
      <tr>
        <td></td>
        <td>Q1</td>
        <td>Q2</td>
        <td>Q3</td>
        <td>Q4</td>
      </tr>
      <tr>
        <td>Sales</td>
        <td>$100k</td>
        <td>$120k</td>
        <td>$110k</td>
        <td>$130k</td>
      </tr>
      <tr>
        <td>Marketing</td>
        <td>$50k</td>
        <td>$60k</td>
        <td>$55k</td>
        <td>$65k</td>
      </tr>
    </table>

    <!-- INACCESSIBLE NAVIGATION AND LINKS -->
    <h2>Inaccessible Navigation and Links</h2>

    <!-- Navigation without proper structure -->
    <div class="nav">
      <span @click="fakeNavigation('home')" style="cursor: pointer; margin-right: 10px;">Home</span>
      <span @click="fakeNavigation('about')" style="cursor: pointer; margin-right: 10px;">About</span>
      <span @click="fakeNavigation('contact')" style="cursor: pointer;">Contact</span>
    </div>

    <!-- Links without context -->
    <p>For more information about our services, <a href="#">click here</a>.</p>
    <p>Download the document <a href="#">here</a>.</p>
    <p><a href="#">Read more</a> about accessibility guidelines.</p>

    <!-- Links that open in new window without warning -->
    <a href="https://example.com" target="_blank">External link</a>

    <!-- MULTIMEDIA WITHOUT ACCESSIBILITY -->
    <h2>Inaccessible Multimedia</h2>

    <!-- Video without controls or captions -->
    <video width="300" height="200" autoplay muted>
      <source src="nonexistent-video.mp4" type="video/mp4">
    </video>

    <!-- Audio without controls -->
    <audio autoplay>
      <source src="nonexistent-audio.mp3" type="audio/mpeg">
    </audio>

    <!-- FOCUS AND KEYBOARD NAVIGATION ISSUES -->
    <h2>Focus and Keyboard Issues</h2>

    <!-- Elements with tabindex but no keyboard handlers -->
    <div tabindex="0" onclick="alert('clicked')" style="padding: 10px; border: 1px solid gray;">
      Focusable div without keyboard support
    </div>

    <!-- Skip navigation missing -->
    <!-- No skip links provided for keyboard users -->

    <!-- Interactive element with positive tabindex (anti-pattern) -->
    <button tabindex="5">Button with positive tabindex</button>
    <input type="text" tabindex="10" placeholder="Input with high tabindex">

    <!-- COLOR AND CONTRAST ISSUES -->
    <h2 style="color: #888; background: #aaa;">Poor Contrast Heading</h2>

    <p style="color: #ccc; background: #eee;">
      This text has very poor contrast and will be hard to read for users with visual impairments.
    </p>

    <!-- Information conveyed by color only -->
    <p>
      Required fields are marked in <span style="color: red;">red</span> and optional fields are in <span style="color: green;">green</span>.
    </p>

    <input type="text" style="border: 2px solid red;" placeholder="Required field">
    <input type="text" style="border: 2px solid green;" placeholder="Optional field">

    <br />
    <br />
    <hr />
  </div>
</template>

<script>
export default {
  name: 'Page9',
  methods: {
    handleClick () {
      alert('This should be a proper button!')
    },
    fakeNavigation (page) {
      alert(`Navigating to ${page} - this should be a proper link or button!`)
    },
    handleImageClick () {
      alert('Image used as button - should use button element!')
    },
    handleDivClick () {
      alert('Div used as button - accessibility violation!')
    },
    handleSpanClick () {
      alert('Span used as button - accessibility violation!')
    }
  }
}
</script>

<style scoped>
/* Inaccessible styling that will cause issues */
.page-with-no-accessible-orders {
  font-family: Arial, sans-serif;
}

/* Remove focus indicators - accessibility violation */
ul li:focus {
  outline: none !important;
}

/* Poor color contrast */
.low-contrast {
  color: #ccc;
  background-color: #ddd;
}

/* Fake list styling */
.fake-list {
  list-style: none;
  padding-left: 0;
}

.fake-list-item {
  position: relative;
  padding-left: 20px;
}

.fake-list-item:before {
  content: "•";
  position: absolute;
  left: 0;
}

/* Hidden content without proper screen reader support */
.visually-hidden-wrong {
  display: none; /* This hides from screen readers too - wrong approach */
}

/* Interactive elements that don't look interactive */
.fake-button {
  background: none;
  border: none;
  padding: 0;
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}

/* Remove all focus indicators - major accessibility violation */
button:focus,
input:focus,
select:focus,
a:focus,
div[tabindex]:focus {
  outline: none !important;
  box-shadow: none !important;
}

/* Poor color contrast examples */
.poor-contrast-1 {
  color: #999;
  background-color: #bbb;
}

.poor-contrast-2 {
  color: #ddd;
  background-color: #eee;
}

/* Navigation that looks like text */
.nav span {
  color: #666;
  text-decoration: none;
}

.nav span:hover {
  color: #333;
}

/* Form elements without proper styling */
form input[type="text"],
form input[type="email"],
form select {
  border: 1px solid #ddd;
  padding: 5px;
  margin: 5px;
}

/* Table without proper styling */
table {
  border-collapse: collapse;
  margin: 10px 0;
}

table td {
  padding: 8px;
  border: 1px solid #ccc;
}

/* Interactive elements that don't look clickable */
div[onclick],
span[onclick] {
  background: #f5f5f5;
  border: 1px solid #ddd;
  display: inline-block;
  margin: 5px;
}

/* Video and audio without proper controls styling */
video,
audio {
  background: #000;
  margin: 10px 0;
}
</style>
