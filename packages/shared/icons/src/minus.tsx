import type { Icon, IconProps } from "./types";

export const MinusIcon = ({
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
          d="M3.25 9H14.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
