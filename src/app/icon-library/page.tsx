
'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as LucideIcons from 'lucide-react';

const iconUsages: Record<string, (keyof typeof LucideIcons)[]> = {
  "/src/app/analytics/page.tsx": ["BookOpen", "FileDown", "Filter", "Save", "Search", "Map"],
  "/src/app/blog/[slug]/page.tsx": ["ArrowLeft", "Calendar", "User"],
  "/src/app/blog/page.tsx": ["ArrowRight", "Calendar", "User", "Search", "Rss"],
  "/src/app/favorites/page.tsx": ["ListFilter", "Search", "FileX2", "User"],
  "/src/app/help/page.tsx": ["LifeBuoy", "Book", "BarChart3", "Video", "HelpCircle", "Search"],
  "/src/app/home2/page.tsx (via components)": ["UserCircle", "LogOut", "Menu", "Check", "Building", "Truck", "ShieldCheck", "PenTool", "HardHat", "Wrench", "FileWarning", "Clock", "BarChart", "XCircle", "CheckCircle2", "Award"],
  "/src/app/style-guide/page.tsx": ["Terminal", "LogOut", "UserCircle", "Check", "User", "FileX2"],
  "/src/app/templates/new/page.tsx": ["Search", "Save", "Trash2", "Bell", "BookOpen", "ArrowLeft"],
  "/src/app/templates/page.tsx": ["PlusCircle", "Bell", "BookOpen", "HelpCircle", "FileSearch", "Pencil", "Copy", "Mail", "Trash2", "Power", "FileClock", "UserPlus", "Clock"],
  "/src/app/tender/[id]/page.tsx": ["Star", "ArrowLeft", "CheckCircle", "FileText", "Download", "Link", "Lock", "Calendar", "Clock", "MapPin", "Building", "DollarSign", "ClipboardList", "User", "Phone", "Mail", "LocateFixed", "Info", "Banknote", "Briefcase", "FileBadge", "Code2", "Wallet", "CalendarCheck", "Building2"],
  "/src/components/landing/benefits.tsx": ["Bot", "Filter", "DatabaseZap", "UserPlus", "SlidersHorizontal", "Bell"],
  "/src/components/landing/features.tsx": ["Check"],
  "/src/components/landing/footer.tsx": ["MapPin", "Phone", "Mail", "ChevronRight"],
  "/src/components/landing/growth.tsx": ["Database", "Clock", "Users", "Building"],
  "/src/components/landing/header.tsx": ["UserCircle", "LogOut", "Menu"],
  "/src/components/landing/hero.tsx": ["Search", "SlidersHorizontal", "Trash2", "X"],
  "/src/components/landing/how-it-works.tsx": ["Search", "Bell", "BarChart", "Users"],
  "/src/components/landing/system-features.tsx": ["Briefcase", "BarChart3", "BellRing", "Target", "Scale", "ShieldCheck", "HelpCircle"],
  "/src/components/okrb-tree.tsx": ["ChevronDown", "ChevronRight"],
  "/src/components/theme-switcher.tsx": ["Palette", "X"],
  "/src/components/ui/accordion.tsx": ["ChevronDown"],
  "/src/components/ui/dialog.tsx": ["X"],
  "/src/components/ui/dropdown-menu.tsx": ["Check", "ChevronRight", "Circle"],
  "/src/components/ui/navigation-menu.tsx": ["ChevronDown"],
  "/src/components/ui/select.tsx": ["Check", "ChevronDown", "ChevronUp"],
  "/src/components/ui/sheet.tsx": ["X"],
  "/src/components/ui/sidebar.tsx": ["PanelLeft"],
  "/src/components/ui/toast.tsx": ["X"]
};

export default function IconLibraryPage() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 sm:py-12 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary">Библиотека иконок</h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Все иконки, используемые в приложении, сгруппированные по файлам.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(iconUsages).map(([filePath, icons]) => (
              <Card key={filePath}>
                <CardHeader>
                  <CardTitle className="text-lg text-primary truncate">{filePath}</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  {icons.map((iconName) => {
                    const IconComponent = LucideIcons[iconName] as React.ElementType;
                    return (
                      <div key={iconName} className="flex items-center gap-2">
                        {IconComponent ? <IconComponent className="w-5 h-5 text-accent" /> : null}
                        <span className="text-sm">{iconName}</span>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
