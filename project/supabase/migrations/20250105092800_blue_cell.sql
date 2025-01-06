/*
  # Add Property Details Columns
  
  1. New Columns
    - `additional_images` (jsonb) - Store additional property images with descriptions
    - `amenities` (text) - List of property amenities
    - `year_built` (text) - Year the property was built
    - `furnishing` (text) - Furnishing status
    - `parking` (text) - Parking details
    - `availability` (text) - Property availability status
  
  2. Changes
    - Add new columns to properties table
    - All columns are nullable to maintain compatibility
*/

ALTER TABLE properties 
  ADD COLUMN IF NOT EXISTS additional_images jsonb DEFAULT '[]',
  ADD COLUMN IF NOT EXISTS amenities text,
  ADD COLUMN IF NOT EXISTS year_built text,
  ADD COLUMN IF NOT EXISTS furnishing text,
  ADD COLUMN IF NOT EXISTS parking text,
  ADD COLUMN IF NOT EXISTS availability text;