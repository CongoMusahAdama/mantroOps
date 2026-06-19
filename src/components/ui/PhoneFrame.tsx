import type { ReactNode } from "react";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
  status?: ReactNode;
};

export function PhoneFrame({ children, className = "", status }: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[17.5rem] sm:max-w-[19rem] ${className}`}>
      <div className="rounded-[2.25rem] border-[7px] border-foggy bg-foggy shadow-[0_28px_64px_-28px_rgba(79,78,79,0.35)]">
        <div className="overflow-hidden rounded-[1.65rem] bg-white">
          <div className="relative bg-foggy px-5 pt-2.5 pb-2">
            <div className="mx-auto h-5 w-[5.5rem] rounded-full bg-black/90" />
            <div className="mt-2 flex items-center justify-between px-1 text-[9px] font-medium text-white/90">
              <span>9:41</span>
              {status ?? (
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                </span>
              )}
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
