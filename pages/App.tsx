
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PatientAuth from "./pages/auth/PatientAuth";
import CaretakerAuth from "./pages/auth/CaretakerAuth";
import PatientDashboard from "./pages/patient/PatientDashboard";
import CaretakerDashboard from "./pages/caretaker/CaretakerDashboard";
import SearchCaretakers from "./pages/patient/SearchCaretakers";
import Reminders from "./pages/patient/Reminders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EmergencyContacts from "./pages/patient/EmergencyContacts";
import MemoryJournal from "./pages/patient/MemoryJournal";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Auth Routes */}
            <Route path="/auth/patient" element={<PatientAuth />} />
            <Route path="/auth/caretaker" element={<CaretakerAuth />} />
            
            {/* Patient Routes */}
            <Route path="/patient/dashboard" element={<PatientDashboard />} />
            <Route path="/patient/search-caretakers" element={<SearchCaretakers />} />
            <Route path="/patient/reminders" element={<Reminders />} />
            <Route path="/patient/emergency-contacts" element={<EmergencyContacts />} />
            <Route path="/patient/memory-journal" element={<MemoryJournal />} />
            
            {/* Caretaker Routes */}
            <Route path="/caretaker/dashboard" element={<CaretakerDashboard />} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
