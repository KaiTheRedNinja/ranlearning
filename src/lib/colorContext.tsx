'use client';

import React, { createContext, useContext, useMemo } from 'react';

export type ColorScheme = {
  primaryBackground: string;      // Main section background (e.g., #f5f5f5)
  secondaryBackground: string;    // Alternative section background (e.g., #ffffff)
  bodyText: string;               // Body text color
  titleText: string;              // Title text color
  emphasizedBackground: string;   // Card and button backgrounds (e.g., #ECB34F)
};

const DEFAULT_COLORS: ColorScheme = {
  primaryBackground: '#f5f5f5',
  secondaryBackground: '#E9E7ED',
  bodyText: '#464856',
  titleText: '#2C3A7C',
  emphasizedBackground: '#F1CD71',
};

type ColorContextType = {
  colors: ColorScheme;
  isCustom: boolean;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({
  children,
  colors: customColors,
}: {
  children: React.ReactNode;
  colors?: Partial<ColorScheme>;
}) {
  const colors = useMemo(
    () => ({
      ...DEFAULT_COLORS,
      ...customColors,
    }),
    [customColors]
  );

  const isCustom = !!(customColors && Object.keys(customColors).length > 0);

  return (
    <ColorContext.Provider value={{ colors, isCustom }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColors(): ColorScheme {
  const context = useContext(ColorContext);
  if (context === undefined) {
    return DEFAULT_COLORS;
  }
  return context.colors;
}

export function useIsCustomColors(): boolean {
  const context = useContext(ColorContext);
  if (context === undefined) {
    return false;
  }
  return context.isCustom;
}

export { DEFAULT_COLORS };
