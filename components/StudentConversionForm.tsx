// components/StudentConversionForm.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export function StudentConversionForm() {
  const ref = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);

    if (!ref.current) return;

    // Clear previous instance
    ref.current.innerHTML = "";

    // Create HubSpot embed container
    const container = document.createElement("div");
    container.className = "hs-form-frame";
    container.setAttribute("data-region", "eu1");
    container.setAttribute(
      "data-form-id",
      "8d0817d9-373a-4a01-a512-234d542fab1e"
    );
    container.setAttribute("data-portal-id", "144428117");

    ref.current.appendChild(container);

    // Let HubSpot render, then hide loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Request Information
      </h2>
      <p className="text-gray-600 mb-6">
        Interested in joining Africana College? Fill out this form and our
        admissions team will contact you.
      </p>

      {loading && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-orange-600 border-t-transparent animate-spin"></div>
          </div>
          <p className="mt-4 text-gray-500 text-sm">Loading form...</p>
        </div>
      )}

      <div
        ref={ref}
        style={{ display: loading ? "none" : "block" }}
      />

      <div className="mt-6 text-xs text-gray-400 text-center">
        By submitting this form, you agree to receive communication from
        Africana College of Professionals about programs, events, and
        admissions.
      </div>
    </div>
  );
}