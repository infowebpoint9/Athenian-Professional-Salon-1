export interface SalonService {
  id: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  idealFor: string;
  duration?: string;
  priceNote: string;
  image: string;
  isSignature?: boolean;
  highlights?: string[];
}

export type ServiceCategory = 
  | 'hair'
  | 'skin'
  | 'makeup'
  | 'nails'
  | 'bridal';

export interface ServiceCategoryInfo {
  id: ServiceCategory;
  name: string;
  tagline: string;
  description: string;
  image: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'hair' | 'skin' | 'makeup' | 'nails' | 'bridal' | 'salon';
  image: string;
  alt: string;
  description: string;
  tag: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  serviceCategory: string;
  text: string;
  verified: boolean;
  avatarText?: string;
}

export interface WhyChoosePillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  serviceCategory: string;
  serviceName: string;
  preferredDate: string;
  preferredTimeSlot: string;
  stylistPreference?: string;
  notes?: string;
}
