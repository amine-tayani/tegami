import SiteHeader from "./components/site-header";

export default function App() {
  return (
    <div>
      <SiteHeader />
      <div className="flex items-center pb-3 gap-x-6 px-8 border-b md:hidden">
        <a
          className="text-muted-foreground font-medium hover:text-foreground transition-colors ease-out focus-visible:ring-4 focus-visible:ring-blue-200/50"
          href="/browse/ios/apps"
        >
          iOS
        </a>
        <a
          className="text-muted-foreground font-medium hover:text-primary transition-colors ease-out focus-visible:ring-4 focus-visible:ring-blue-200/50"
          href="/browse/android/apps"
        >
          Android
        </a>
        <a
          className="hover:text-primary font-medium transition-colors ease-out focus-visible:ring-4 focus-visible:ring-blue-200/50"
          href="/browse/web/apps"
        >
          Web
        </a>
      </div>
    </div>
  );
}
