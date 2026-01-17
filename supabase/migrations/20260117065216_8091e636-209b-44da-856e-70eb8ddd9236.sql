-- Drop the overly permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;

-- Create a more restrictive INSERT policy that still allows public submissions
-- but ensures the data being inserted is properly structured
CREATE POLICY "Public can submit contact form with valid data"
ON public.contact_submissions
FOR INSERT
TO public
WITH CHECK (
  -- Ensure required fields are not empty
  length(trim(name)) > 0 AND
  length(trim(email)) > 0 AND
  length(trim(phone)) > 0 AND
  length(trim(company)) > 0 AND
  length(trim(message)) > 0 AND
  -- Limit field lengths to prevent abuse
  length(name) <= 100 AND
  length(email) <= 255 AND
  length(phone) <= 20 AND
  length(company) <= 200 AND
  length(message) <= 2000 AND
  -- Basic email format validation
  email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
);