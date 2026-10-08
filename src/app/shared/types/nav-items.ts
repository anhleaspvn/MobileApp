export interface NavItem {
    id: string;
    title: string;
    routerLink?: string,
    icon: NavIcon,
    iconName?: string;
    color?: string;
  }
  
  interface NavIcon {
    name: string;
    color: string;
    fontSize?: string;
  }