export interface MenuItem {
  href: string;
  text: string;
  public?: boolean;
}

export interface Breakpoints {
  large: string;
  medium: string;
  small: string;
}

export interface SessionInfo {
  time: string;
  title: string;
  speaker: string;
}
