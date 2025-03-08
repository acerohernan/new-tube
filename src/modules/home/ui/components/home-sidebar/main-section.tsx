"use client";

import React from "react";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useClerk } from "@clerk/nextjs";
import { useAuth } from "@clerk/clerk-react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Subscriptions",
    url: "/feed/subscriptions",
    icon: PlaySquareIcon,
    auth: true,
  },
  {
    title: "Trending",
    url: "/feed/trending",
    icon: FlameIcon,
  },
];

export const MainSection = (): React.ReactElement => {
  const clerk = useClerk();
  const { isSignedIn } = useAuth();

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuButton
              asChild
              isActive={false}
              onClick={(e) => {
                // If the route requires authentication and the user is not signed in, open the sign in modal
                if (!isSignedIn && item.auth) {
                  e.preventDefault();
                  clerk.openSignIn();
                }
              }}
              key={`sidebar-item-${item.title}`}
            >
              <Link href={item.url} className="flex items-center gap-4">
                <item.icon />
                <span className="text-sm">{item.title}</span>
              </Link>
            </SidebarMenuButton>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
