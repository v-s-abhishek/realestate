export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      properties: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string | null
          location: string
          price: string
          type: string
          beds: number | null
          baths: number | null
          area: string | null
          image: string
          additional_images: Json | null
          amenities: string | null
          year_built: string | null
          furnishing: string | null
          parking: string | null
          availability: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description?: string | null
          location: string
          price: string
          type: string
          beds?: number | null
          baths?: number | null
          area?: string | null
          image: string
          additional_images?: Json | null
          amenities?: string | null
          year_built?: string | null
          furnishing?: string | null
          parking?: string | null
          availability?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string | null
          location?: string
          price?: string
          type?: string
          beds?: number | null
          baths?: number | null
          area?: string | null
          image?: string
          additional_images?: Json | null
          amenities?: string | null
          year_built?: string | null
          furnishing?: string | null
          parking?: string | null
          availability?: string | null
        }
      }
      messages: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string
          message: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone: string
          message: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string
          message?: string
        }
      }
    }
  }
}