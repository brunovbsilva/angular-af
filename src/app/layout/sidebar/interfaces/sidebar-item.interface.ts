export interface ISidebarItem {
  title: string;
  route: string;
  children?: ISidebarItem[];

  onClick(): void;
}