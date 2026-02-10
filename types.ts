
export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  category: 'makeup' | 'photography' | 'video';
  title: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
