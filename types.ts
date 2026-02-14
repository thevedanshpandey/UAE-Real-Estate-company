
export interface Project {
  id: string;
  title: string;
  category: 'Dubai' | 'India' | 'Residential' | 'Commercial' | 'Institutional';
  location: string;
  imageUrl: string;
  description: string;
  sqft?: string;
  status: string;
}

export interface Associate {
  region: 'Dubai' | 'India';
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  capability: string;
  galleryUrls: string[];
}

export interface MediaStory {
  title: string;
  source: string;
  date: string;
  link: string;
  imageUrl: string;
}
