import React from "react";
import { FiFileText, FiShield, FiCreditCard, FiCheckSquare } from "react-icons/fi";

import LegalDocument from "../components/shared/LegalDocument";
import { TERMS_AND_CONDITIONS } from "../data/terms-data";

const HIGHLIGHTS = [
    { icon: <FiFileText />, label: "Clear Scope" },
    { icon: <FiCreditCard />, label: "Fair Payments" },
    { icon: <FiShield />, label: "Your IP Protected" },
    { icon: <FiCheckSquare />, label: "Transparent Terms" }
];

export default function Terms() {
    return (
        <LegalDocument
            seoTitle="Terms and Conditions"
            seoDescription="Read the terms and conditions that govern your access to and use of Nexasteck's website and services."
            heroEyebrow="Legal"
            heroTitle="Terms &"
            heroHighlight="Conditions"
            heroSubtitle="Please read these terms carefully before using our website or engaging our services."
            docName="Nexasteck Terms and Conditions"
            effectiveDate={TERMS_AND_CONDITIONS.effectiveDate}
            lastUpdated={TERMS_AND_CONDITIONS.lastUpdated}
            sections={TERMS_AND_CONDITIONS.sections}
            highlights={HIGHLIGHTS}
            highlightsTitle="Terms at a"
            highlightsHighlight="glance"
            closingSubtitle="Contact our team if you have any questions regarding these Terms and Conditions."
        />
    );
}
