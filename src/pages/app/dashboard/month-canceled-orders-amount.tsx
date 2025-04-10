import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthCanceledOrdersAmountCard() {
  return (
    <Card className="gap-0">
      <CardHeader className="flex items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Cancelamentos (mês)</CardTitle>
        <DollarSign className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="">
        <span className="text-2xl font-bold tracking-tight">32</span>
        <p className="text-muted-foreground text-xs">
          <span className="text-emerald-500 dark:text-emerald-400">-2%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
}
