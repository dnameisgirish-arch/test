import React from 'react';

    const Visualizer: React.FC = () => {
      const barCount = 40;
      const bars = Array.from({ length: barCount }, (_, i) => i);

      const colors = [
        '#e53935', '#f44336', '#ff5722', '#ff9800', '#ffc107', '#cddc39',
        '#4caf50', '#009688', '#00bcd4', '#2196f3', '#673ab7', '#9c27b0',
        '#e91e63', '#f06292', '#90a4ae', '#795548', '#607d8b', '#000000'
      ];

      return (
        <div className="flex items-end justify-center overflow-hidden w-full">
          {bars.map((index) => {
            const colorIndex = index % colors.length;
            return (
              <div
                key={index}
                className="w-2 h-16 mx-0.5 rounded-sm"
                style={{
                  backgroundColor: colors[colorIndex],
                  animationDelay: `${index * 0.05}s`,
                  animation: 'visualizer 1s infinite ease-in-out',
                }}
              />
            );
          })}
        </div>
      );
    };

    export default Visualizer;
