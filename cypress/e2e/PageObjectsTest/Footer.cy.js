import Footer from "../../support/PageObjectTestCase/Footer.cy";

describe("Footer Navigation Validation", () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED')) {
      // Log the error, but prevent the test from failing
      console.error('Uncaught exception: ', err.message);
      return false;
    }
    // Otherwise, let Cypress handle the exception
    return true;
  });
  const footer = new Footer();

  beforeEach(() => {
    cy.visit("https://luni-interface-029.vercel.app/");
  });

  it("Validate footer", () => {
    const footerLinks = [
      { text: "Who we are", href: "/who-we-are" },
      { text: "Join our team", href: "/join-our-team" },
      { text: "Terms & Conditions", href: "/terms-and-conditions" },
      { text: "We respect our Policy", href: "/privacy-policy" },
      { text: "Fee & Payments", href: "/fee-and-payments" },
      { text: "Returns & Refunds", href: "/returns-and-refunds" },
      { text: "Promotion Tem & conditions", href: "/promotion-terms" },
      { text: "Track your order", href: "/" },
      { text: "Frequntly asked", href: "/privacy-policy" },
      { text: "Facebook", href: "Facebook" },
      { text: "Download your apps", href: "/" },
    ];

    footerLinks.forEach(({ text, href }) => {
      footer.validateLink(text, href);
    });
  });
});