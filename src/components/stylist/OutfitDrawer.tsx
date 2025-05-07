
import { useEffect, useRef, useState } from 'react';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { 
  Brush, 
  Undo, 
  Eraser, 
  Square, 
  CircleDashed, 
  Palette, 
  Download, 
  Trash2, 
  Sparkles
} from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';

interface OutfitDrawerProps {
  onGeneratedImage?: (imageUrl: string) => void;
}

const OutfitDrawer = ({ onGeneratedImage }: OutfitDrawerProps) => {
  const { editor, onReady } = useFabricJSEditor();
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [activeTab, setActiveTab] = useState<string>('draw');
  const [isDrawing, setIsDrawing] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [open, setOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { toast } = useToast();

  // Set up canvas and tools when editor is ready
  useEffect(() => {
    if (!editor) return;

    editor.canvas.setHeight(400);
    editor.canvas.setWidth(400);
    editor.canvas.setBackgroundColor('#f8f8f8', editor.canvas.renderAll.bind(editor.canvas));
    
    // Set initial brush settings
    editor.canvas.freeDrawingBrush.color = color;
    editor.canvas.freeDrawingBrush.width = brushSize;
    editor.canvas.isDrawingMode = true;
    
  }, [editor]);

  // Update brush settings when changed
  useEffect(() => {
    if (!editor) return;
    editor.canvas.freeDrawingBrush.color = color;
    editor.canvas.freeDrawingBrush.width = brushSize;
  }, [color, brushSize, editor]);

  // Toggle drawing mode based on active tab
  useEffect(() => {
    if (!editor) return;
    
    if (activeTab === 'draw') {
      editor.canvas.isDrawingMode = true;
      editor.canvas.freeDrawingBrush.color = color;
      editor.canvas.freeDrawingBrush.width = brushSize;
    } else if (activeTab === 'erase') {
      editor.canvas.isDrawingMode = true;
      editor.canvas.freeDrawingBrush.color = '#f8f8f8'; // Same as background
      editor.canvas.freeDrawingBrush.width = brushSize * 2;
    } else {
      editor.canvas.isDrawingMode = false;
    }
  }, [activeTab, editor, color, brushSize]);

  const addShape = (shape: 'rect' | 'circle') => {
    if (!editor) return;
    
    const options = {
      left: 100,
      top: 100,
      fill: 'transparent',
      stroke: color,
      strokeWidth: 2,
      width: 100,
      height: 100,
      radius: 50,
    };

    if (shape === 'rect') {
      const rect = new fabric.Rect(options);
      editor.canvas.add(rect);
      editor.canvas.setActiveObject(rect);
    } else {
      const circle = new fabric.Circle(options);
      editor.canvas.add(circle);
      editor.canvas.setActiveObject(circle);
    }
    
    editor.canvas.renderAll();
  };

  const undoAction = () => {
    if (!editor?.canvas) return;
    
    const objects = editor.canvas.getObjects();
    if (objects.length > 0) {
      const lastObject = objects[objects.length - 1];
      editor.canvas.remove(lastObject);
      editor.canvas.renderAll();
      toast({
        description: "Last action undone",
      });
    }
  };

  const clearCanvas = () => {
    if (!editor?.canvas) return;
    
    editor.canvas.clear();
    editor.canvas.setBackgroundColor('#f8f8f8', editor.canvas.renderAll.bind(editor.canvas));
    toast({
      description: "Canvas cleared",
    });
  };

  const downloadDrawing = () => {
    if (!editor?.canvas) return;
    
    const dataURL = editor.canvas.toDataURL({
      format: 'png',
      quality: 1
    });
    
    const link = document.createElement('a');
    link.download = 'outfit-sketch.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      description: "Drawing downloaded",
    });
  };

  const generateOutfitFromSketch = async () => {
    if (!editor?.canvas) return;
    
    setIsGenerating(true);
    
    try {
      // Get the canvas data URL
      const dataURL = editor.canvas.toDataURL({
        format: 'png',
        quality: 1
      });
      
      // In a real implementation, this would make an API call to an AI service
      // For now, we'll simulate the response time
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Since we don't have a real AI service, we'll just return the original sketch
      // In a real implementation, you would replace this with the URL from the AI service
      setGeneratedImage(dataURL);
      
      if (onGeneratedImage) {
        onGeneratedImage(dataURL);
      }
      
      toast({
        title: "Outfit Generated",
        description: "Your sketch has been transformed into a realistic outfit!",
      });
    } catch (error) {
      console.error("Error generating outfit:", error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "There was a problem generating your outfit. Please try again.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-brand-pink hover:bg-brand-pink/90 flex items-center gap-2 text-black">
          <Brush size={16} />
          Draw Your Own Outfit
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Design Your Own Outfit</DialogTitle>
          <DialogDescription>
            Sketch your outfit idea and our AI will convert it into reality
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="border rounded-md p-4">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-3">
                    <TabsTrigger value="draw" className="flex items-center gap-1">
                      <Brush size={14} />
                      Draw
                    </TabsTrigger>
                    <TabsTrigger value="erase" className="flex items-center gap-1">
                      <Eraser size={14} />
                      Erase
                    </TabsTrigger>
                    <TabsTrigger value="shapes" className="flex items-center gap-1">
                      <Square size={14} />
                      Shapes
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="mb-4 flex items-center gap-2">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-10 h-10 border-none p-0 bg-transparent cursor-pointer"
                  disabled={activeTab === 'erase'}
                />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">Brush Size: {brushSize}</p>
                  <Slider
                    value={[brushSize]}
                    min={1}
                    max={20}
                    step={1}
                    onValueChange={(value) => setBrushSize(value[0])}
                  />
                </div>
              </div>
              
              <div className="flex-1 border rounded-md overflow-hidden bg-gray-50 relative">
                <div 
                  id="canvas-container" 
                  className="w-full h-full" 
                  style={{ width: '100%', height: '400px' }}
                >
                  <FabricJSCanvas onReady={onReady} />
                </div>
              </div>
              
              <div className="flex justify-between mt-4">
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={undoAction}
                    className="flex items-center gap-1"
                  >
                    <Undo size={16} />
                    Undo
                  </Button>
                  
                  {activeTab === 'shapes' && (
                    <>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => addShape('rect')}
                        className="flex items-center gap-1"
                      >
                        <Square size={16} />
                        Rectangle
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => addShape('circle')}
                        className="flex items-center gap-1"
                      >
                        <CircleDashed size={16} />
                        Circle
                      </Button>
                    </>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={clearCanvas}
                    className="flex items-center gap-1"
                  >
                    <Trash2 size={16} />
                    Clear
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={downloadDrawing}
                    className="flex items-center gap-1"
                  >
                    <Download size={16} />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-md p-4">
            <div className="flex flex-col h-full">
              <h3 className="font-medium mb-2">Style Prompt (Optional)</h3>
              <Textarea 
                placeholder="Describe the style you want: e.g., 'A casual summer dress with floral pattern'"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="mb-4"
              />
              
              <Button 
                onClick={generateOutfitFromSketch} 
                className="mb-4 bg-brand-pink hover:bg-brand-pink/90 text-black"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>Generating...</>
                ) : (
                  <>
                    <Sparkles size={16} className="mr-2" />
                    Generate Realistic Outfit
                  </>
                )}
              </Button>
              
              <div className="flex-1 border rounded-md overflow-hidden bg-gray-50 flex items-center justify-center">
                {generatedImage ? (
                  <img 
                    src={generatedImage} 
                    alt="Generated outfit" 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-center text-gray-500 p-4">
                    <Sparkles size={32} className="mx-auto mb-2 opacity-50" />
                    <p>Your AI-generated outfit will appear here</p>
                    <p className="text-sm mt-2">Draw your design on the left and click "Generate"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex justify-between">
          <div>
            {generatedImage && (
              <Button 
                variant="outline"
                onClick={downloadDrawing}
                className="flex items-center gap-1"
              >
                <Download size={16} />
                Save Generated Image
              </Button>
            )}
          </div>
          <DialogClose asChild>
            <Button variant="secondary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OutfitDrawer;
