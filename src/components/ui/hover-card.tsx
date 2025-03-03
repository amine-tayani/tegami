import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <AnimatePresence>
      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content
          data-slot="hover-card-content"
          align={align}
          sideOffset={sideOffset}
          className="z-50"
          asChild
          {...props}
        >
          <motion.div
            initial={{ x: -2, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{
              type: "spring",
              visualDuration: 0.5,
            }}
            className={cn(
              "bg-popover text-popover-foreground w-64 rounded-md border p-4 shadow-md outline-hidden",
              className
            )}
          >
            {props.children}
          </motion.div>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </AnimatePresence>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };
