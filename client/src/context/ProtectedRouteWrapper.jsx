import { AppLayout, ErrorBoundary, ProtectedRoute } from "./export";
import { Suspense } from "react";

const ProtectedRouteWrapper = () => {
  return (
    <ProtectedRoute>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <AppLayout />
        </Suspense>
      </ErrorBoundary>
    </ProtectedRoute>
  );
};
export default ProtectedRouteWrapper;
