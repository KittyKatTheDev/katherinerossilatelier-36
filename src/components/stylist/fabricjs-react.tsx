
import { useEffect, useRef, useState } from 'react';
import { Canvas, Circle, Rect } from 'fabric';
import * as fabric from 'fabric';

export interface FabricJSEditor {
  canvas: fabric.Canvas;
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
    
    const canvas = new fabric.Canvas(canvasEl.current);
    const setCurrentDimensions = () => {
      if (canvasElParent.current) {
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
    
    if (onReady) {
      onReady(canvas);
    }

    return () => {
      canvas.dispose();
      if (canvasElParent.current) {
        resizeObserver.unobserve(canvasElParent.current);
      }
    };
  }, []);

  return (
    <div ref={canvasElParent} className={className} style={{ width: '100%', height: '100%' }}>
      <canvas ref={canvasEl} />
    </div>
  );
};

export const useFabricJSEditor = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const editor = useRef<FabricJSEditor>({} as FabricJSEditor);

  const onReady = (canvas: fabric.Canvas) => {
    setCanvas(canvas);
    editor.current.canvas = canvas;
    editor.current.addCircle = () => {
      const circle = new fabric.Circle({
        radius: 50,
        fill: 'transparent',
        stroke: '#000000',
        strokeWidth: 1,
      });
      canvas.add(circle);
    };
    editor.current.addRectangle = () => {
      const rect = new fabric.Rect({
        width: 100,
        height: 100,
        fill: 'transparent',
        stroke: '#000000',
        strokeWidth: 1,
      });
      canvas.add(rect);
    };
    editor.current.updateColor = (color: string) => {
      const activeObjects = canvas.getActiveObjects();
      if (activeObjects.length > 0) {
        activeObjects.forEach((obj) => {
          obj.set('stroke', color);
        });
        canvas.renderAll();
      }
    };
    editor.current.deleteAll = () => {
      canvas.clear();
    };
    editor.current.deleteSelected = () => {
      const activeObjects = canvas.getActiveObjects();
      if (activeObjects.length > 0) {
        activeObjects.forEach((obj) => {
          canvas.remove(obj);
        });
        canvas.discardActiveObject();
        canvas.renderAll();
      }
    };
  };

  return { editor: editor.current, onReady };
};
