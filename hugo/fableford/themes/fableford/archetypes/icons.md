---
title: "{{ replace .Name "-" " " | title }}"
description: "A brief description of this section for SEO purposes"
date: {{ .Date }}
draft: false
layout: "section"
weight: 10

# Icon Section Configuration
icon_section:
  heading: "Section Heading"
  subheading: "Optional section subheading or description text"
  background: "light"  # Options: light, dark, primary, gradient
  items:
    - title: "First Feature"
      icon: "fas fa-rocket"
      color: "primary"  # Options: primary, secondary, success, danger, warning, info
      description: "Description of the first feature or point in this section."
      
    - title: "Second Feature"
      icon: "fas fa-code"
      color: "success"
      description: "Description of the second feature or point in this section."
      
    - title: "Third Feature"
      icon: "fas fa-cogs"
      color: "info"
      description: "Description of the third feature or point in this section."
      
    - title: "Fourth Feature"
      icon: "fas fa-users"
      color: "warning"
      description: "Description of the fourth feature or point in this section."
      
  columns: 4  # How many columns to display on desktop (1-4)
  style: "card"  # Options: card, simple, circle, box
  cta:
    show: true
    text: "Learn More"
    url: "/learn-more"
    style: "primary"  # Options: primary, secondary, outline-primary, etc.
---

# Additional Content

You can add additional content here that will appear below the icon section. This is optional and can be removed if not needed.

## Supporting Details

Add any supporting information, details, or context that helps explain the icon section above.