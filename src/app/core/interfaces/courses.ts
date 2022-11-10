export interface Courses {
  name: string;
  date: string;
  description: string;
  id?: number;
  isTopRated?: boolean;
  authors?: [
    {
      id: number;
      name: string;
      latname: string;
    }
  ];
  length: number;
}
