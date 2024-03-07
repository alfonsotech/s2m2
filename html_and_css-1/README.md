# Intro To CSS Styles

## Introduction

Welcome to our interactive lesson focused on the fundamentals of CSS, aimed at teaching you how to style web pages effectively. Our primary topics include:
  - Targeting HTML elements with CSS
  - Learning and applying general CSS properties

We will use an HTML file representing a landing page for a fictional company, "Fake Company," as a practical tool for this lesson. The HTML file includes:
  - A header, navigation menu, main content with sections, and a footer
  - Numbered comments corresponding to specific lesson topics, guiding live coding demonstrations

Throughout the lesson, you will update the HTML file live, observing the impact of CSS styling in real-time. By the end of this session:
  - You will have applied CSS styles to various page elements
  - Transformed the basic HTML structure into a visually appealing landing page

This hands-on approach not only solidifies your understanding of CSS but also leaves you with a tangible outcome to reference in future projects. Join us as we explore the transformative power of CSS and develop the skills to create beautifully styled web pages!

## Core Competencies

1. Targeting HTML with CSS
2. Learning General CSS Properties

## Interactive Project: Build Your First Landing Page I

### 1. Body Styling

**Goal:** Introduce general CSS styling by applying styles to the `body` element, setting a foundation for the page's appearance.
**Relevance:** Understanding how to style the `body` element is crucial as it sets the default font, color, margin, and padding for the entire page, influencing all other elements.
**Code Example:**
  ```css
  body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f0f0f0;
  }
  ```

### 2. Header Styling

**Goal:** Teach how to style the `header` element to create a visually appealing top section of the web page.
**Relevance:** The header is often the first thing users see, making its design critical for a positive first impression. Styling the header involves background color, text alignment, and padding.
**Code Example:**
  ```css
  header {
      background-color: #007bff;
      color: #ffffff;
      padding: 20px 0;
      text-align: center;
  }
  ```

### 3. Navigation Menu Styling

**Goal:** Explain how to style a navigation menu, focusing on layout and visual appeal.
**Relevance:** Navigation menus are key to user experience, guiding users through the website. Styling these menus involves removing default list styles, displaying items inline, and adding margins.
**Code Example:**
  ```css
  nav ul {
      list-style-type: none;
      padding: 0;
  }

  nav ul li {
      display: inline;
      margin-right: 20px;
  }
  ```

### 4. Main Content Styling

**Goal:** Demonstrate how to style the main content area for readability and structure.
**Relevance:** The main content area is where the bulk of the website's information resides. Styling this area involves organizing content clearly and attractively, using padding and text alignment.
**Code Example:**
  ```css
  main {
      padding: 20px;
      text-align: left;
  }
  ```

### 5. Section Styling (ID and Class Selectors)

**Goal:** Teach how to use ID and class selectors for styling specific sections within the main content.
**Relevance:** ID and class selectors allow for targeted styling of specific elements, enabling more customized designs. This is essential for differentiating sections like "About Us" and "Our Services".
**Code Example:**
  ```css
  section#about {
      background-color: #ffffff;
      padding: 20px;
      margin-bottom: 20px;
  }

  section.services {
      background-color: #eeeeee;
      padding: 20px;
  }
  ```

### 6. Footer Styling
- **Goal:** Highlight how to style the footer, an essential part of the page layout.
- **Relevance:** The footer contains important information and links, making its visibility and readability key. Styling the footer often involves setting a background color, text alignment, and padding.
- **Code Example:**
  ```css
  footer {
      background-color: #343a40;
      color: #ffffff;
      text-align: center;
      padding: 20px 0;
  }
  ```

## Conclusion

### Conclusion and Key Takeaways

As we wrap up today's lesson on styling web pages with CSS, let's reflect on the key takeaways and how they can be applied to future web development projects:

- **Understanding CSS Selectors:** We've seen how to target HTML elements using various selectors, including element, ID, and class selectors. This foundational skill is crucial for applying specific styles to different parts of a web page.

- **Applying General CSS Properties:** Through live coding exercises, we've explored a range of CSS properties such as `background-color`, `font-family`, `margin`, `padding`, and `text-align`. These properties are the building blocks for creating visually appealing layouts and designs.

- **Structuring Web Pages:** The structure of your HTML plays a significant role in how styles are applied. Proper use of semantic elements like `header`, `nav`, `main`, `section`, and `footer` not only improves accessibility but also makes it easier to style and maintain your pages.

- **Real-time Feedback Loop:** The interactive nature of updating the HTML file live during the lesson underscores the immediate impact of CSS changes. This real-time feedback loop is a powerful tool for understanding and mastering CSS styling techniques.

- **Practical Application:** Converting a basic, unstyled HTML document into a styled, cohesive landing page demonstrates the transformative power of CSS. This practical application helps solidify theoretical concepts and showcases the potential of CSS in web design.

- **Creativity in Web Design:** CSS offers a vast array of styling options that encourage creativity and experimentation. Today's exercises are just the beginning; there's much more to explore and create with CSS.

Remember, the skills learned today are just the starting point. Web design and development are vast fields with endless learning opportunities. Keep experimenting, building, and refining your skills. The more you practice, the more proficient you'll become in creating beautiful, user-friendly web pages.