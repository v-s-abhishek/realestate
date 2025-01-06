/*
  # Add social media links to properties

  1. Changes
    - Add social_media column to properties table to store social media links
*/

ALTER TABLE properties 
ADD COLUMN IF NOT EXISTS social_media jsonb DEFAULT '[]'::jsonb;