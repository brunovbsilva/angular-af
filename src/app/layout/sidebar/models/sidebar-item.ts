import { ISidebarItem } from "../interfaces/sidebar-item.interface";

export class SidebarItem implements ISidebarItem {
  title: string;
  route: string;
  children?: ISidebarItem[];

  constructor(item: ISidebarItem) {
    this.title = item.title;
    this.route = item.route;
    this.children = item.children;
  }

  onClick(): void {
    console.log('Item clicked');
  }

}