export interface SidebarItemType {
  to: string;
  text: string;
  translationNs?: string;
  authOnly?: boolean;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}
