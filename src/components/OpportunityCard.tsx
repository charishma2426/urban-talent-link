import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign } from "lucide-react";

interface OpportunityCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  category: string;
}

export const OpportunityCard = ({
  title,
  company,
  location,
  type,
  salary,
  category,
}: OpportunityCardProps) => {
  return (
    <Card className="hover:shadow-[0_4px_20px_hsl(12_76%_61%/0.15)] transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary">{category}</Badge>
          <Badge variant="outline">{type}</Badge>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{company}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{type}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            <span>{salary}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="default">
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
};
