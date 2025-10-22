import type { Icon, IconProps } from "./types";

export const MenuIcon = ({ title, ...props }: IconProps): React.JSX.Element => {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 18 18"
      strokeWidth="1.5"
      {...props}
    >
      {title && <title>{title}</title>}
      <g fill="currentColor">
        <path
          opacity=".4"
          d="M15.7501 8.25H2.25012C1.83602 8.25 1.50012 8.5859 1.50012 9C1.50012 9.4141 1.83602 9.75 2.25012 9.75H15.7501C16.1642 9.75 16.5001 9.4141 16.5001 9C16.5001 8.5859 16.1642 8.25 15.7501 8.25Z"
          fill="currentColor"
        />
        <path
          d="M15.7501 3H2.25012C1.83602 3 1.50012 3.3359 1.50012 3.75C1.50012 4.1641 1.83602 4.5 2.25012 4.5H15.7501C16.1642 4.5 16.5001 4.1641 16.5001 3.75C16.5001 3.3359 16.1642 3 15.7501 3Z"
          fill="currentColor"
        />
        <path
          d="M15.7501 13.5H2.25012C1.83602 13.5 1.50012 13.8359 1.50012 14.25C1.50012 14.6641 1.83602 15 2.25012 15H15.7501C16.1642 15 16.5001 14.6641 16.5001 14.25C16.5001 13.8359 16.1642 13.5 15.7501 13.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
