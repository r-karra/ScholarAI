"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Database,
  BrainCircuit,
  GanttChart,
  Code2,
  MessagesSquare,
  GraduationCap,
  TrendingUp,
  BookText,
  Rss,
  School,
  ChevronDown,
  PlusCircle,
  FileText,
  Upload,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SidebarHeader, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "./ui/sidebar";

const mainNav = [
  { name: "Home", href: "/home", icon: Home },
  { name: "Datasets", href: "/datasets", icon: Database },
  { name: "Models", href: "/models", icon: BrainCircuit },
  { name: "Benchmarks", href: "/benchmarks", icon: GanttChart },
  { name: "Code", href: "/code", icon: Code2 },
  { name: "Discussions", href: "/discussions", icon: MessagesSquare },
  { name: "Learn", href: "/learn", icon: GraduationCap },
];

const moreNav = [
  { name: "Progression", href: "#", icon: TrendingUp },
  { name: "Documentation", href: "#", icon: BookText },
  { name: "Blog", href: "#", icon: Rss },
  { name: "Educator Resources", href: "#", icon: School },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader className="p-4 space-y-4">
        <div className="flex items-center gap-2">
          <Icons.logo className="h-8 w-8 text-primary" />
          <span className="text-xl font-headline font-semibold">ScholarAI</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full justify-start font-medium">
              <PlusCircle className="mr-2 h-4 w-4" /> Create
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuItem>
              <FileText className="mr-2 h-4 w-4" />
              Notebook
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Upload className="mr-2 h-4 w-4" />
              Import Notebook
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Database className="mr-2 h-4 w-4" />
              Dataset
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BrainCircuit className="mr-2 h-4 w-4" />
              Model
            </DropdownMenuItem>
            <DropdownMenuItem>
              <GanttChart className="mr-2 h-4 w-4" />
              Benchmark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {mainNav.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton 
                  asChild 
                  isActive={pathname === item.href}
                  className={cn(
                    "w-full transition-colors",
                    pathname === item.href && "bg-primary/10 text-primary hover:bg-primary/15"
                  )}
                >
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            
            <Collapsible className="w-full group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="w-full justify-between">
                    <div className="flex items-center gap-2">
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                      <span>More</span>
                    </div>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 ml-6 mt-1">
                  {moreNav.map((item) => (
                    <SidebarMenuButton key={item.name} asChild className="h-8">
                      <Link href={item.href} className="text-muted-foreground hover:text-primary">
                        <item.icon className="h-3.5 w-3.5" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  ))}
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </>
  );
}
