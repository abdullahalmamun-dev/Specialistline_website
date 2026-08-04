"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { submitInquiry } from "../actions/inquiry";

export default function InquiryForm() {
  const [state, formAction, isPending] = useActionState(submitInquiry, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast.success("We received your query successfully.", {
        description: "One of our customer opt-in executives will contact you soon.",
        duration: 6000,
      });
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
          is not a condition of purchase. Message frequency varies. Message and
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
