import React from "react";
import { FiLock, FiEyeOff, FiShieldOff, FiEye } from "react-icons/fi";

import LegalDocument from "../components/shared/LegalDocument";
import { PRIVACY_POLICY } from "../data/privacy-data";

const HIGHLIGHTS = [
    { icon: <FiEyeOff />, label: "No Spam" },
    { icon: <FiLock />, label: "Secure Storage" },
    { icon: <FiShieldOff />, label: "No Hidden Tracking" },
    { icon: <FiEye />, label: "Transparency" }
];

export default function PrivacyPolicy() {
    return (
        <LegalDocument
            seoTitle="Privacy Policy"
            seoDescription="Learn how we collect, use, and protect your information."
            heroEyebrow="Legal"
            heroTitle="Your privacy"
            heroHighlight="matters"
            heroSubtitle="We're committed to protecting your personal information and being transparent about how we use it."
            docName="Nexasteck Privacy Policy"
            effectiveDate={PRIVACY_POLICY.effectiveDate}
            lastUpdated={PRIVACY_POLICY.lastUpdated}
            sections={PRIVACY_POLICY.sections}
            highlights={HIGHLIGHTS}
            highlightsTitle="Privacy at a"
            highlightsHighlight="glance"
            closingSubtitle="Contact our team if you have any questions regarding this Privacy Policy."
        />
    );
}
