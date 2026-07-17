import { SITE } from "./siteData";
export const PRIVACY_POLICY = {
    effectiveDate: "01 August 2026",
    lastUpdated: "01 August 2026",

    sections: [
        {
            id: "about",
            title: "About Us",
            icon: "🏢",
            content: [
                "Nexasteck Private Limited is a software development company specializing in custom software solutions, web applications, mobile applications, SaaS platforms, cloud solutions, UI/UX design, API development, software consulting, maintenance, and digital transformation services."
            ]
        },

        {
            id: "collect",
            title: "Information We Collect",
            icon: "📊",
            content: [
                "We may collect the following categories of information:"
            ],

            groups: [
                {
                    heading: "Personal Information",
                    items: [
                        "Full Name",
                        "Email Address",
                        "Phone Number",
                        "Company Name",
                        "Job Title",
                        "Country",
                        "Billing Information",
                        "Business Information"
                    ]
                },

                {
                    heading: "Technical Information",
                    items: [
                        "IP Address",
                        "Browser Type",
                        "Operating System",
                        "Device Information",
                        "Time Zone",
                        "Pages Visited",
                        "Referral Source",
                        "Session Information",
                        "Cookies",
                        "Usage Analytics"
                    ]
                },

                {
                    heading: "Information You Provide When You",
                    items: [
                        "Contact us",
                        "Submit an inquiry",
                        "Request a quotation",
                        "Apply for a job",
                        "Subscribe to newsletters",
                        "Download resources",
                        "Fill out contact forms"
                    ]
                }
            ]
        },

        {
            id: "usage",
            title: "How We Use Your Information",
            icon: "🛡️",

            items: [
                "Provide our software development services",
                "Respond to inquiries",
                "Prepare quotations and proposals",
                "Deliver projects",
                "Improve our website",
                "Improve customer experience",
                "Send project updates",
                "Provide technical support",
                "Manage customer accounts",
                "Process invoices",
                "Detect fraud",
                "Ensure security",
                "Comply with legal obligations",
                "Conduct analytics",
                "Improve our products and services"
            ]
        },

        {
            id: "cookies",
            title: "Cookies",
            icon: "🍪",

            content: [
                "Our website uses cookies and similar technologies to:"
            ],

            items: [
                "Remember user preferences",
                "Improve website performance",
                "Analyze website traffic",
                "Enhance user experience",
                "Maintain security"
            ],

            note:
                "You may disable cookies through your browser settings. Some website features may not function properly if cookies are disabled."
        },

        {
            id: "analytics",
            title: "Analytics",
            icon: "📈",

            content: [
                "We may use third-party analytics services such as Google Analytics or similar tools to understand website usage and improve our services."
            ],

            items: [
                "Device information",
                "Browser information",
                "Pages visited",
                "Duration of visit",
                "General geographic location",
                "User interactions"
            ]
        },

        {
            id: "marketing",
            title: "Marketing Communications",
            icon: "📧",

            items: [
                "Company announcements",
                "Product updates",
                "Service information",
                "Newsletters",
                "Promotional offers",
                "Event invitations"
            ],

            note:
                "You may unsubscribe at any time by using the unsubscribe link or contacting us."
        },

        {
            id: "sharing",
            title: "Sharing of Information",
            icon: "🤝",

            content: [
                "We do not sell your personal information."
            ],

            items: [
                "Cloud hosting providers",
                "Payment providers",
                "Analytics providers",
                "Email service providers",
                "Professional advisors",
                "Government authorities when legally required",
                "Trusted business partners assisting in service delivery"
            ],

            note:
                "All third parties are expected to maintain appropriate confidentiality and security standards."
        },

        {
            id: "security",
            title: "Data Security",
            icon: "🔒",

            items: [
                "SSL/TLS encryption",
                "Secure cloud infrastructure",
                "Access controls",
                "Authentication mechanisms",
                "Regular software updates",
                "Firewalls",
                "Data backups",
                "Security monitoring"
            ],

            note:
                "While we strive to protect your information, no method of transmission or storage is completely secure."
        },

        {
            id: "retention",
            title: "Data Retention",
            icon: "🗄️",

            items: [
                "Provide services",
                "Meet contractual obligations",
                "Resolve disputes",
                "Comply with legal requirements",
                "Maintain business records"
            ],

            note:
                "When information is no longer required, it is securely deleted or anonymized where reasonably practicable."
        },

        {
            id: "rights",
            title: "Your Rights",
            icon: "⚖️",

            items: [
                "Access your information",
                "Correct inaccurate information",
                "Request deletion",
                "Restrict processing",
                "Object to processing",
                "Request data portability",
                "Withdraw consent"
            ],

            note:
                "Requests may be submitted using the contact information provided below."
        },

        {
            id: "children",
            title: "Children's Privacy",
            icon: "👶",

            content: [
                "Our services are intended for business and professional use and are not directed to children under the age required by applicable law. We do not knowingly collect personal information from children."
            ]
        },

        {
            id: "transfers",
            title: "International Data Transfers",
            icon: "🌍",

            content: [
                "Your information may be processed or stored in countries other than your own. Where applicable, we implement appropriate safeguards for international transfers in accordance with relevant legal requirements."
            ]
        },

        {
            id: "third-party",
            title: "Third-Party Websites",
            icon: "🔗",

            content: [
                "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of third-party websites. Users should review their respective privacy policies before providing personal information."
            ]
        },

        {
            id: "changes",
            title: "Changes to this Privacy Policy",
            icon: "📝",

            content: [
                "We may update this Privacy Policy from time to time. The updated version will be published on this page with a revised 'Last Updated' date.",
                "Continued use of our website after changes become effective constitutes acceptance of the updated Privacy Policy."
            ]
        },

        {
            id: "contact",
            title: "Contact Us",
            icon: "☎️",
            company: SITE.companyName,
            email: SITE.email,
            website: SITE.websiteLink
        }
    ]
};