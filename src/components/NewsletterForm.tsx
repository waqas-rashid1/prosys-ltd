"use client";

export default function NewsletterForm() {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="blog-email" className="sr-only">Email</label>
        <input
          id="blog-email"
          name="email"
          type="email"
          placeholder="Your work email"
          className="flex-grow px-5 py-3.5 bg-card-dark border border-card-dark-border text-text-light placeholder:text-text-light-muted/40 text-sm focus:outline-none focus:border-accent/50 transition-all"
        />
        <button
          type="submit"
          className="gradient-bg text-white px-8 py-3.5 font-medium text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer flex-shrink-0"
        >
          Subscribe
        </button>
      </form>
      <p className="text-text-light-muted/40 text-xs mt-3">
        By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
      </p>
    </div>
  );
}
