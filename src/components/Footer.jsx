export default function Footer() {
  return (
    <footer className="site-footer">

      {/* BRAND */}
      <div className="footer-brand">
        <h2>Sotheby's International Realty</h2>

        <a href="#" className="footer-contact">
          Contact Us
        </a>
      </div>


      {/* FOOTER ACCORDION */}
      <div className="footer-accordion">

        <button>
          <span>Company</span>
          <span>+</span>
        </button>

        <button>
          <span>Apps</span>
          <span>+</span>
        </button>

        <button>
          <span>Sotheby's</span>
          <span>+</span>
        </button>

      </div>


      {/* SOCIAL LINKS */}
      <div className="footer-socials">

        <a href="#">Facebook</a>
        <a href="#">X</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">YouTube</a>
        <a href="#">Pinterest</a>
        <a href="#">TikTok</a>

      </div>


      {/* PRIVACY */}
      <div className="footer-privacy">

        <a href="#">
          Do Not Sell or Share My Personal Information
        </a>

        <p>
          Sotheby's International Realty's commitment to
          <a href="#"> fair housing laws</a>,
          <a href="#"> standard operating procedures</a>,
          and
          <a href="#"> reasonable accommodations</a>.
        </p>

      </div>


      {/* LANGUAGE */}
      <div className="footer-language">
        English - United States
      </div>


      {/* LEGAL LINKS */}
      <div className="footer-legal-links">

        <a href="#">Fair Housing Statement</a>
        <a href="#">New York Fair Housing Statement</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of use</a>
        <a href="#">Accessibility Statement</a>
        <a href="#">Dmca Notice</a>
        <a href="#">Contact Us</a>
        <a href="#">SiteMap</a>
        <a href="#">COOKIE PREFERENCES</a>

      </div>


      {/* COPYRIGHT */}
      <div className="footer-bottom">

        <p>
          Copyright © 2006-2026 Sotheby's International Realty
          Affiliates LLC. All Rights Reserved.
        </p>

        <a href="#">
          Texas Real Estate Commission Consumer Protection Notice
        </a>

        <p>
          Sotheby's International Realty Affiliates LLC fully supports
          the principles of the Fair Housing Act and the Equal
          Opportunity Act. Sotheby's International Realty, the
          Sotheby's International Realty logo, "For the Ongoing
          Collection of Life" and RESIDE are registered (or unregistered)
          service marks owned or licensed to Sotheby's International
          Realty Affiliates LLC.
        </p>

        <p>
          The information set forth on this site is based upon
          information which we consider reliable, but because it has
          been supplied by third parties to our franchisees (who in
          turn supplied it to us), we can not represent that it is
          accurate or complete, and should not be relied upon as such.
          In accordance with applicable MLS rules, IDX listings
          displayed on this site may be filtered by certain objective
          criteria, including price. The offerings are subject to
          errors, omissions, changes, including price, or withdrawal
          without notice. All dimensions are approximate and have not
          been verified by the selling party and can not be verified
          by Sotheby's International Realty Affiliates LLC. It is
          recommended that you hire a professional in the business of
          determining dimensions, such as an appraiser, architect or
          civil engineer, to determine such information.
        </p>

        <a href="#">
          Texas Real Estate Commission Information About Brokerage
          Services
        </a>

      </div>

    </footer>
  );
}