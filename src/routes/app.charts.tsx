import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { TrendingUp, TrendingDown, Maximize2, Download, Pencil, LineChart as LineIcon, CandlestickChart, Activity } from "lucide-react";

export const Route = createFileRoute("/app/charts")({
  head: () => ({ meta: [{ title: "Charts — Digittool" }] }),
  component: Charts;
});
