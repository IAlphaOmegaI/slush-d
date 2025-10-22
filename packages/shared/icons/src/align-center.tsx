import type { Icon, IconProps } from "./types";

export const AlignCenterIcon = ({
  title,
  ...props
}: IconProps): React.JSX.Element => {
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
          d="M15.2501 15H2.75012C2.33602 15 2.00012 14.6641 2.00012 14.25C2.00012 13.8359 2.33602 13.5 2.75012 13.5H15.2501C15.6642 13.5 16.0001 13.8359 16.0001 14.25C16.0001 14.6641 15.6642 15 15.2501 15Z"
          fill="currentColor"
        />
        <path
          d="M15.2501 4.5H2.75012C2.33602 4.5 2.00012 4.1641 2.00012 3.75C2.00012 3.3359 2.33602 3 2.75012 3H15.2501C15.6642 3 16.0001 3.3359 16.0001 3.75C16.0001 4.1641 15.6642 4.5 15.2501 4.5Z"
          fill="currentColor"
        />
        <path
          opacity=".4"
          d="M11.7501 9.75H6.25012C5.83602 9.75 5.50012 9.4141 5.50012 9C5.50012 8.5859 5.83602 8.25 6.25012 8.25H11.7501C12.1642 8.25 12.5001 8.5859 12.5001 9C12.5001 9.4141 12.1642 9.75 11.7501 9.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
