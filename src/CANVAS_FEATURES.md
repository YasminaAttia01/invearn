# INVEARN Interactive Canvas Features

## Overview

The INVEARN website features a custom-built interactive particle system using native HTML5 Canvas API, providing stunning visual effects without external 3D library dependencies.

## Key Features

### 🌌 Interactive Particle System
- **2000+ Dynamic Particles** - Responsive particle count based on screen size
- **Mouse Interaction** - Particles react to mouse movements with repulsion effects
- **Wave Animation** - Smooth sinusoidal motion for organic movement
- **Return Force** - Particles naturally return to original positions
- **Velocity Damping** - Smooth, physics-based motion

### 🎨 Visual Effects
- **Gradient Colors** - Blue to turquoise color palette (#00d4ff, #0ea5e9, #38bdf8, #06b6d4)
- **Particle Glow** - Radial gradients for enhanced visual depth
- **Connection Lines** - Dynamic lines between nearby particles
- **Fade Trails** - Motion blur effect for smooth animations

### 📐 Geometric Shapes
- **Rotating Hexagons** - Three animated hexagonal wireframes
- **Pulsing Circles** - Breathing circle animations
- **Layered Design** - Multiple depth layers for 3D effect

### ⚡ Performance Optimizations
- **RequestAnimationFrame** - Smooth 60 FPS animations
- **Adaptive Particle Count** - Scales with screen size
- **Optimized Rendering** - Connection lines drawn at 30 FPS
- **Edge Wrapping** - Efficient particle recycling
- **Canvas Clearing** - Fade effect instead of full clear

## Technical Implementation

### Canvas Setup
```typescript
- Native HTML5 Canvas API
- 2D rendering context
- Full viewport coverage
- Responsive resizing
```

### Particle Properties
```typescript
interface Particle {
  x, y: number          // Current position
  vx, vy: number        // Velocity
  originalX, originalY  // Home position
  size: number          // Particle radius
  color: string         // RGB color
  angle: number         // Wave animation phase
}
```

### Animation Loop
1. Clear canvas with fade effect
2. Update particle physics
3. Apply mouse repulsion
4. Apply return force
5. Add wave motion
6. Draw particles with glow
7. Draw connection lines
8. Draw geometric shapes
9. Request next frame

## Mouse Interaction

### Repulsion System
- **Detection Radius**: 150px
- **Force Calculation**: Inverse distance
- **Smooth Falloff**: Gradual force reduction
- **Multi-directional**: X and Y axis repulsion

### Physics Simulation
- **Damping**: 0.95 coefficient for smooth deceleration
- **Return Force**: 0.01 coefficient for gentle repositioning
- **Wave Amplitude**: 0.5 pixel maximum oscillation

## Performance Metrics

- **Target FPS**: 60
- **Particle Count**: 2000 (adaptive)
- **Canvas Resolution**: Native device pixels
- **Memory Usage**: Optimized with object pooling
- **Browser Compatibility**: All modern browsers

## Color Scheme

### Primary Colors
- `#00d4ff` - Bright cyan (primary brand)
- `#0ea5e9` - Sky blue (accent)
- `#38bdf8` - Light blue (highlight)
- `#06b6d4` - Turquoise (complement)

### Background Gradient
- Top: `#0a0e27` (dark navy)
- Bottom: `#1e3a8a` (royal blue)

## User Experience

### Interactive Features
- **Immediate Response** - Mouse tracking with no lag
- **Visual Feedback** - Particles visibly react to cursor
- **Smooth Animations** - 60 FPS performance
- **Responsive Design** - Adapts to all screen sizes

### Accessibility
- **No Flashing** - Smooth gradual animations
- **Performance Mode** - Adaptive particle count
- **Motion Safe** - Respects user preferences
- **Keyboard Navigation** - Focus on content

## Integration

The Canvas background integrates seamlessly with:
- ✅ React component lifecycle
- ✅ Scroll-based sections
- ✅ Navigation overlay
- ✅ Performance monitoring
- ✅ Scene controls
- ✅ Mobile devices

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers
- ✅ iPad/Tablet devices

## Future Enhancements

Possible additions:
- Touch gesture support
- WebGL acceleration
- Particle trails
- Audio reactivity
- Theme switching
- Particle shapes (triangles, squares)

---

**Built with native Canvas API for maximum compatibility and performance.**
