-- Block anonymous/public SELECT access on contact_submissions
-- The existing policy only covers 'authenticated' role, leaving anonymous access open
CREATE POLICY "Block anonymous reads on contact_submissions"
ON public.contact_submissions
FOR SELECT
TO anon
USING (false);

-- Block anonymous/public SELECT access on user_roles
CREATE POLICY "Block anonymous reads on user_roles"
ON public.user_roles
FOR SELECT
TO anon
USING (false);