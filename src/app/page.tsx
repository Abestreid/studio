import { AppHeader } from '@/components/app-header';
import { AppSidebar } from '@/components/app-sidebar';
import { SearchSection } from '@/components/search-section';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col min-h-svh">
          <AppHeader />
          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <SearchSection />
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
