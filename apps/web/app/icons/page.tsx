'use client'
import * as icons from "@pooya-poi/vectonents";

export default function Home() {

  const iconEntries = Object.entries(icons);

  const iconVariants: { [key: string]: string[] } = {
    ArrowDown: ['filled', 'outlined', 'filled-1', 'outlined-1'],
    Sort: ['filled', 'outlined', 'filled-1', 'outlined-1'],
    AirpodCase: ['filled', 'outlined', 'filled-1', 'outlined-1'],
    Speaker: ['filled', 'outlined', 'filled-1', 'outlined-1'],
    Watch: ['filled', 'outlined', 'filled-r', 'outlined-r'],
    Document: ['filled', 'filled-1', 'filled-2', 'filled-3', 'outlined', 'outlined-1', 'outlined-2', 'outlined-3'],
    Brush: ['filled', 'filled-1', 'outlined', 'outlined-1'],
    Crop: ['filled', 'filled-1', 'outlined', 'outlined-1'],
    Chat: ['filled', 'filled-1', 'filled-2', 'outlined', 'outlined-1', 'outlined-2'],
    Filter: ['filled', 'filled-1', 'filled-2', 'outlined', 'outlined-1', 'outlined-2'],
    Menu: ['filled', 'filled-1', 'filled-2', 'outlined', 'outlined-1', 'outlined-2'],
    Grid: ['filled', 'filled-1', 'filled-2', 'filled-3', 'filled-4', 'filled-5', 'filled-6', 'filled-7', 'outlined', 'outlined-1', 'outlined-2', 'outlined-3', 'outlined-4', 'outlined-5', 'outlined-6', 'outlined-7'],

    // Add more icons and their variants as needed
  };


  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {iconEntries.map(([name, IconComponent]) => {
        // Get the variants for the current icon from the manual mapping
        const variants = iconVariants[name] || ['filled', 'outlined']; // Fallback to default variants

        return (
          <div key={name} style={{ textAlign: 'center', border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '16px', fontSize: '16px', color: '#333' }}>{name}</h3>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              {/* Render each variant */}
              {variants.map((variant) => (
                <div key={variant}>
                  <div style={{ marginBottom: '8px' }}>
                    <IconComponent size={32} variants={variant as 'filled' | 'outlined'} />
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>{variant}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}


