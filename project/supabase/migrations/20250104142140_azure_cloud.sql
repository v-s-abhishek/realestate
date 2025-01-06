/*
  # Update RLS policies for properties table

  1. Changes
    - Update RLS policies to allow public access for both read and write operations
    - This is suitable for a demo/prototype. For production, implement proper authentication

  2. Security Notes
    - These policies allow anyone to read and write properties
    - In production, implement user authentication and restrict write access to authenticated users
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Allow public read access" ON properties;
DROP POLICY IF EXISTS "Allow authenticated insert" ON properties;

-- Create new policies for public access
CREATE POLICY "Allow public read access"
ON properties
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow public insert"
ON properties
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow public update"
ON properties
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow public delete"
ON properties
FOR DELETE
TO public
USING (true);