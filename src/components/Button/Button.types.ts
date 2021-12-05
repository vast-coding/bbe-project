export type IButtonProps = React.PropsWithChildren<{
  srcUrl?: string;
  color?: string;
  onClick?: (e: React.MouseEvent<any>) => void;
  isActive?: boolean;
  size?: number;
}>;
