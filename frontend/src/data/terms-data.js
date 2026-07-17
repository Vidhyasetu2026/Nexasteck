import { SITE } from "./siteData";
export const TERMS_AND_CONDITIONS = {
  effectiveDate: "01 August 2026",
  lastUpdated: "01 August 2026",

  sections: [
    {
      id: "definitions",
      title: "Definitions",
      icon: "📖",
      content: [
        "\"Company\" refers to Nexasteck Private Limited.",
        "\"Client\" refers to any individual, organization, or entity using our services.",
        "\"Services\" include but are not limited to:"
      ],
      items: [
        "Custom Software Development",
        "Website Development",
        "Mobile Application Development",
        "SaaS Development",
        "UI/UX Design",
        "API Development",
        "Cloud Solutions",
        "Software Consulting",
        "Maintenance & Support",
        "Technology Solutions"
      ]
    },

    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: "✅",
      content: [
        "By accessing our website, you confirm that you have read, understood, and agree to these Terms.",
        "If you do not agree, you should discontinue use of our website and services."
      ]
    },

    {
      id: "services",
      title: "Services",
      icon: "🛠️",
      content: [
        "Project scope, timelines, deliverables, pricing, and payment terms are defined in separate proposals, quotations, statements of work, or service agreements.",
        "Any modifications require mutual written agreement."
      ]
    },

    {
      id: "client-responsibilities",
      title: "Client Responsibilities",
      icon: "🤝",
      content: [
        "Clients agree to:"
      ],
      items: [
        "Provide accurate information",
        "Provide timely feedback",
        "Supply required project materials",
        "Ensure lawful use of delivered software",
        "Make payments according to agreed schedules",
        "Maintain confidentiality of credentials provided to them"
      ],
      note:
        "Project delays resulting from delayed client responses may affect delivery schedules."
    },

    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: "💡",
      content: [
        "Unless otherwise agreed in writing:"
      ],
      items: [
        "Nexasteck retains ownership of its proprietary tools, frameworks, methodologies, templates, libraries, and pre-existing intellectual property",
        "Upon full payment, the Client receives the rights expressly granted in the applicable agreement for the custom deliverables developed specifically for that Client",
        "Third-party software, open-source components, fonts, plugins, libraries, and services remain subject to their respective licenses"
      ]
    },

    {
      id: "payments",
      title: "Payments",
      icon: "💳",
      content: [
        "Invoices shall be paid according to agreed payment schedules.",
        "Failure to make timely payment may result in:"
      ],
      items: [
        "Suspension of services",
        "Project delays",
        "Withholding of deliverables",
        "Late payment charges where permitted by law"
      ]
    },

    {
      id: "confidentiality",
      title: "Confidentiality",
      icon: "🔐",
      content: [
        "Both parties agree to maintain confidentiality of proprietary information exchanged during the course of the engagement unless disclosure is required by law or authorized in writing."
      ]
    },

    {
      id: "acceptable-use",
      title: "Acceptable Use",
      icon: "🚫",
      content: [
        "Users shall not:"
      ],
      items: [
        "Attempt unauthorized access",
        "Distribute malware",
        "Interfere with website operations",
        "Reverse engineer our proprietary software except where permitted by law",
        "Use our services for unlawful activities",
        "Violate intellectual property rights",
        "Misrepresent affiliation with Nexasteck"
      ]
    },

    {
      id: "third-party-services",
      title: "Third-Party Services",
      icon: "🔗",
      content: [
        "Our solutions may integrate third-party services or software.",
        "We are not responsible for the availability, security, functionality, or policies of third-party providers."
      ]
    },

    {
      id: "warranty-disclaimer",
      title: "Warranty Disclaimer",
      icon: "⚠️",
      content: [
        "Except as expressly agreed in writing, our website and services are provided on an \"as is\" and \"as available\" basis.",
        "To the fullest extent permitted by law, Nexasteck disclaims implied warranties, including merchantability, fitness for a particular purpose, and non-infringement."
      ]
    },

    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      icon: "⚖️",
      content: [
        "To the fullest extent permitted by law, Nexasteck shall not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, including loss of profits, business interruption, data loss, or goodwill.",
        "Our aggregate liability arising from a specific engagement shall not exceed the total fees actually paid by the Client for the services giving rise to the claim, except where prohibited by applicable law."
      ]
    },

    {
      id: "indemnification",
      title: "Indemnification",
      icon: "🛡️",
      content: [
        "Clients agree to indemnify and hold harmless Nexasteck, its directors, officers, employees, and affiliates from claims, damages, losses, liabilities, and expenses arising from:"
      ],
      items: [
        "Client-provided content",
        "Misuse of delivered software",
        "Violation of applicable law",
        "Breach of these Terms"
      ]
    },

    {
      id: "force-majeure",
      title: "Force Majeure",
      icon: "🌪️",
      content: [
        "Neither party shall be liable for delays or failures caused by events beyond reasonable control, including natural disasters, government actions, labor disputes, cyberattacks, internet failures, or other force majeure events."
      ]
    },

    {
      id: "suspension-termination",
      title: "Suspension and Termination",
      icon: "⛔",
      content: [
        "We reserve the right to suspend or terminate access to our services where necessary to:"
      ],
      items: [
        "Protect our systems",
        "Enforce these Terms",
        "Address unlawful activity",
        "Respond to security incidents",
        "Comply with legal obligations"
      ]
    },

    {
      id: "governing-law",
      title: "Governing Law",
      icon: "🏛️",
      content: [
        "These Terms shall be governed by and construed in accordance with the laws of the Republic of India.",
        "Any disputes shall be subject to the exclusive jurisdiction of the competent courts having jurisdiction over the Company's registered office, unless otherwise required by applicable law."
      ]
    },

    {
      id: "changes",
      title: "Changes to Terms",
      icon: "📝",
      content: [
        "We may revise these Terms from time to time.",
        "Updated versions will be posted on this page with the revised effective date.",
        "Continued use of our services after such updates constitutes acceptance of the revised Terms."
      ]
    },

    {
      id: "contact",
      title: "Contact Information",
      icon: "☎️",
      company: SITE.companyName,
      email: SITE.email,
      website: SITE.websiteLink
    }
  ]
};
