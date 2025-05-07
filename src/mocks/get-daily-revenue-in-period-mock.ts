import { http, HttpResponse } from "msw";
import { GetDailyRevenueInPeriodResponse } from "@/api/get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("metrics/daily-receipt-in-period", () => {
  return HttpResponse.json([
    { date: "2023-10-01", receipt: 1000 },
    { date: "2023-10-02", receipt: 2000 },
    { date: "2023-10-03", receipt: 1500 },
    { date: "2023-10-04", receipt: 3000 },
    { date: "2023-10-05", receipt: 2500 },
    { date: "2023-10-06", receipt: 4000 },
    { date: "2023-10-07", receipt: 3500 },
  ]);
});
