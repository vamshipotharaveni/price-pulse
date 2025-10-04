import heroImage from "@assets/generated_images/Hero_section_grocery_basket_f2d5116d.png";

export function HeroSection() {
  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <img
        src={heroImage}
        alt="Fresh groceries"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Compare. Save. Shop Smart.
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl">
          Find the lowest prices across all major grocery platforms in seconds
        </p>
      </div>
    </div>
  );
}
