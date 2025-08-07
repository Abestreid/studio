
"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Palette, X } from "lucide-react";
import { cn } from "@/lib/utils";

type ThemeKey = "tendersoft" | "rednet" | "rednet2";

export function ThemeSwitcher() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeKey>("tendersoft");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = (localStorage.getItem("theme") as ThemeKey) || "tendersoft";
    setTheme(savedTheme);
  }, []);

  const applyTheme = (themeName: ThemeKey) => {
    const root = document.documentElement;
    root.classList.remove("theme-rednet", "theme-rednet2");
    if (themeName === "rednet") {
      root.classList.add("theme-rednet");
    } else if (themeName === "rednet2") {
      root.classList.add("theme-rednet2");
    }
  };
  
  useEffect(() => {
    if (isMounted) {
      applyTheme(theme);
    }
  }, [theme, isMounted]);

  const toggleTheme = (newTheme: ThemeKey) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new Event("storage"));
  };

  if (!isMounted) {
    return null;
  }

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
            Tendersoft (BY)
          </Button>
          <Button
            onClick={() => toggleTheme("rednet")}
            size="sm"
            variant={theme === "rednet" ? "default" : "outline"}
          >
            redneT (KZ)
          </Button>
           <Button
            onClick={() => toggleTheme("rednet2")}
            size="sm"
            variant={theme === "rednet2" ? "default" : "outline"}
          >
            redneT (KZ) 2
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
