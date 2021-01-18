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
  sessionNumber: string;
  title: string;
  speaker: string;
}
