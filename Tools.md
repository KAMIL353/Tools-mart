# ROLE & CORE OBJECTIVE
You are an expert Senior Full-Stack Engineer, UX Architect, and Conversion Rate Optimization (CRO) specialist specializing in building hyper-responsive, high-performance web applications. Your objective is to build a complete, production-ready, highly guided responsive web application for "TOOLS MART", a premier hardware, power tool, and generator store located in Kalmunai, Sri Lanka. 

The primary goal of this web app is to drive local brand awareness, capture customer attention, and act as an interactive, guided digital showroom that helps both professional contractors and DIY homeowners easily identify the exact tools or generators they need.

---

# BUSINESS CONTEXT & PRODUCT CATALOG
"TOOLS MART" is based in Kalmunai, Sri Lanka. The website must feel accessible, fast, and optimized for local users (including mobile users on varying network speeds). The store offers an extensive catalog categorized as follows, which must be represented dynamically within the application:

1. Drilling & Fastening:
   - Drill (Steel & Wood)
   - Hammer Drill (Steel, Wood & Masonry)
   - Impact Driver
   - Impact Wrench
   - Screwdriver
   - Stationary Drill
   - Rotary Hammer
2. Concrete & Demolition:
   - Demolition Hammer
   - Mixer
3. Cutting & Sawing:
   - Recipro Saw
   - Metal Cutting
   - Grinder
   - Circular Saw
   - Jigsaw
4. Surface Preparation & Finish:
   - Planing & Routering
   - Sanding & Polisher
5. Outdoor, Cleaning & Specialty:
   - Pressure Washer
   - Power Cutter
   - Dust Extraction
   - Heat Gun
   - Nailer
   - Speciality Tools
6. Infrastructure, Power & Layout:
   - Generators (Heavy duty & Portable)
   - Measuring / Leveling
   - Lights
   - Portable Power Pack
7. Kits & Series:
   - Combo Kits
   - MT Series
8. Lifestyle & Comfort:
   - Comfort / Lifestyle
   - OPE Tools (Outdoor Power Equipment)

---

# DETAILED ARCHITECTURE & UI/UX REQUIREMENTS

The application must consist of a modern, clean, single-page or multi-view structure utilizing a bold, industrial color palette (e.g., deep charcoal, safety orange/yellow accents, and clean white backgrounds) that reflects reliability and power.

## 1. Global Navigation & Layout
- A fully sticky, responsive header featuring the "TOOLS MART" branding, a live quick-search bar, and an instant "Contact/Location" shortcut.
- Mobile-first hamburger menu that transforms into a comprehensive mega-menu on desktop layouts.
- Footer featuring physical address details (Kalmunai, Sri Lanka), operating hours, direct click-to-call phone links, and an integration for WhatsApp inquiries.

## 2. Hero Section & The "Interactive Tool Finder" (Core Guided Feature)
- A dynamic, attention-grabbing hero section with a clear headline: "Empowering Kalmunai’s Builders – Find the Exact Tool for Your Job."
- **The Guided Assistant:** Instead of a basic static grid, implement an interactive step-by-step wizard ("Help Me Choose my Tool/Generator").
  - **Step 1: User Profile** -> Buttons for "DIY/Home User" or "Professional Contractor".
  - **Step 2: Material/Task** -> Options for "Woodworking", "Metalworking", "Masonry/Concrete", "Heavy Demolition", or "Backup Power/Generators".
  - **Step 3: Recommendation Engine Output** -> Dynamically filters and displays the exact categories from the catalog matching their selections, featuring an instant "Inquire via WhatsApp" button pre-filled with the tool details.

## 3. Dynamic Product Catalog View
- A responsive, multi-tabbed grid showcasing all listed tool categories.
- High-quality card components for each category, featuring placeholder icons or clean frames for product images, badges indicating availability (e.g., "In Stock", "Available for Order"), and clear sub-category tags.
- Advanced client-side filtering system allowing users to instantly filter by major application areas (e.g., Drilling, Sawing, Power Generation, Finishing).

## 4. Dedicated Generator & Heavy Equipment Showcase
- A distinct, premium section specifically highlighting the Generator line, given its critical importance for local businesses and homes.
- Includes a simple interactive "Load Calculator" slider where users can select what they need to power (e.g., Lights, Fans, Refrigerator, AC, Industrial Machinery) to estimate the generator capacity (KVA) they require.

## 5. Local Trust & Call to Action (CTA)
- Map placeholder integration clearly identifying the store's accessibility in Kalmunai.
- Prominent banners highlighting local support, genuine warranty, and direct pickup options.
- A quick contact form capturing Name, Phone Number, and Tool Requirements.

---

# TECHNICAL SPECIFICATIONS & CODE QUALITY STANDARDS

- **Responsive Design:** Utilize robust CSS Grid and Flexbox layouts. The application must scale flawlessly from a 320px mobile screen (common for on-site contractors checking tools on phones) up to ultra-wide 4K monitors.
- **Interactivity & State Management:** Write clean, modular JavaScript/TypeScript to handle the state transitions of the Guided Tool Finder wizard, the search filters, and the Generator Load Calculator. Ensure all state updates are instantaneous and smooth.
- **Performance:** Keep asset footprints minimal. Use modern CSS transitions for UI animations and filter states instead of heavy external animation frameworks.
- **Accessibility (a11y):** Ensure high contrast ratios for text elements, interactive elements must possess proper keyboard focus rings, and all form fields must have explicit, accessible labels.
- **Maintainability:** Componentize the code clearly. Separate the layouts into semantic sections (Header, Hero/Wizard, Catalog, Generator Calculator, Footer) with detailed inline comments explaining the logic flow.

---

# EXPECTED OUTPUT
Generate the fully functioning web application code implementing all the features detailed above. Provide the complete index.html, a robust and fully realized styles.css handling the complete industrial design system and responsiveness, and an app.js file managing the complex interactive wizard, filtering mechanisms, and generator calculations. Deliver raw, production-ready code blocks without skipping core logic or using generic "todo" placeholders. Start generating now.