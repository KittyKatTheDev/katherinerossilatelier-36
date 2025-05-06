
interface StylistResponse {
  keywords: string[];
  responses: string[];
}

export const stylistResponses: StylistResponse[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    responses: [
      "Hello! I'm Katherine's personal stylist assistant. How can I help you today?",
      "Hi there! Looking for some style advice? I'd be happy to help!",
      "Hey! What kind of outfit are you looking for today?"
    ]
  },
  {
    keywords: ['outfit', 'wear', 'dress', 'clothing'],
    responses: [
      "For a versatile outfit, I recommend pairing our vintage high-waisted trousers with a silk blouse. It works for both casual and semi-formal settings!",
      "Have you considered a statement dress? We have several new arrivals that are perfect for making an impression.",
      "Layering is key this season. Try one of our oversized blazers over a fitted top with straight-leg jeans for an effortlessly chic look."
    ]
  },
  {
    keywords: ['color', 'colours', 'palette'],
    responses: [
      "Earth tones are trending this season - think olive green, terracotta, and camel. They're versatile and easy to mix and match!",
      "For your skin tone, jewel tones like emerald green and sapphire blue would be extremely flattering.",
      "Black is always classic, but have you considered navy? It's softer than black but just as versatile, especially with our vintage collection."
    ]
  },
  {
    keywords: ['body', 'type', 'shape', 'figure', 'petite', 'tall', 'curvy'],
    responses: [
      "For your body type, pieces that accentuate the waist tend to be most flattering. Our wrap dresses and high-waisted items would be perfect!",
      "Vertical stripes and monochromatic looks can create a lengthening effect that works well for all body types.",
      "A-line silhouettes are universally flattering and we have several pieces in that style from both our atelier and vintage collections."
    ]
  },
  {
    keywords: ['occasion', 'event', 'party', 'wedding', 'formal'],
    responses: [
      "For formal events, our silk midi dresses paired with statement jewelry create an elegant look that stands out.",
      "Wedding guest attire? Consider our floral vintage dresses - they're unique and photograph beautifully!",
      "For business occasions, our tailored blazers add sophistication to any outfit while maintaining comfort throughout the day."
    ]
  },
  {
    keywords: ['style', 'fashion', 'trend', 'aesthetic'],
    responses: [
      "Mixing vintage with contemporary pieces creates a unique personal style. Try pairing our vintage blouses with modern, clean-cut trousers.",
      "Minimalist aesthetics are timeless - focus on quality fabrics and perfect fits, which is what our atelier pieces excel at.",
      "Don't be afraid to express yourself! Fashion is personal, and statement pieces from our collection can be the foundation of your unique style."
    ]
  },
  {
    keywords: ['accessories', 'jewelry', 'bag', 'purse', 'handbag', 'shoes'],
    responses: [
      "When it comes to accessories, sometimes less is more. Choose one statement piece - either earrings, a necklace, or a bold bag - to elevate your outfit.",
      "Vintage accessories add character to modern outfits. Our selection of vintage handbags pairs surprisingly well with contemporary looks.",
      "Classic pumps in a color that complements your wardrobe will be your most versatile investment. Our nude and black selections go with everything!"
    ]
  },
  {
    keywords: ['vintage', 'retro', 'old', 'second hand', 'pre-loved'],
    responses: [
      "Vintage pieces add character and uniqueness to your wardrobe. Our curated collection focuses on timeless designs that still feel relevant today.",
      "When styling vintage pieces, balance is key. Pair a vintage blouse with modern jeans, or a vintage skirt with a contemporary top.",
      "Our vintage collection is carefully selected for quality and condition. Each piece has its own story and has stood the test of time!"
    ]
  },
  {
    keywords: ['new', 'arrival', 'latest', 'collection'],
    responses: [
      "Our latest collection features sustainable fabrics in earth tones - perfect for creating a versatile capsule wardrobe.",
      "Have you seen our new arrivals section? We just added some beautiful hand-crafted pieces from our atelier that are already customer favorites.",
      "The latest collection draws inspiration from 1970s silhouettes but with modern fabrics and fits. It's retro with a contemporary twist!"
    ]
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    responses: [
      "You're welcome! Feel free to ask if you have any other style questions.",
      "Happy to help! Come back anytime you need fashion advice.",
      "My pleasure! Don't hesitate to reach out again for more styling tips!"
    ]
  },
  {
    keywords: ['price', 'cost', 'expensive', 'affordable', 'budget'],
    responses: [
      "Our pieces range in price, but we focus on quality and longevity. Think of them as investments in your wardrobe that will last for years.",
      "If you're shopping on a budget, our vintage collection offers unique pieces at various price points, with many affordable options.",
      "Sign up for our newsletter to be notified of our seasonal sales where you can find both atelier and vintage pieces at special prices."
    ]
  }
];
