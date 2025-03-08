export type Experience = {
  id: number;
  position: string;
  company: string;
  description?: string;
  accomplishments?: {
    topic: string;
    description: string;
  }[];
  skills: string[];
  startDate: string;
  endDate?: string;
  noDeveloper?: boolean;
};
