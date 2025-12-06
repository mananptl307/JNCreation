import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Urban Courtyard Housing",
    category: "Residential",
    year: "2023",
    location: "Copenhagen, Denmark",
    description: "A sustainable housing project focusing on open courtyards and natural light. The design prioritizes community interaction while maintaining individual privacy through strategic geometric layering.",
    media: [
      {
        type: 'image',
        // Fallback to Unsplash for demo
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop', 
        alt: 'Main courtyard view'
      },
      {
        type: 'video',
        // Reliable sample video
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 
        alt: 'Walkthrough'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
        alt: 'Interior living space'
      }
    ]
  },
  {
    id: 2,
    title: "Minimalist Library",
    category: "Public",
    year: "2024",
    location: "Kyoto, Japan",
    description: "A modern library design with neutral tones and open spaces. The structure utilizes raw concrete and light oak wood to create a serene environment for study and contemplation.",
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop',
        alt: 'Library exterior'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop',
        alt: 'Reading room'
      }
    ]
  },
  {
    id: 3,
    title: "The Glass Pavilion",
    category: "Commercial",
    year: "2022",
    location: "Seattle, USA",
    description: "An office space designed to blur the boundary between workspace and nature. Floor-to-ceiling glass panels ensure maximum daylight penetration.",
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
        alt: 'Pavilion wide shot'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
        alt: 'Meeting area'
      }
    ]
  }
];

export const NAV_LINKS = [
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];