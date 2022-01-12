type ImageContent = {
  'Poster Art': { url: string; width: number; height: number };
};

type ProgramTypeContent = 'series' | 'movie';

type MediaContent = {
  title: string;
  description: string;
  programType: ProgramTypeContent;
  images: ImageContent;
  releaseYear: number;
};

export type { MediaContent, ProgramTypeContent };
