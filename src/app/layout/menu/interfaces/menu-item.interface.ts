export interface IMenuItem {
  icon: string;
  name: string;
  route: string;
  
  active(): void;
}