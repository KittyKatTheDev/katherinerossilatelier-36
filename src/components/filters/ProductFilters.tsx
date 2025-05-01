
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ProductFilterOptions } from '@/types/Product';
import { getUniqueValues, getMinMaxPrice } from '@/data/products';
import { Filter, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductFiltersProps {
  setFilters: (filters: ProductFilterOptions) => void;
}

const ProductFilters = ({ setFilters }: ProductFiltersProps) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [priceRange, setPriceRange] = useState<[number, number]>(getMinMaxPrice());
  const [isVintage, setIsVintage] = useState<boolean | undefined>(undefined);
  const [isNewArrival, setIsNewArrival] = useState<boolean | undefined>(undefined);

  // Get unique values for filters
  const categories = getUniqueValues('category');
  const types = getUniqueValues('type');
  const colors = getUniqueValues('color');
  const sizes = getUniqueValues('size');
  const [minPrice, maxPrice] = getMinMaxPrice();

  // Apply filters
  const applyFilters = () => {
    setFilters({
      category: selectedCategory,
      type: selectedType,
      color: selectedColor,
      size: selectedSize,
      priceRange,
      isVintage,
      isNewArrival
    });
    setMobileFiltersOpen(false);
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedCategory(undefined);
    setSelectedType(undefined);
    setSelectedColor(undefined);
    setSelectedSize(undefined);
    setPriceRange([minPrice, maxPrice]);
    setIsVintage(undefined);
    setIsNewArrival(undefined);
    setFilters({});
  };

  const FilterSection = () => (
    <div className="space-y-6">
      {/* Category filter */}
      <div>
        <h3 className="font-serif text-lg mb-3">Category</h3>
        <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={String(category)} className="flex items-center space-x-2">
                <RadioGroupItem value={String(category)} id={`category-${String(category)}`} />
                <Label htmlFor={`category-${String(category)}`} className="capitalize">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Type filter */}
      <div>
        <h3 className="font-serif text-lg mb-3">Type</h3>
        <RadioGroup value={selectedType} onValueChange={setSelectedType}>
          <div className="space-y-2">
            {types.map((type) => (
              <div key={String(type)} className="flex items-center space-x-2">
                <RadioGroupItem value={String(type)} id={`type-${String(type)}`} />
                <Label htmlFor={`type-${String(type)}`} className="capitalize">
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Color filter */}
      <div>
        <h3 className="font-serif text-lg mb-3">Color</h3>
        <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
          <div className="space-y-2">
            {colors.map((color) => (
              <div key={String(color)} className="flex items-center space-x-2">
                <RadioGroupItem value={String(color)} id={`color-${String(color)}`} />
                <Label htmlFor={`color-${String(color)}`} className="capitalize">
                  {color}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Size filter */}
      <div>
        <h3 className="font-serif text-lg mb-3">Size</h3>
        <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
          <div className="space-y-2">
            {sizes.map((size) => (
              <div key={String(size)} className="flex items-center space-x-2">
                <RadioGroupItem value={String(size)} id={`size-${String(size)}`} />
                <Label htmlFor={`size-${String(size)}`} className="uppercase">
                  {size}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="font-serif text-lg mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[minPrice, maxPrice]}
            min={minPrice}
            max={maxPrice}
            step={5}
            value={[priceRange[0], priceRange[1]]}
            onValueChange={(value) => setPriceRange([value[0], value[1]])}
          />
          <div className="flex justify-between mt-2 text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Collection filters */}
      <div>
        <h3 className="font-serif text-lg mb-3">Collection</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="vintage"
              checked={isVintage === true}
              onCheckedChange={(checked) => {
                setIsVintage(checked ? true : undefined);
              }}
            />
            <Label htmlFor="vintage">Vintage</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="new-arrival"
              checked={isNewArrival === true}
              onCheckedChange={(checked) => {
                setIsNewArrival(checked ? true : undefined);
              }}
            />
            <Label htmlFor="new-arrival">New Arrivals</Label>
          </div>
        </div>
      </div>

      {/* Filter actions */}
      <div className="flex space-x-4 pt-4">
        <Button
          variant="default"
          className="flex-1 bg-brand-pink hover:bg-brand-pink/90 text-black"
          onClick={applyFilters}
        >
          Apply Filters
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-brand-pink hover:bg-brand-pink/10"
          onClick={resetFilters}
        >
          Reset
        </Button>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Mobile filter button */}
      <div className="md:hidden mb-4">
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-between border-brand-pink"
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
        >
          <div className="flex items-center">
            <Filter size={18} className="mr-2" />
            <span>Filter Products</span>
          </div>
          <ChevronRight 
            size={18} 
            className={`transition-transform ${mobileFiltersOpen ? 'rotate-90' : ''}`} 
          />
        </Button>
        
        {mobileFiltersOpen && (
          <div className="mt-4 p-4 border rounded-md animate-fade-in">
            <FilterSection />
          </div>
        )}
      </div>
      
      {/* Desktop filters */}
      <div className="hidden md:block">
        <FilterSection />
      </div>
    </div>
  );
};

export default ProductFilters;
