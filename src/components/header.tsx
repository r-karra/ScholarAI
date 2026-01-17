import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { UserNav } from "@/components/user-nav";
import {
  FileText,
  Database,
  BrainCircuit,
  GanttChart,
  PlusCircle,
  Upload,
} from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex-1" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Create
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
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
      <UserNav />
    </header>
  );
}
