'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { DEFAULT_COLORS, ColorScheme } from '@/lib/colorContext';

function DesignerContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [colors, setColors] = useState<ColorScheme>(DEFAULT_COLORS);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Load colors from URL parameters
    const params = Object.fromEntries(searchParams);
    
    setColors({
      primaryBackground: params.pb || DEFAULT_COLORS.primaryBackground,
      secondaryBackground: params.sb || DEFAULT_COLORS.secondaryBackground,
      bodyText: params.bt || DEFAULT_COLORS.bodyText,
      titleText: params.tt || DEFAULT_COLORS.titleText,
      emphasizedBackground: params.eb || DEFAULT_COLORS.emphasizedBackground,
    });
  }, [searchParams]);

  const handleColorChange = (key: keyof ColorScheme, value: string) => {
    const newColors = { ...colors, [key]: value };
    setColors(newColors);
    updateURL(newColors);
  };

  const updateURL = (colorScheme: ColorScheme) => {
    const params = new URLSearchParams({
      pb: colorScheme.primaryBackground,
      sb: colorScheme.secondaryBackground,
      bt: colorScheme.bodyText,
      tt: colorScheme.titleText,
      eb: colorScheme.emphasizedBackground,
    });
    
    window.history.replaceState(null, '', `/designer?${params.toString()}`);
  };

  const resetToDefaults = () => {
    setColors(DEFAULT_COLORS);
    updateURL(DEFAULT_COLORS);
  };

  const getPreviewURL = () => {
    const params = new URLSearchParams({
      pb: colors.primaryBackground,
      sb: colors.secondaryBackground,
      bt: colors.bodyText,
      tt: colors.titleText,
      eb: colors.emphasizedBackground,
    });
    return `/?${params.toString()}`;
  };

  const copyToClipboard = () => {
    const previewURL = new URL(getPreviewURL(), window.location.origin).toString();
    navigator.clipboard.writeText(previewURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const ColorInput = ({
    label,
    value,
    onChange,
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
  }) => {
    const [tempValue, setTempValue] = useState(value);

    return (
      <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
        <div className="flex-1">
          <label className="text-sm font-semibold text-gray-700 block mb-2">
            {label}
          </label>
          <input
            type="text"
            value={tempValue}
            onChange={(e) => {
              setTempValue(e.target.value);

              // verify that the value is a valid hex color
              if (!/^#([0-9A-Fa-f]{3}){2}$/.test(e.target.value)) {
                return;
              }
              onChange(e.target.value)
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-mono"
            placeholder="#000000"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-12 h-12 cursor-pointer rounded border-2 border-gray-300"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">🎨 Designer Mode</h1>
          <p className="text-gray-600">
            Customize the color scheme and see the preview live
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <ColorInput
            label="Primary Background (alternate sections)"
            value={colors.primaryBackground}
            onChange={(value) => handleColorChange('primaryBackground', value)}
          />
          
          <ColorInput
            label="Secondary Background (main sections)"
            value={colors.secondaryBackground}
            onChange={(value) => handleColorChange('secondaryBackground', value)}
          />
          
          <ColorInput
            label="Body Text Color"
            value={colors.bodyText}
            onChange={(value) => handleColorChange('bodyText', value)}
          />
          
          <ColorInput
            label="Title Text Color"
            value={colors.titleText}
            onChange={(value) => handleColorChange('titleText', value)}
          />
          
          <ColorInput
            label="Emphasized Background (cards, buttons)"
            value={colors.emphasizedBackground}
            onChange={(value) => handleColorChange('emphasizedBackground', value)}
          />
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={resetToDefaults}
            className="flex-1 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-lg transition"
          >
            Reset to Defaults
          </button>
          
          <button
            onClick={copyToClipboard}
            className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
          >
            {copied ? '✓ Copied!' : 'Copy Preview URL'}
          </button>
        </div>

        <div className="mb-8">
          <a
            href={getPreviewURL()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
          >
            Open Preview →
          </a>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Color Preview</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600">Primary Background</p>
              <div
                className="h-20 rounded-lg border-2 border-gray-300"
                style={{ backgroundColor: colors.primaryBackground }}
              />
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600">Secondary Background</p>
              <div
                className="h-20 rounded-lg border-2 border-gray-300"
                style={{ backgroundColor: colors.secondaryBackground }}
              />
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600">Emphasized Background</p>
              <div
                className="h-20 rounded-lg border-2 border-gray-300"
                style={{ backgroundColor: colors.emphasizedBackground }}
              />
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600">Text Preview</p>
              <div
                className="h-20 rounded-lg border-2 border-gray-300 p-4 flex flex-col justify-between"
                style={{ backgroundColor: colors.secondaryBackground }}
              >
                <p style={{ color: colors.titleText }} className="font-bold">
                  Title
                </p>
                <p style={{ color: colors.bodyText }}>Body</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DesignerPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white p-8 flex items-center justify-center">Loading...</div>}>
      <DesignerContent />
    </Suspense>
  );
}
