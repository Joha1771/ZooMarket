// ═══════════════════════════════════════════════════════════════════════════════
// REDUX & REACT ECOSYSTEM — MAIN INDEX
// ═══════════════════════════════════════════════════════════════════════════════

import { RtkBasicsExplain } from "./Content/RtkBasics";
import { RtkThunkExplain } from "./Content/RtkThunk";
import { RtkQueryExplain } from "./Content/RtkQuery";
import { ZustandExplain } from "./Content/Zustand";
import { ProtectedExplain } from "./Content/ProtectedRoutes";
import { ValidationExplain } from "./Content/Validation";
import { UiLibsExplain } from "./Content/UiLibs";
import { SwaggerExplain } from "./Content/Swagger";
import { LazyExplain } from "./Content/Lazy";
import { ChartsExplain } from "./Content/Charts";
import { PaginationExplain } from "./Content/Pagination";
import { AdminPanelExplain } from "./Content/AdminPanel";
import { REDUX_CONTENT_KEYS } from "./Data/Data";

export { REDUX_CONTENT_KEYS };

export function ReduxPhaseContent({ lessonId, phaseId }) {
  const map = {
    "rtk-basics": {
      explain: <RtkBasicsExplain />,
      learn: <RtkBasicsExplain />,
    },
    "rtk-thunk": { explain: <RtkThunkExplain />, learn: <RtkThunkExplain /> },
    "rtk-query": { explain: <RtkQueryExplain />, learn: <RtkQueryExplain /> },
    zustand: { explain: <ZustandExplain />, learn: <ZustandExplain /> },
    protected: { explain: <ProtectedExplain />, learn: <ProtectedExplain /> },
    validation: {
      explain: <ValidationExplain />,
      learn: <ValidationExplain />,
    },
    "ui-libs": { explain: <UiLibsExplain />, learn: <UiLibsExplain /> },
    swagger: { explain: <SwaggerExplain />, learn: <SwaggerExplain /> },
    lazy: { explain: <LazyExplain />, learn: <LazyExplain /> },
    charts: { explain: <ChartsExplain />, learn: <ChartsExplain /> },
    pagination: {
      explain: <PaginationExplain />,
      learn: <PaginationExplain />,
    },
    admin: { explain: <AdminPanelExplain />, learn: <AdminPanelExplain /> },
  };
  return map[lessonId]?.[phaseId] ?? null;
}
