import type { Icon, IconProps } from "./types";

export const PathIcon = ({ title, ...props }: IconProps): React.JSX.Element => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 3.25C4.5 2.83579 4.83579 2.5 5.25 2.5H12.875C14.6012 2.5 16 3.89879 16 5.625C16 7.35121 14.6012 8.75 12.875 8.75H5.125C4.22721 8.75 3.5 9.47721 3.5 10.375C3.5 11.2728 4.22721 12 5.125 12H8.75C9.16421 12 9.5 12.3358 9.5 12.75C9.5 13.1642 9.16421 13.5 8.75 13.5H5.125C3.39879 13.5 2 12.1012 2 10.375C2 8.64879 3.39879 7.25 5.125 7.25H12.875C13.7728 7.25 14.5 6.52279 14.5 5.625C14.5 4.72721 13.7728 4 12.875 4H5.25C4.83579 4 4.5 3.66421 4.5 3.25Z"
          fill="currentColor"
          fillOpacity=".4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 12.75C10.5 11.2307 11.7313 10 13.25 10C14.7687 10 16 11.2307 16 12.75C16 14.2693 14.7687 15.5 13.25 15.5C11.7313 15.5 10.5 14.2693 10.5 12.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
