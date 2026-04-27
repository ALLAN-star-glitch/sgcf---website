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
  const [loading, setLoading] = useState(true);

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
            setLoading(false);
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

    // Check for iframe to hide loading
    const check = setInterval(() => {
      const iframe = formContainerRef.current?.querySelector("iframe");
      if (iframe) {
        setLoading(false);
        clearInterval(check);
      }
    }, 200);

    // Fallback timeout - 8 seconds
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(check);
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 py-4 sm:py-6 bg-white rounded-lg shadow-md">
      {/* Mobile-optimized heading */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center sm:text-left">
        Request Information
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center sm:text-left">
        Interested in joining Africana College? Fill out this form and our admissions team will contact you.
      </p>
      
      {/* Loading Spinner - Mobile optimized */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-8 sm:py-12">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <div className="absolute inset-0 rounded-full border-3 sm:border-4 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-3 sm:border-4 border-orange-600 border-t-transparent animate-spin"></div>
          </div>
          <p className="mt-3 sm:mt-4 text-gray-500 text-xs sm:text-sm">Loading form...</p>
        </div>
      )}
      
      {/* HubSpot Form Container - Mobile optimized */}
      <div 
        id="hubspot-form-container"
        ref={formContainerRef}
        className="hs-form-frame w-full"
        data-region="eu1"
        data-form-id="8d0817d9-373a-4a01-a512-234d542fab1e"
        data-portal-id="144428117"
        style={{ display: loading ? "none" : "block" }}
      />
      
      {/* Mobile-optimized disclaimer */}
      <div className="mt-4 sm:mt-6 text-xs text-gray-400 text-center px-2">
        By submitting this form, you agree to receive communication from Africana College of Professionals about programs, events, and admissions.
      </div>

      {/* Mobile-specific CSS to make HubSpot form responsive */}
      <style jsx global>{`
        /* Make HubSpot form fully responsive on mobile */
        @media (max-width: 768px) {
          .hs-form-frame iframe {
            width: 100% !important;
            min-width: unset !important;
          }
          
          /* Target HubSpot form inputs */
          .hs-form-frame .hs-input {
            width: 100% !important;
            max-width: 100% !important;
            font-size: 16px !important; /* Prevents zoom on iOS */
            padding: 12px 10px !important;
          }
          
          /* Make form fields stack properly */
          .hs-form-frame .form-columns-2 .hs-form-field {
            width: 100% !important;
            float: none !important;
            margin-bottom: 15px !important;
          }
          
          /* Adjust button size for mobile */
          .hs-form-frame .hs-button {
            width: 100% !important;
            padding: 14px 20px !important;
            font-size: 16px !important;
            text-align: center !important;
          }
          
          /* Reduce padding on mobile */
          .hs-form-frame form {
            padding: 5px !important;
          }
          
          /* Make labels readable on mobile */
          .hs-form-frame label {
            font-size: 14px !important;
            margin-bottom: 5px !important;
            display: block !important;
          }
          
          /* Adjust error messages for mobile */
          .hs-form-frame .hs-error-msg {
            font-size: 12px !important;
          }
          
          /* Make submit button full width and sticky on mobile */
          @media (max-width: 640px) {
            .hs-form-frame .hs_submit {
              position: sticky;
              bottom: 10px;
              z-index: 10;
            }
            
            .hs-form-frame .hs-button {
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            }
          }
        }
        
        /* Desktop optimizations */
        @media (min-width: 769px) {
          .hs-form-frame .hs-input {
            padding: 10px 12px !important;
          }
          
          .hs-form-frame .hs-button {
            padding: 12px 24px !important;
            font-size: 16px !important;
          }
        }
        
        /* General HubSpot form styling */
        .hs-form-frame .hs-input {
          border: 1px solid #e2e8f0 !important;
          border-radius: 8px !important;
          transition: all 0.2s ease !important;
          background-color: #fff !important;
        }
        
        .hs-form-frame .hs-input:focus {
          border-color: #f97316 !important;
          outline: none !important;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1) !important;
        }
        
        .hs-form-frame .hs-button {
          background: linear-gradient(135deg, #f97316 0%, #9333ea 100%) !important;
          border: none !important;
          border-radius: 8px !important;
          font-weight: 600 !important;
          cursor: pointer !important;
          transition: transform 0.2s ease, opacity 0.2s ease !important;
        }
        
        .hs-form-frame .hs-button:hover {
          opacity: 0.9 !important;
          transform: translateY(-1px) !important;
        }
        
        .hs-form-frame .hs-error-msg {
          color: #ef4444 !important;
          font-size: 12px !important;
          margin-top: 4px !important;
        }
        
        .hs-form-frame .hs-form-field {
          margin-bottom: 15px !important;
        }
        
        .hs-form-frame label {
          font-weight: 500 !important;
          color: #374151 !important;
          margin-bottom: 6px !important;
        }
        
        .hs-form-frame .hs-form-required {
          color: #ef4444 !important;
        }
      `}</style>
    </div>
  );
}