import { useState } from "react";
import emailjs from "@emailjs/browser";

function  useContactForm  ()  {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (formData) => {
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      await emailjs.send(
        "service_9i1j5cc", // Replace with your EmailJS Service ID
        "template_s0keyms", // Replace with your EmailJS Template ID
        formData,
        "iCFp2PqYRBcwrFB8B" // Replace with your EmailJS Public Key
      );
      setSuccess(true);
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Failed to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, success, error };
};

export default useContactForm;
