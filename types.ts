export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  alt?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  location: string;
  media: ProjectMedia[];
}