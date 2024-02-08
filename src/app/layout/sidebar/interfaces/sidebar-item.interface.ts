export interface ISidebarItem {
  icon: string;
  name: string;
  route: string;
  children?: ISidebarItem[];

  onClick(): void;
}