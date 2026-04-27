// components/StudentConversionForm.tsx
"use client";

import { useEffect, useRef, useState } from "react";

// Extend the Window interface to include hbspt
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormReady?: () => void;
        }) => void;
      };
    };
  }
}

export function StudentConversionForm() {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const existingScript = document.querySelector('#hs-forms-script');
    
    const loadForm = () => {
      if (window.hbspt && formContainerRef.current) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "144428117",
          formId: "8d0817d9-373a-4a01-a512-234d542fab1e",
          target: `#${formContainerRef.current.id}`,
          onFormReady: () => {
            setIsPageLoading(false);
          }
        });
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://js-eu1.hsforms.net/forms/embed/144428117.js";
      script.id = 'hs-forms-script';
      script.defer = true;
      
      script.onload = loadForm;
      document.body.appendChild(script);
    } else {
      loadForm();
    }

    // Reduced fallback timeout - 3 seconds
    const timeoutId = setTimeout(() => {
      setIsPageLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  // Full page loading spinner
  if (isPageLoading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-orange-600 border-t-transparent animate-spin"></div>
        </div>
        <p className="mt-3 text-gray-500 text-sm">Loading form...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Request Information</h2>
      <p className="text-gray-600 mb-6">
        Interested in joining Africana College? Fill out this form and our admissions team will contact you.
      </p>
      
      <div 
        id="hubspot-form-container"
        ref={formContainerRef}
        className="hs-form-frame"
        data-region="eu1"
        data-form-id="8d0817d9-373a-4a01-a512-234d542fab1e"
        data-portal-id="144428117"
      ></div>
      
      <div className="mt-6 text-xs text-gray-400 text-center">
        By submitting this form, you agree to receive communication from Africana College of Professionals about programs, events, and admissions.
      </div>
    </div>
  );
}