import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const datasets = [
  {
    name: "CIFAR-100 Image Dataset",
    owner: "Alex Krizhevsky",
    size: "163 MB",
    files: 2,
    updated: "3 years ago",
    usability: "10.0",
    image: PlaceHolderImages.find((img) => img.id === "dataset-1"),
  },
  {
    name: "New York City Taxi Trip Data",
    owner: "NYC Taxi & Limousine Commission",
    size: "21.3 GB",
    files: 20,
    updated: "1 month ago",
    usability: "9.7",
    image: PlaceHolderImages.find((img) => img.id === "dataset-2"),
  },
  {
    name: "Breast Cancer Wisconsin (Diagnostic)",
    owner: "UCI Machine Learning",
    size: "122 KB",
    files: 1,
    updated: "5 years ago",
    usability: "10.0",
    image: PlaceHolderImages.find((img) => img.id === "dataset-3"),
  },
];

export default function DatasetsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold tracking-tight">
          Datasets
        </h1>
        <p className="text-muted-foreground">
          Browse and search for datasets to use in your projects.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search datasets..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[400px]">Dataset</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Usability</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {datasets.map((dataset) => (
              <TableRow key={dataset.name}>
                <TableCell>
                  <div className="flex items-center gap-4">
                    {dataset.image && (
                      <Image
                        src={dataset.image.imageUrl}
                        alt={dataset.image.description}
                        width={64}
                        height={64}
                        className="rounded-md object-cover h-16 w-16"
                        data-ai-hint={dataset.image.imageHint}
                      />
                    )}
                    <div>
                      <div className="font-medium">{dataset.name}</div>
                      <div className="text-sm text-muted-foreground">
                        by {dataset.owner}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {dataset.size} ({dataset.files} files)
                </TableCell>
                <TableCell>{dataset.updated}</TableCell>
                <TableCell className="text-right">
                  <Badge variant="secondary">{dataset.usability}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
