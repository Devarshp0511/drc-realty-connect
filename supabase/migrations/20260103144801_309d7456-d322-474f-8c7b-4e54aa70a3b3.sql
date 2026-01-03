-- Add database constraints for server-side validation on contact_submissions table
ALTER TABLE public.contact_submissions
  ADD CONSTRAINT check_name_length CHECK (char_length(name) >= 2 AND char_length(name) <= 100),
  ADD CONSTRAINT check_email_length CHECK (char_length(email) <= 255),
  ADD CONSTRAINT check_phone_format CHECK (phone ~* '^[+]?[\d\s-]{10,15}$'),
  ADD CONSTRAINT check_message_length CHECK (char_length(message) >= 10 AND char_length(message) <= 1000);