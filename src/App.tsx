import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import LoginScreen from "./components/LoginScreen";
import AdminDashboard from "./components/AdminDashboard";
import OperationalDashboard from "./components/OperationalDashboard";
import { AnimatePresence, motion } from "motion/react";

type View = "welcome" | "login" | "admin" | "staff";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("welcome");

  const handleLogout = () => setCurrentView("login");

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {currentView === "welcome" && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WelcomeScreen onNext={() => setCurrentView("login")} />
          </motion.div>
        )}

        {currentView === "login" && (
          <motion.div
            key="login"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <LoginScreen onLogin={(role) => setCurrentView(role)} />
          </motion.div>
        )}

        {currentView === "admin" && (
          <motion.div
            key="admin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AdminDashboard onLogout={handleLogout} />
          </motion.div>
        )}

        {currentView === "staff" && (
          <motion.div
            key="staff"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <OperationalDashboard onLogout={handleLogout} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

