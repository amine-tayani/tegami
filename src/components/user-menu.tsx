import { Button } from "./ui/button";

import { Bookmark, Globe, Moon, Settings, UserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="overflow-hidden rounded-full ml-2"
        >
          <UserRound size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="end"
        className="max-w-80 min-w-56 bg-menu-background mt-1.5"
      >
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-base font-medium">
            mitomaru x
          </span>
          <span className="text-muted-foreground truncate font-normal">
            orochi.hyakkimaru@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Bookmark className="opacity-60 size-5" />
            <span className="text-base text-primary/85 font-semibold">
              Saved
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Globe className="opacity-60 size-5" />
            <span className="text-base text-primary/85 font-semibold">
              Community
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="opacity-60 size-5" />
            <span className="text-base text-primary/85 font-semibold">
              Settings
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Moon className="opacity-60 size-5" />
            <span className="text-base text-primary/85 font-semibold">
              Theme
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span className="text-base text-primary/85 font-semibold ">
              Pricing
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="text-base text-primary/85 font-semibold ">
              Changelog
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="text-base text-primary/85 font-semibold ">
              Blog
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="text-base text-primary/85 font-semibold ">
              Support
            </span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span className="text-base text-primary/85 font-semibold ">
              Logout
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
