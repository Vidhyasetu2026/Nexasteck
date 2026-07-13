import { useEffect } from "react";

/**
 * Lightweight SEO helper — updates document title and meta description
 * per page without needing react-helmet as a dependency.
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = "description";
        document.head.appendChild(tag);
      }
      tag.content = description;
    }
  }, [title, description]);

  return null;
}
