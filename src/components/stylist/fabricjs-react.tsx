
import { useEffect, useRef, useState } from 'react';
import * as fabric from 'fabric';

export interface FabricJSEditor {
  canvas: fabric.Canvas | null;
  addCircle: () => void;
  addRectangle: () => void;
  updateColor: (color: string) => void;
  deleteAll: () => void;
  deleteSelected: () => void;
}

interface FabricJSCanvasProps {
  className?: string;
  onReady?: (canvas: fabric.Canvas) => void;
}

export const FabricJSCanvas = ({ className, onReady }: FabricJSCanvasProps) => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const canvasElParent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasEl.current) return;
    
    // Create canvas with error handling
    let canvas: fabric.Canvas;
    try {
      canvas = new fabric.Canvas(canvasEl.current);
      
      const setCurrentDimensions = () => {
        if (canvasElParent.current && canvas) {
          const width = canvasElParent.current.clientWidth;
          canvas.setWidth(width);
          canvas.setHeight(width);
          canvas.renderAll();
        }
      };

      const resizeObserver = new ResizeObserver(() => {
        setCurrentDimensions();
      });

      if (canvasElParent.current) {
        resizeObserver.observe(canvasElParent.current);
      }
      
      // Initial sizing
      setCurrentDimensions();
      
      // Only call onReady when canvas is fully initialized
      if (onReady) {
        onReady(canvas);
      }
      
      return () => {
        if (canvas) {
          canvas.dispose();
        }
        if (canvasElParent.current) {
          resizeObserver.unobserve(canvasElParent.current);
        }
      };
    } catch (error) {
      console.error("Error initializing fabric canvas:", error);
      return;
    }
  }, []);

  return (
    <div ref={canvasElParent} className={className} style={{ width: '100%', height: '100%' }}>
      <canvas ref={canvasEl} />
    </div>
  );
};

export const useFabricJSEditor = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const editor = useRef<FabricJSEditor>({
    canvas: null,
    addCircle: () => {},
    addRectangle: () => {},
    updateColor: () => {},
    deleteAll: () => {},
    deleteSelected: () => {}
  });

  const onReady = (fabricCanvas: fabric.Canvas) => {
    // Ensure canvas is properly initialized
    if (!fabricCanvas) return;
    
    setCanvas(fabricCanvas);
    editor.current.canvas = fabricCanvas;
    
    // Initialize editor methods with the canvas
    editor.current.addCircle = () => {
      if (!fabricCanvas) return;
      const circle = new fabric.Circle({
        radius: 50,
        fill: 'transparent',
        stroke: '#000000',
        strokeWidth: 1,
      });
      fabricCanvas.add(circle);
    };
    
    editor.current.addRectangle = () => {
      if (!fabricCanvas) return;
      const rect = new fabric.Rect({
        width: 100,
        height: 100,
        fill: 'transparent',
        stroke: '#000000',
        strokeWidth: 1,
      });
      fabricCanvas.add(rect);
    };
    
    editor.current.updateColor = (color: string) => {
      if (!fabricCanvas) return;
      const activeObjects = fabricCanvas.getActiveObjects();
      if (activeObjects.length > 0) {
        activeObjects.forEach((obj) => {
          obj.set('stroke', color);
        });
        fabricCanvas.renderAll();
      }
    };
    
    editor.current.deleteAll = () => {
      if (!fabricCanvas) return;
      fabricCanvas.clear();
    };
    
    editor.current.deleteSelected = () => {
      if (!fabricCanvas) return;
      const activeObjects = fabricCanvas.getActiveObjects();
      if (activeObjects.length > 0) {
        activeObjects.forEach((obj) => {
          fabricCanvas.remove(obj);
        });
        fabricCanvas.discardActiveObject();
        fabricCanvas.renderAll();
      }
    };
  };

  return { editor: editor.current, onReady };
};
