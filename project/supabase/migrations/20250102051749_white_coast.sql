/*
  # Create properties table

  1. New Tables
    - `properties`
      - `id` (uuid, primary key)
      - `created_at` (timestamp with timezone)
      - `title` (text, required)
      - `description` (text)
      - `location` (text, required)
      - `price` (text, required)
      - `type` (text, required)
      - `beds` (integer)
      - `baths` (integer)
      - `area` (text)
      - `image` (text, required)

  2. Security
    - Enable RLS on properties table
    - Add policies for public read access
*/

CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
  description text,
  location text NOT NULL,
  price text NOT NULL,
  type text NOT NULL,
  beds integer,
  baths integer,
  area text,
  image text NOT NULL
);

-- Enable Row Level Security
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON properties
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to insert properties
CREATE POLICY "Allow authenticated insert"
  ON properties
  FOR INSERT
  TO authenticated
  WITH CHECK (true);