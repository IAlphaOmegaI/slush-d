import { cn } from "@zenncore/utils";

export namespace Radient {
  export type Props = {
    className?: string;
  };
}
export const Radient = ({ className }: Radient.Props) => {
  return (
    <div
      className={cn(
        "absolute inset-0 aspect-[1.3] h-auto w-screen bg-radial from-primary/30 to-primary/0 blur-3xl",
        className,
      )}
    />
  );
};
