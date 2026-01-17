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
    <nav className="flex flex-col h-full text-sm font-medium p-2">
      <div className="flex items-center gap-2 px-2 py-4">
        <Icons.logo className="h-8 w-8 text-primary" />
        <span className="text-lg font-headline font-semibold">ScholarAI</span>
      </div>
      <div className="px-2 pb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" /> Create
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
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
            <DropdownMenuItem>
              <GanttChart className="mr-2 h-4 w-4" />
              Benchmark Task
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex-1 space-y-1">
        {mainNav.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              pathname === item.href && "bg-muted text-primary"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        ))}
        <Collapsible className="w-full">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 rounded-lg px-3 text-muted-foreground"
            >
              <ChevronDown className="h-4 w-4" />
              More
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 ml-7">
            {moreNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                  pathname === item.href && "bg-muted text-primary"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </nav>
  );
}
