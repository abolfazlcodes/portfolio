export type ResponseData = {
  name: string;
  email: string;
  date: string;
  message: string;
};

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  link: string;
  video: string;
  tag: string;
}
