interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <div className="relative">
      {/* Quote mark */}
      <svg
        className="absolute -top-4 -left-2 h-12 w-12 text-[#d8dfea]"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>

      <blockquote className="relative pt-8">
        <p className="text-xl font-medium leading-relaxed text-[var(--foreground)]">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="mt-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(145deg,#f9dfd2_0%,#dde8fa_100%)] text-lg font-semibold text-[var(--foreground)]">
              {author.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-[var(--foreground)]">{author}</div>
              <div className="text-sm text-[var(--muted)]">
                {role}, {company}
              </div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[linear-gradient(160deg,#ffffff_0%,#f7f9fc_100%)] p-8 shadow-[0_24px_42px_-34px_rgba(26,35,55,0.9)]">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="h-5 w-5 text-[#f4c152]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="mb-6 leading-relaxed text-[var(--muted)]">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(145deg,#f9dfd2_0%,#dde8fa_100%)] font-semibold text-[var(--foreground)]">
          {author.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-medium text-[var(--foreground)]">{author}</div>
          <div className="text-xs text-[var(--muted)]">
            {role}, {company}
          </div>
        </div>
      </div>
    </div>
  );
}
