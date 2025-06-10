import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMediaQuery } from "@/hooks/use-mobile"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("pb-12", className)} ref={ref} {...props} />
))
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 py-6", className)}
    {...props}
  />
))
SidebarHeader.displayName = "SidebarHeader"

const SidebarHeaderTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("px-7 text-lg font-semibold tracking-tight", className)}
    {...props}
  />
))
SidebarHeaderTitle.displayName = "SidebarHeaderTitle"

const SidebarHeaderDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("px-7 text-sm text-muted-foreground", className)}
    {...props}
  />
))
SidebarHeaderDescription.displayName = "SidebarHeaderDescription"

const sidebarItemVariants = cva(
  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
        active:
          "bg-accent text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface SidebarItemProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof sidebarItemVariants> {
  icon?: React.ReactNode
}

const SidebarItem = React.forwardRef<HTMLAnchorElement, SidebarItemProps>(
  ({ className, variant, icon, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(sidebarItemVariants({ variant }), className)}
        {...props}
      >
        {icon && <span className="w-4 h-4">{icon}</span>}
        <span>{props.children}</span>
      </a>
    )
  }
)
SidebarItem.displayName = "SidebarItem"

const SidebarItems = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1 py-2",
      className
    )}
    {...props}
  />
))
SidebarItems.displayName = "SidebarItems"

const SidebarItemsTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("px-3 py-2 text-sm font-medium text-foreground", className)}
    {...props}
  />
))
SidebarItemsTitle.displayName = "SidebarItemsTitle"

const SidebarScroll = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ScrollArea>
>(({ className, ...props }, ref) => (
  <ScrollArea
    ref={ref}
    className={cn("h-[calc(100vh-8rem)]", className)}
    {...props}
  />
))
SidebarScroll.displayName = "SidebarScroll"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-auto flex items-center justify-between p-4", className)}
    {...props}
  />
))
SidebarFooter.displayName = "SidebarFooter"

const SidebarToggle = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  if (!isMobile) return null;
  
  return (
    <button
      ref={ref}
      className={cn(
        "absolute right-2 top-2 h-8 w-8 rounded-md border text-muted-foreground",
        className
      )}
      {...props}
    />
  );
})
SidebarToggle.displayName = "SidebarToggle"

export {
  Sidebar,
  SidebarHeader,
  SidebarHeaderTitle,
  SidebarHeaderDescription,
  SidebarItem,
  SidebarItems,
  SidebarItemsTitle,
  SidebarScroll,
  SidebarFooter,
  SidebarToggle,
}
