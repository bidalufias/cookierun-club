type FooterProps = {
  onPrivacy: () => void;
  onTerms: () => void;
};

export default function Footer({ onPrivacy, onTerms }: FooterProps) {
  return (
    <footer className="site-footer">
      <p className="footer-tagline">Made with 🍪 in Malaysia</p>
      <p className="footer-copy">© 2026 SAAM VENTURES</p>
      <nav className="footer-links" aria-label="Legal">
        <a
          href="/privacy"
          onClick={(e) => {
            e.preventDefault();
            onPrivacy();
          }}
        >
          Privacy
        </a>
        <a
          href="/terms"
          onClick={(e) => {
            e.preventDefault();
            onTerms();
          }}
        >
          Terms
        </a>
      </nav>
    </footer>
  );
}
