import { cn } from "@/lib/utils";
import { ReactNode } from "react";


export default function MaxWidthContainer(props: { children: ReactNode, className?: string }) {
  return (
    <div className={cn(props.className, "px-8 py-8 mx-auto max-w-[1400px]")}>
        {props.children}
    </div>
  )
}
