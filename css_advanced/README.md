# SmileSchool Landing Page – HTML & CSS

This repository contains a complete HTML and CSS implementation of the SmileSchool landing page. The project recreates the full layout using semantic markup, responsive design principles, and locally imported fonts.

## Overview

The webpage includes the following sections:

- Navigation Bar  
- Hero Section  
- Learn From the Pros  
- Testimonial  
- Most Popular Tutorials  
- Free Membership  
- Frequently Asked Questions (FAQ)  
- Footer  

All typography and images used in the layout are stored locally.

## Project Structure

project-folder/
│
├── index.html
├── styles.css
│
├── img/
│ └── (image assets)
│
└── source-sans-pro/
└── (Source Sans Pro OTF files)

scss
Copy code

## Typography

The project uses locally imported Source Sans Pro fonts via `@font-face`:

```css
@font-face {
    font-family: "Source Sans Pro";
    src: url("source-sans-pro/SourceSansPro-Regular.otf") format("opentype");
    font-weight: 400;
}

@font-face {
    font-family: "Source Sans Pro";
    src: url("source-sans-pro/SourceSansPro-Bold.otf") format("opentype");
    font-weight: 700;
}

body {
    font-family: "Source Sans Pro", sans-serif;
}
Technologies Used
HTML5

CSS3

Flexbox

Font Awesome

Local fonts and assets

Objectives

Apply responsive and accessible layout principles to awebpage

Implement custom typography

Organize assets and maintain clean code structure