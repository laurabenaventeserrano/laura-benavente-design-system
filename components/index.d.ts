import * as React from 'react';

/** One size for all three levels: 44px high, 0 22px padding, Roboto 13px/500. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary: white fill, prism border, inverts on hover. secondary: paper-inset fill, prism border. tertiary: text link with a prism-sm underline on hover. */
  level?: 'primary' | 'secondary' | 'tertiary';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  /** Optional trailing icon (an <img> of an Icons asset). */
  icon?: React.ReactNode;
  children: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;

/** 1px prism border, page fill, 2px radius, 16px padding. */
export interface CardProps {
  /** Image URL; shown 4:3 on the panel colour. */
  media?: string;
  mediaAlt?: string;
  /** Mono kicker above the title. */
  kicker?: React.ReactNode;
  /** Serif title. */
  title?: React.ReactNode;
  /** Mono meta line at the bottom. */
  meta?: React.ReactNode;
  /** Makes the whole card a link. */
  href?: string;
  /** Body copy. */
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;

/** Roboto Mono uppercase. */
export interface LabelProps {
  /** kicker: 12px, .2em. meta: 11px, .16em. */
  variant?: 'kicker' | 'meta';
  /** Element to render. Default p. */
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}
export declare function Label(props: LabelProps): JSX.Element;

/** Mono 10px, .12em, uppercase, 1px hairline border, 2px radius. */
export interface TagProps { children: React.ReactNode; }
export declare function Tag(props: TagProps): JSX.Element;

/** The prism as a 1px line. */
export interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  /** Four-stop prism-sm, for lines under ~120px. */
  short?: boolean;
  /** Neutral line-default instead of the prism. */
  neutral?: boolean;
  style?: React.CSSProperties;
}
export declare function Separator(props: SeparatorProps): JSX.Element;

/** A list whose rows are separated by 1px prism lines (top of each row, plus one under the last). */
export interface RowListProps { children: React.ReactNode; }
export declare function RowList(props: RowListProps): JSX.Element;

/** Segmented view switch ("Full story / In brief"). */
export interface SwitchProps {
  options: Array<string | { value: string; label: React.ReactNode }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Accessible group name. Default "View". */
  label?: string;
}
export declare function Switch(props: SwitchProps): JSX.Element;

/** The wordmark: Libertinus Serif 20px, .01em. */
export interface LogoProps { href?: string; children?: React.ReactNode; }
export declare function Logo(props: LogoProps): JSX.Element;

/** The favicon mark: prism ring and dot. */
export interface MarkProps { size?: number; label?: string; }
export declare function Mark(props: MarkProps): JSX.Element;

/** Static rendering of the custom cursor. */
export interface CursorProps {
  /** rest: 7px dot in a 40px prism ring. link: the phrase tag. */
  state?: 'rest' | 'link';
  /** The phrase shown in the link state: "Say hi", "Go check!", "Meet the AI". */
  label?: string;
}
export declare function Cursor(props: CursorProps): JSX.Element;
