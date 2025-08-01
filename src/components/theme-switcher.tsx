
"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Palette, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("tendersoft");
  const [isOpen, setIsOpen] = useState(false);

  // This function will apply the correct class to the document
  const applyTheme = (themeName: string) => {
    // First, remove all possible theme classes
    document.documentElement.classList.remove("theme-rednet", "theme-rednet2");
    // Then, add the correct class if it's not the default
    if (themeName === "rednet" || themeName === "rednet2") {
      document.documentElement.classList.add(themeName);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "tendersoft";
    setTheme(savedTheme);
    applyTheme(savedTheme);

    const handleStorageChange = () => {
      const currentTheme = localStorage.getItem('theme') || 'tendersoft';
      setTheme(currentTheme);
      applyTheme(currentTheme);
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
    // Dispatch a storage event to notify other components like the header
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="bg-card p-4 rounded-lg shadow-lg border mb-2 flex flex-col gap-2">
          <h4 className="font-semibold text-sm text-center">Сменить тему</h4>
          <Button
            onClick={() => toggleTheme("tendersoft")}
            size="sm"
            variant={theme === "tendersoft" ? "default" : "outline"}
            className={cn(theme === 'tendersoft' && 'bg-primary text-primary-foreground')}
          >
            Tendersoft (KZ)
          </Button>
          <Button
            onClick={() => toggleTheme("rednet")}
            size="sm"
            variant={theme === "rednet" ? "default" : "outline"}
          >
            redneT (BY)
          </Button>
           <Button
            onClick={() => toggleTheme("rednet2")}
            size="sm"
            variant={theme === "rednet2" ? "default" : "outline"}
          >
            redneT (BY) 2
          </Button>
        </div>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="rounded-full shadow-lg"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Palette className="w-5 h-5" />}
      </Button>
    </div>
  );
}
