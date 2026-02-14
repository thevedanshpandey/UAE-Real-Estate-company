
import React from 'react';
import { Project, MediaStory } from './types';

export const THEME_COLORS = {
  gold: '#bfa06b',
  dark: '#1a1a1a',
  ivory: '#fcfbf7',
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Azure Palm Villas',
    category: 'Dubai',
    location: 'Palm Jumeirah, Dubai',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'A collection of ultra-luxury beachfront villas with bespoke architectural finishing.',
    sqft: '45,000',
    status: 'Completed'
  },
  {
    id: '2',
    title: 'Skyline Heights',
    category: 'India',
    location: 'Bangalore, India',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    description: 'A premium residential complex featuring sustainable design and world-class amenities.',
    sqft: '450,000',
    status: 'Under Construction'
  },
  {
    id: '3',
    title: 'The Marina Corporate',
    category: 'Commercial',
    location: 'Dubai Marina',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    description: 'Grade-A office spaces overlooking the Marina, setting new standards for business luxury.',
    sqft: '120,000',
    status: 'Completed'
  },
  {
    id: '4',
    title: 'Lotus Heritage',
    category: 'Residential',
    location: 'Kochi, South India',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    description: 'Heritage-inspired luxury apartments with modern smart-home integrations.',
    sqft: '200,000',
    status: 'Completed'
  }
];

export const MEDIA_STORIES: MediaStory[] = [
  {
    title: "AL Faren Redefining the Dubai Skyline",
    source: "Gulf Business",
    date: "Sept 2024",
    link: "#",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "The Rise of Masterplans in South India",
    source: "Property Times",
    date: "Aug 2024",
    link: "#",
    imageUrl: "https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?auto=format&fit=crop&q=80&w=800"
  }
];
