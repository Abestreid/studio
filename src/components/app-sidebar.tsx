'use client';

import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  Search,
  Star,
  Save,
  Bell,
  Settings,
  LifeBuoy,
} from 'lucide-react';
import { Logo } from '@/components/icons';
import { usePathname } from 'next/navigation';

export function AppSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      href: '/',
      label: 'Инф. панель',
      icon: LayoutDashboard,
    },
    {
      href: '/search',
      label: 'Умный поиск',
      icon: Search,
    },
    {
      href: '/favorites',
      label: 'Избранное',
      icon: Star,
    },
    {
      href: '/filters',
      label: 'Фильтры',
      icon: Save,
    },
    {
      href: '/notifications',
      label: 'Уведомления',
      icon: Bell,
    },
  ];

  return (
    <Sidebar collapsible="icon" variant="sidebar" side="left" className="border-r border-sidebar-border">
      <SidebarHeader className="h-16 flex items-center p-4">
        <div className="flex items-center gap-2">
          <Logo className="size-7 text-sidebar-primary" />
          <span className="text-lg font-semibold text-sidebar-foreground">
            Tendersoft
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="flex-1 p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                // A real app would use the router to navigate
                // For this demo, we'll just check the active state
                isActive={pathname === item.href}
                tooltip={{
                  children: item.label,
                }}
              >
                <a href="#">
                  <item.icon />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip={{ children: 'Поддержка' }}>
              <a href="#">
                <LifeBuoy />
                <span>Поддержка</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip={{ children: 'Настройки' }}>
              <a href="#">
                <Settings />
                <span>Настройки</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
