import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import LoginScreen from "./components/LoginScreen";
import AdminDashboard from "./components/AdminDashboard";
import OperationalDashboard from "./components/OperationalDashboard";
import { AnimatePresence, motion } from "motion/react";
import { IMAGES } from "./constants";

type View = "welcome" | "login" | "admin" | "staff";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("welcome");

  const handleLogout = () => setCurrentView("login");

  const isAuthView = currentView === "welcome" || currentView === "login";

  return (
    <div className="min-h-screen bg-bg-deep selection:bg-accent selection:text-bg-deep">
      {/* Shared Background for Auth Views */}
      <AnimatePresence>
        {isAuthView && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-0 overflow-hidden"
          >
            <motion.img 
              initial={{ scale: 1 }}
              animate={{ scale: currentView === 'login' ? 1.05 : 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              src={IMAGES.WELCOME_BG} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#020617]/85 backdrop-blur-[6px]"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isAuthView ? (
          <motion.div
            key="auth-container"
            className="relative z-10 flex min-h-screen items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-full max-w-2xl relative perspective-1000">
               <AnimatePresence mode="wait">
                  {currentView === "welcome" ? (
                    <motion.div
                      key="welcome-panel"
                      initial={{ opacity: 0, x: -30, rotateY: -10 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      exit={{ opacity: 0, x: 30, rotateY: 10 }}
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <WelcomeScreen onNext={() => setCurrentView("login")} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="login-panel"
                      initial={{ opacity: 0, x: 30, rotateY: 10 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      exit={{ opacity: 0, x: -30, rotateY: -10 }}
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <LoginScreen onLogin={(role) => setCurrentView(role)} />
                    </motion.div>
                  )}
               </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          <>
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
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

