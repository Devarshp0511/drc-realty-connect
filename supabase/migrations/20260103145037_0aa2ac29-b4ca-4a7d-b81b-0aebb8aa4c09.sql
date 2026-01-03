-- Add DELETE policy to contact_submissions table
-- Only admins can delete contact form submissions
CREATE POLICY "Only admins can delete submissions"
ON public.contact_submissions
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));