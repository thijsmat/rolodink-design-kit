export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(247,245,240,0.95)] backdrop-blur-sm border-b border-azure/10">
      <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-white to-white/80 flex items-center justify-center flex-shrink-0">
            <span className="text-azure font-semibold text-base">R</span>
          </div>
          <span className="font-playfair font-semibold text-lg sm:text-xl text-azure truncate">Rolodink</span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <a href="#features" className="hidden sm:inline text-xs sm:text-sm text-azure hover:text-azure/80 transition-colors">Features</a>
          <a href="#testimonials" className="hidden sm:inline text-xs sm:text-sm text-azure hover:text-azure/80 transition-colors">Testimonials</a>
          <a href="#faq" className="hidden sm:inline text-xs sm:text-sm text-azure hover:text-azure/80 transition-colors">FAQ</a>
          <button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-azure/5 transition-colors flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.99 8.324C13.9275 9.48143 13.5311 10.596 12.8487 11.5329C12.1663 12.4699 11.2271 13.1891 10.1447 13.6037C9.06223 14.0183 7.88288 14.1104 6.74918 13.869C5.61548 13.6276 4.57597 13.063 3.7563 12.2434C2.93664 11.4239 2.37192 10.3844 2.13041 9.25074C1.88889 8.11706 1.98093 6.9377 2.39538 5.85521C2.80984 4.77273 3.52897 3.83346 4.46585 3.15096C5.40272 2.46846 6.51724 2.07194 7.67466 2.00933C7.94466 1.99467 8.086 2.316 7.94266 2.54467C7.46326 3.3117 7.25798 4.21858 7.36033 5.1173C7.46268 6.01602 7.86661 6.85352 8.50621 7.49312C9.14581 8.13272 9.98331 8.53665 10.882 8.639C11.7808 8.74135 12.6876 8.53607 13.4547 8.05667C13.684 7.91333 14.0047 8.054 13.99 8.324Z" stroke="#525252" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="h-8 sm:h-9 px-3 sm:px-4 rounded-lg bg-azure text-white text-xs sm:text-sm font-medium hover:bg-azure/90 transition-colors whitespace-nowrap flex-shrink-0">
            Add to Chrome - Gratis
          </button>
        </div>
      </div>
    </nav>
  );
}
