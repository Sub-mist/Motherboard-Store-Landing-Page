import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Particles = ({ total, className = "bg-primary" }) => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFramesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    particlesRef.current.forEach(particle => {
      if (particle.element && particle.element.parentNode) {
        particle.element.parentNode.removeChild(particle.element);
      }
      if (particle.animationId) {
        cancelAnimationFrame(particle.animationId);
      }
    });
    particlesRef.current = [];
    container.innerHTML = '';

    for (let i = 0; i < total; i++) {
      const particle = document.createElement('div');
      particle.className = `absolute rounded-full pointer-events-none ${className}`;
      particle.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all 0.1s ease-out;
      `;
      
      container.appendChild(particle);
      
      const particleData = {
        element: particle,
        animationId: null,
        targetX: 50,
        targetY: 50,
        targetSize: 50,
        targetOpacity: 0.5,
        currentX: 50,
        currentY: 50,
        currentSize: 8,
        currentOpacity: 0,
        animationStart: 0,
        animationDuration: 1000
      };
      
      particlesRef.current.push(particleData);
    }

    const animate = (timestamp) => {
      particlesRef.current.forEach((particle, index) => {
        if (!particle.element.parentNode) return;

        const progress = Math.min((timestamp - particle.animationStart) / particle.animationDuration, 1);
        
        if (progress >= 1) {
          particle.targetX = Math.random() * 95 + 2.5;
          particle.targetY = Math.random() * 95 + 2.5;
          particle.targetSize = Math.random() * 28 + 8;
          particle.targetOpacity = Math.random() * 0.7 + 0.1;
          particle.animationStart = timestamp;
          particle.animationDuration = Math.random() * 2000 + 1000;
          
          particle.currentX = parseFloat(particle.element.style.left) || 50;
          particle.currentY = parseFloat(particle.element.style.top) || 50;
          particle.currentSize = parseFloat(particle.element.style.width) || 4;
          particle.currentOpacity = parseFloat(particle.element.style.opacity) || 0;
        } else {

          const easeOut = 1 - Math.pow(1 - progress, 3);
          
          const x = particle.currentX + (particle.targetX - particle.currentX) * easeOut;
          const y = particle.currentY + (particle.targetY - particle.currentY) * easeOut;
          const size = particle.currentSize + (particle.targetSize - particle.currentSize) * easeOut;
          const opacity = particle.currentOpacity + (particle.targetOpacity - particle.currentOpacity) * easeOut;
          
          particle.element.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            opacity: ${opacity};
            pointer-events: none;
            transform: translate(-50%, -50%);
            transition: none;
          `;
        }
      });

      const animationId = requestAnimationFrame(animate);
      animationFramesRef.current.push(animationId);
    };

    requestAnimationFrame(animate);

    return () => {
      animationFramesRef.current.forEach(id => cancelAnimationFrame(id));
      animationFramesRef.current = [];
      particlesRef.current.forEach(particle => {
        if (particle.element && particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element);
        }
      });
      particlesRef.current = [];
    };
      }, [total, className]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ zIndex: 0 }}
    />
  );
};

Particles.propTypes = {
  total: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Particles;