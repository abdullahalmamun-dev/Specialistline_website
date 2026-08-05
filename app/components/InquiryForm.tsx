"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { submitInquiry } from "../actions/inquiry";

export default function InquiryForm() {
  const [state, formAction, isPending] = useActionState(submitInquiry, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast.custom((t) => (
        <div style={{
          background: 'var(--dark, #020617)',
          color: '#fff',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          borderLeft: '4px solid var(--peach, #f4a261)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          maxWidth: '400px',
          fontFamily: 'inherit'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              background: 'var(--peach, #f4a261)',
              color: 'var(--dark, #020617)',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>✓</div>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>We received your query successfully.</h3>
          </div>
          <p style={{ margin: 0, fontSize: '14px', color: '#cbd5e1', lineHeight: '1.5', paddingLeft: '34px' }}>
            One of our customer opt-in executives will contact you soon.
          </p>
        </div>
      ), { duration: 6000 });
      formRef.current?.reset();
    } else if (state?.success === false) {
      toast.error(state.error || "Failed to submit inquiry.");
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <div className="fields">
        <label>
          First name
          <input name="firstName" required disabled={isPending} />
        </label>
        <label>
          Last name
          <input name="lastName" required disabled={isPending} />
        </label>
        <label>
          Business email
          <input type="email" name="email" required disabled={isPending} />
        </label>
        <label>
          Mobile phone
          <input type="tel" name="phone" required disabled={isPending} />
        </label>
        <label className="wide">
          Company name
          <input name="company" required disabled={isPending} />
        </label>
        <label className="wide">
          What are you looking to accomplish?
          <textarea name="goals" rows={3} disabled={isPending}></textarea>
        </label>
      </div>
      <label className="consent">
        <input type="checkbox" name="smsConsent" disabled={isPending} />
        <span>
          By checking this box, I agree to receive recurring marketing and
          informational text messages from Peachtree Capital Group LLC. Consent
          is not a condition of purchase. You may receive typically 2-4 promotional message per month. Message frequency may vary, depending on your interaction with Peachtree Capital Group.  Message and
          data rates may apply. Reply STOP to opt out or HELP for help. View
          our <a href="/terms">Terms & Conditions</a> and{" "}
          <a href="/privacy">Privacy Policy</a>.
        </span>
      </label>
      <button className="button" type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : (
          <>
            Request a consultation <span>→</span>
          </>
        )}
      </button>
    </form>
  );
}
