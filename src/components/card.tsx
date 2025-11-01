'use client';

import React from 'react';

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
  seeMoreColor
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className="flex-shrink-0 overflow-hidden"
      style={{
        backgroundColor,
        borderRadius: '16px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        cursor: onClick ? 'pointer' : 'default',
        width: '100%'
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
        <div className="flex items-center gap-3 mb-2">
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
            className="mb-3"
            style={{
              fontSize: '16px',
              color: bodyColor,
              lineHeight: '1.5',
              display: '-webkit-box',
              WebkitLineClamp: 5,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {description}
          </p>
        )}
        
        {showMore && (
          <div
            className="font-bold"
            style={{
              fontSize: '20px',
              color: seeMoreColor,
              textDecoration: 'underline'
            }}
          >
            Show More
          </div>
        )}
      </div>
    </div>
  );
};
