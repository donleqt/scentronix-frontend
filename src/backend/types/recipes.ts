export type Recipe = {
  id: string;
  title: string;
  description: string;
  yield: string;
  imageUrl: string;
  steps: {
    duration: string;
    description: string;
  }[];
};
