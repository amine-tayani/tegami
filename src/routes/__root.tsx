import SiteHeader from "@/components/site-header";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div>
      <SiteHeader />
      <Outlet />
    </div>
  ),
});
