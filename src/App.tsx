import SiteHeader from "./components/site-header";
import UnderlineTabs from "./components/underline-tabs";

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
      <main className="flex grow flex-col">
        <div className="z-0 flex flex-col gap-y-5 px-8 lg:px-36 pt-8">
          <h1 className="text-4xl leading-11 tracking-tight font-bold md:text-5xl">
            Discover
          </h1>
          <UnderlineTabs />
        </div>
      </main>
    </div>
  );
}
