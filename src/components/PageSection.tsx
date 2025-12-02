import React, { ReactNode } from 'react';
import ScrollAnimation from './ScrollAnimation';

interface SectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
  badge?: string;
  badgeColor?: string; // accent color class
  layout?: 'default' | 'centered' | 'compact';
  className?: string;
}

const PageSection: React.FC<SectionProps> = ({
  title,
  subtitle,
  description,
  children,
  badge,
  badgeColor = 'text-accent',
  layout = 'default',
  className = '',
}) => {
  const layoutClasses = {
    default: 'py-20 md:py-28',
    centered: 'py-20 md:py-28 text-center',
    compact: 'py-12 md:py-16',
  };

  return (
    <section className={`relative overflow-hidden ${layoutClasses[layout]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <ScrollAnimation>
          {/* Header */}
          <div className={`mb-16 md:mb-20 ${layout === 'centered' ? 'mx-auto max-w-3xl' : ''}`}>
            {/* Badge */}
            {badge && (
              <div className={`inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4 ${badgeColor}`}>
                {badge}
              </div>
            )}

            {/* Title */}
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 ${
              subtitle ? 'mb-2 md:mb-3' : ''
            }`}>
              <span className="block text-primary">{title}</span>
              {subtitle && (
                <span className="block text-accent">{subtitle}</span>
              )}
            </h2>

            {/* Description */}
            {description && (
              <p className={`text-lg text-secondary leading-relaxed ${
                layout === 'centered' ? 'mx-auto' : ''
              }`}>
                {description}
              </p>
            )}
          </div>
        </ScrollAnimation>

        {/* Content */}
        {children}
      </div>
    </section>
  );
};

export default PageSection;
