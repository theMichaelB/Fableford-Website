---
title: "Homepage"
description: "A brief description of this page for SEO purposes"
date: 2025-03-24T09:09:41Z
draft: true

hero:
  title: "Main Page Headline"
  subtitle: "Supporting text that explains the main concept in more detail"
  buttons:
    - text: "Primary Action"
      url: "#primary-action"
      class: "btn-primary btn-lg"
    - text: "Secondary Action"
      url: "#secondary-action"
      class: "btn-outline-light btn-lg"

sections:
  - id: "section-1"
    title: "First Main Section"
    content: |
      This is a markdown-formatted content block that can include **bold text**,
      *italics*, and other formatting. It will be rendered as HTML but can be
      written in a more readable format.

      Add a second paragraph by including a blank line in between.
    features:
      highlighted:
        - "First key feature or benefit"
        - "Second key feature or benefit"
        - "Third key feature or benefit"
      secondary:
        - "First additional point"
        - "Second additional point"
        - "Third additional point"

  - id: "section-2"
    title: "Second Main Section"
    content: "Another markdown content block for the second section."
    items:
      - icon: "fas fa-icon-name"
        title: "Item Title 1"
        description: "Description for the first item in this section."
      - icon: "fas fa-icon-name-2"
        title: "Item Title 2"
        description: "Description for the second item in this section."
      - icon: "fas fa-icon-name-3"
        title: "Item Title 3"
        description: "Description for the third item in this section."
    cta:
      text: "Section Call to Action"
      url: "#section-cta"

  - id: "section-3"
    title: "Final Call to Action Section"
    content: "Compelling text to drive the final action you want visitors to take."
    form:
      action: "/submit-form"
      placeholder: "Enter your information here"
      button: "Submit"
---