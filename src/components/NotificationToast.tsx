// src/components/NotificationToast.tsx
import React, { useState, useEffect } from 'react';
import { X, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NotificationToastProps {
  message: string;
  type?: 'info' | 'success' | 'warning' | 'urgent';
  autoClose?: boolean;
  autoCloseDelay?: number;
  link?: {
    text: string;
    url: string;
  };
}

const NotificationToast: React.FC<NotificationToastProps> = ({ 
  message, 
  type = 'info',
  autoClose = false,
  autoCloseDelay = 5000,
  link
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Controlla se la notifica è già stata chiusa in questa sessione
    const wasClosed = sessionStorage.getItem('notificationClosed');
    
    if (wasClosed !== 'true') {
      // Mostra la notifica immediatamente se non è stata chiusa
      setIsVisible(true);

      // Auto-chiudi se abilitato
      if (autoClose) {
        const closeTimer = setTimeout(() => {
          handleClose();
        }, autoCloseDelay);
        
        return () => clearTimeout(closeTimer);
      }
    }
  }, [autoClose, autoCloseDelay]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('notificationClosed', 'true');
    }, 300);
  };

  if (!isVisible) return null;

  const styles = {
    info: {
      border: 'border-violet-500/30',
      glow: 'shadow-violet-500/20',
      iconBg: 'bg-violet-500/20',
      iconColor: 'text-violet-400',
      textColor: 'text-violet-400'
    },
    success: {
      border: 'border-violet-500/30',
      glow: 'shadow-violet-500/20',
      iconBg: 'bg-violet-500/20',
      iconColor: 'text-violet-400',
      textColor: 'text-violet-400'
    },
    warning: {
      border: 'border-violet-500/30',
      glow: 'shadow-violet-500/20',
      iconBg: 'bg-violet-500/20',
      iconColor: 'text-violet-400',
      textColor: 'text-violet-400'
    },
    urgent: {
      border: 'border-violet-500/30',
      glow: 'shadow-violet-500/20',
      iconBg: 'bg-violet-500/20',
      iconColor: 'text-violet-400',
      textColor: 'text-violet-400'
    }
  };

  const currentStyle = styles[type];

  return (
    <>
      <div 
        className={`
          fixed bottom-6 left-6 z-[9999]
          max-w-md w-[calc(100vw-3rem)] sm:w-96
          ${isClosing ? 'animate-slideOut' : 'animate-slideIn'}
        `}
      >
        <div 
          className={`
            relative
            backdrop-blur-xl bg-background/80
            border ${currentStyle.border}
            rounded-2xl
            shadow-2xl ${currentStyle.glow}
            p-4
            overflow-hidden
          `}
          style={{ isolation: 'isolate' }}
        >
          {/* Effetto liquid glass - bolle animate con sfumature viola */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-20 h-20 bg-violet-500/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-500/8 rounded-full blur-2xl animate-floatDelay"></div>
          </div>
          
          {/* Linea superiore luminosa viola */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"></div>
          
          {/* Contenuto */}
          <div className="relative z-10 flex items-start gap-3">
            <div className={`flex-shrink-0 p-2 ${currentStyle.iconBg} rounded-lg`}>
              <Bell className={`w-5 h-5 ${currentStyle.iconColor} animate-wiggle`} />
            </div>
            <div className="flex-1 pt-1">
              <p className={`text-sm md:text-base font-medium ${currentStyle.textColor} leading-relaxed`}>
                {message}
                {link && (
                  <>
                    {' '}
                    <Link 
                      to={link.url}
                      className="underline hover:text-violet-300 transition-colors duration-200 font-semibold"
                      onClick={() => {
                        // Chiudi la notifica quando si clicca sul link
                        handleClose();
                      }}
                    >
                      {link.text}
                    </Link>
                  </>
                )}
              </p>
            </div>
            <button
              onClick={handleClose}
              className="flex-shrink-0 text-violet-400/60 hover:text-violet-300 transition-colors duration-200 p-1 hover:bg-violet-500/10 rounded-lg"
              aria-label="Chiudi notifica"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Linea inferiore luminosa viola */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"></div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { 
            transform: translateX(-100%) translateY(20px);
            opacity: 0;
          }
          to { 
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOut {
          from { 
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          to { 
            transform: translateX(-100%) translateY(20px);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0) scale(1);
          }
          50% { 
            transform: translateY(-10px) translateX(5px) scale(1.1);
          }
        }
        
        @keyframes floatDelay {
          0%, 100% { 
            transform: translateY(0) translateX(0) scale(1);
          }
          50% { 
            transform: translateY(10px) translateX(-5px) scale(1.05);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .animate-slideOut {
          animation: slideOut 0.3s ease-in-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-floatDelay {
          animation: floatDelay 8s ease-in-out infinite;
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        
        .animate-wiggle {
          animation: wiggle 1s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default NotificationToast;