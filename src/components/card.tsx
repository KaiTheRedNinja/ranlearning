'use client';

import React, { useState } from 'react';

type CardProps = {
  image?: string;
  title?: React.ReactNode;
  icon?: string;
  trailingIcon?: string;
  description?: React.ReactNode;
  showMore?: boolean;
  onClick?: () => void;
  backgroundColor?: string;
  titleColor?: string;
  bodyColor?: string;
  seeMoreColor?: string;
  expandable?: boolean;
  lineClamp?: number;
};

export default function Card({
  image,
  title,
  icon,
  trailingIcon,
  description,
  showMore,
  onClick,
  backgroundColor,
  titleColor,
  bodyColor,
  seeMoreColor,
  expandable = false,
  lineClamp = 5
}: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (expandable) {
      setIsExpanded(!isExpanded);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex-shrink-0 overflow-hidden"
      style={{
        backgroundColor,
        borderRadius: '16px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        cursor: (expandable || onClick) ? 'pointer' : 'default',
        width: '100%',
        transition: 'box-shadow 0.3s ease'
      }}
    >
      {image && (
        <img
          src={image}
          alt=""
          className="w-full object-cover"
          style={{ height: '200px' }}
        />
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-3">
          {icon && (
            <img
              src={icon}
              alt=""
              className="flex-shrink-0"
              style={{ width: '32px', height: '32px' }}
            />
          )}
          
          <h2
            className="font-bold flex-1"
            style={{
              fontSize: '24px',
              color: titleColor,
              lineHeight: '1.2'
            }}
          >
            {title}
          </h2>
          
          {trailingIcon && (
            <img
              src={trailingIcon}
              alt=""
              className="flex-shrink-0"
              style={{ width: '20px', height: '20px' }}
            />
          )}
        </div>
        
        {description && (
          <p
            className="mt-3"
            style={{
              fontSize: '16px',
              color: bodyColor,
              lineHeight: '1.5',
              ...(expandable && !isExpanded ? {
                display: '-webkit-box',
                WebkitLineClamp: lineClamp,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              } : {})
            }}
          >
            {description}
          </p>
        )}
        
        {/* TODO: if we don't need to expand, don't show this */}
        {(showMore || expandable) && (
          <div
            className="font-bold mt-3"
            style={{
              fontSize: '16px',
              color: seeMoreColor || '#3b82f6',
              textDecoration: 'none'
            }}
          >
            {expandable ? (isExpanded ? '▼ Show Less' : '▶ Show More') : 'Show More'}
          </div>
        )}
      </div>
    </div>
  );
};
