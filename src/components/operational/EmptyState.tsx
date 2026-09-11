import { Info } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  message?: string;
}

export function EmptyState({ 
  title = "Source connection pending", 
  message = "Operational intelligence for this view will appear when the relevant source is connected." 
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-border rounded-xl bg-muted/5 text-center">
      <div className="w-12 h-12 bg-muted/10 rounded-full flex items-center justify-center mb-4">
        <Info className="w-6 h-6 text-muted-foreground" />
      </div>
      {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
      <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
        {message}
      </p>
    </div>
  );
}
