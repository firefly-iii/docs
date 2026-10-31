import { defineConfig, markdown, openapi } from "sourcey";

// The API reference reads the newest specification Firefly III publishes in firefly-iii/api-docs,
// the one api-docs.firefly-iii.org opens on, so it follows each release of the API with no copy kept here.
// const apiDocs = "https://raw.githubusercontent.com/firefly-iii/api-docs/main/dist";
// const swagger = await fetch(`${apiDocs}/index.html`);
// const newestSpec = swagger.ok ? /"url": "\.\\\/(firefly-iii-v?\d+\.\d+\.\d+-v1\.yaml)"/.exec(await swagger.text())?.[1] : undefined;
// if (!newestSpec) throw new Error(`${apiDocs}/index.html names no released specification (answered ${swagger.status})`);

export default defineConfig({
  // The product's name beside its mark and in each title. MkDocs' site_name, "Firefly III
  // documentation", is the site's title, and the sections beneath already say which part is which.
  name: "Firefly III",
  siteUrl: "https://docs.firefly-iii.org",
  repo: "https://github.com/firefly-iii/docs",
  editBranch: "main",
  editBasePath: "docs",
  logo: { light: "./docs/images/logo.png", mark: true },
  favicon: "./docs/images/favicon.ico",
  // Its own Roboto, self-hosted as the site serves it (theme.css), and its blue, lightened at the
  // same hue where it is text on a dark page.
  theme: {
    colors: { primary: "#1e6581", light: "#30a2cf", dark: "#104f66" },
    fonts: { sans: "Roboto", mono: "Roboto Mono", google: false },
    css: ["./theme.css"],
  },
  prettyUrls: "slash",
  pages: "./pages",
  navbar: {
    links: [
      // Where to get help, which the Reference guides and Explanation tabs both listed, from every page.
      { type: "link", href: "/explanation/support/", label: "Support" },
      { type: "github", href: "https://github.com/firefly-iii/firefly-iii", stats: true },
    ],
  },
  footer: {
    text: "&copy; <a href=\"mailto:james@firefly-iii.org\">James Cole</a>, licensed under <a href=\"https://github.com/firefly-iii/docs/blob/main/license\">Attribution-ShareAlike 4.0 International</a>.",
  },
  feedback: {
    title: "Was this page helpful?",
    ratings: [
      {
        label: "This page was helpful",
        value: 1,
        icon: "face-smile",
        note: "Thanks for your feedback!",
      },
      {
        label: "This page could be improved",
        value: 0,
        icon: "face-frown",
        note: "<p>Sorry to hear that :(. Please leave your feedback down here <a href=\"https://github.com/orgs/firefly-iii/discussions\">or on GitHub</a>. Thank you!</p> <div id=\"empty-feedback-form\"></div>",
      },
    ],
  },
  lastUpdated: true,
  exports: { openapi: true, llms: { index: true, full: true } },
  discovery: { ard: true, apiCatalog: true, wellKnown: true },
  navigation: {
    breadcrumbs: true,
    tabs: [
      {
        tab: "Documentation",
        slug: "",
        source: markdown({
          root: "docs",
          groups: [
            {
              group: "",
              id: "ungrouped-1",
              pages: [
                { page: "index", label: "Home" },
              ],
            },
            {
              group: "Tutorials",
              id: "tutorials",
              pages: [
                { page: "tutorials", label: "Overview" },
                {
                  group: "Firefly III",
                  id: "tutorials/firefly-iii",
                  collapsed: true,
                  pages: [
                    {
                      group: "Your finances",
                      id: "tutorials/firefly-iii/your-finances",
                      collapsed: true,
                      pages: [
                        { page: "tutorials/finances/first-steps", label: "My first accounts" },
                        {
                          page: "tutorials/finances/first-accounts",
                          label: "Create accounts and transactions",
                        },
                        {
                          page: "tutorials/finances/subscription",
                          label: "Manage a subscription",
                        },
                        { page: "tutorials/finances/refund", label: "Process a refund" },
                        { page: "tutorials/finances/mortgage", label: "Manage your mortgage" },
                        { page: "tutorials/finances/currencies", hidden: true },
                      ],
                    },
                    {
                      group: "Data management",
                      id: "tutorials/firefly-iii/data-management",
                      collapsed: true,
                      pages: [
                        {
                          page: "tutorials/firefly-iii/importing-data",
                          label: "Importing data",
                        },
                        {
                          page: "tutorials/firefly-iii/exporting-data",
                          label: "Exporting data",
                        },
                      ],
                    },
                  ],
                },
                {
                  group: "Data Importer",
                  id: "tutorials/data-importer",
                  collapsed: true,
                  pages: [
                    {
                      group: "Files",
                      id: "tutorials/data-importer/files",
                      collapsed: true,
                      pages: [
                        { page: "tutorials/data-importer/csv", label: "Import a CSV file" },
                        {
                          page: "tutorials/data-importer/camt",
                          label: "Import a CAMT.05x file",
                        },
                      ],
                    },
                    {
                      group: "Data providers",
                      id: "tutorials/data-importer/data-providers",
                      collapsed: true,
                      pages: [
                        {
                          page: "tutorials/data-importer/data-providers",
                          label: "What are data providers?",
                        },
                        { page: "tutorials/data-importer/basiq", label: "import from basiq.io" },
                        {
                          page: "tutorials/data-importer/eb",
                          label: "Import from Enable Banking",
                        },
                        { page: "tutorials/data-importer/fints", label: "Import from FinTS" },
                        {
                          page: "tutorials/data-importer/gocardless",
                          label: "Import from GoCardless",
                        },
                        {
                          page: "tutorials/data-importer/sophtron",
                          label: "Import from Sophtron",
                        },
                        {
                          page: "tutorials/data-importer/lunchflow",
                          label: "Import from Lunch Flow",
                        },
                        {
                          page: "tutorials/data-importer/obg",
                          label: "Import from Open Banking/HBCI",
                        },
                        {
                          page: "tutorials/data-importer/simplefin",
                          label: "Import from SimpleFIN",
                        },
                        {
                          page: "tutorials/data-importer/teller",
                          label: "Import from teller.io",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              group: "How-to guides",
              id: "how-to-guides",
              pages: [
                { page: "how-to", label: "Overview" },
                {
                  group: "General",
                  id: "how-to-guides/general",
                  collapsed: true,
                  pages: [
                    { page: "how-to/general/debug", label: "How to debug things" },
                    {
                      page: "how-to/general/report-security-issues",
                      label: "How to report security issues",
                    },
                  ],
                },
                {
                  group: "Firefly III",
                  id: "how-to-guides/firefly-iii",
                  collapsed: true,
                  pages: [
                    {
                      group: "How to install",
                      id: "how-to-guides/firefly-iii/how-to-install",
                      collapsed: true,
                      pages: [
                        {
                          page: "how-to/firefly-iii/installation/docker",
                          label: "Using Docker",
                        },
                        {
                          page: "how-to/firefly-iii/installation/portainer",
                          label: "Using Portainer",
                        },
                        {
                          page: "how-to/firefly-iii/installation/kubernetes",
                          label: "Using Kubernetes",
                        },
                        {
                          page: "how-to/firefly-iii/installation/self-managed",
                          label: "Using a self-managed server",
                        },
                        {
                          page: "how-to/firefly-iii/installation/hosted",
                          label: "Third party hosting",
                        },
                      ],
                    },
                    {
                      group: "How to upgrade",
                      id: "how-to-guides/firefly-iii/how-to-upgrade",
                      collapsed: true,
                      pages: [
                        { page: "how-to/firefly-iii/upgrade/docker", label: "Using Docker" },
                        {
                          page: "how-to/firefly-iii/upgrade/kubernetes",
                          label: "Using Kubernetes",
                        },
                        {
                          page: "how-to/firefly-iii/upgrade/self-managed",
                          label: "Using a self-managed server",
                        },
                      ],
                    },
                    {
                      group: "Advanced installation",
                      id: "how-to-guides/firefly-iii/advanced-installation",
                      collapsed: true,
                      pages: [
                        {
                          page: "how-to/firefly-iii/advanced/notifications",
                          label: "How to set up notifications",
                        },
                        {
                          page: "how-to/firefly-iii/advanced/authentication",
                          label: "How to use different authentication",
                        },
                        {
                          page: "how-to/firefly-iii/advanced/backup",
                          label: "How to make a backup",
                        },
                        {
                          page: "how-to/firefly-iii/advanced/locales",
                          label: "How to set up your local language",
                        },
                        {
                          page: "how-to/firefly-iii/advanced/cron",
                          label: "How to configure cron jobs",
                        },
                      ],
                    },
                    {
                      group: "Your finances",
                      id: "how-to-guides/firefly-iii/your-finances",
                      collapsed: true,
                      pages: [
                        {
                          page: "how-to/firefly-iii/finances/accounts",
                          label: "How to manage accounts",
                        },
                        {
                          page: "how-to/firefly-iii/finances/budgets",
                          label: "How to manage budgets",
                        },
                        {
                          page: "how-to/firefly-iii/finances/transactions",
                          label: "How to organize transactions",
                        },
                        { page: "how-to/firefly-iii/finances/cash", label: "How to track cash" },
                        {
                          page: "how-to/firefly-iii/finances/subscriptions",
                          label: "How to use subscriptions",
                        },
                        {
                          page: "how-to/firefly-iii/finances/reconcile",
                          label: "How to reconcile accounts",
                        },
                        {
                          page: "how-to/firefly-iii/finances/liabilities",
                          label: "How to manage liabilities",
                        },
                        {
                          page: "how-to/firefly-iii/finances/recurring",
                          label: "How to use recurring transactions",
                        },
                        {
                          page: "how-to/firefly-iii/finances/piggy-banks",
                          label: "How to use piggy banks",
                        },
                        {
                          page: "how-to/firefly-iii/finances/reports",
                          label: "How to read reports",
                        },
                      ],
                    },
                    {
                      group: "More features",
                      id: "how-to-guides/firefly-iii/more-features",
                      collapsed: true,
                      pages: [
                        {
                          page: "how-to/firefly-iii/features/multi-user",
                          label: "Make it multi-user",
                        },
                        { page: "how-to/firefly-iii/features/rules", label: "How to use rules" },
                        {
                          page: "how-to/firefly-iii/features/expressions",
                          label: "How to use expressions",
                        },
                        {
                          page: "how-to/firefly-iii/features/webhooks",
                          label: "How to use webhooks",
                        },
                        {
                          page: "how-to/firefly-iii/features/search",
                          label: "How to use the search",
                        },
                        {
                          page: "how-to/firefly-iii/features/currencies",
                          label: "How to use currencies",
                        },
                        { page: "how-to/firefly-iii/features/cli", label: "How to use the CLI" },
                        { page: "how-to/firefly-iii/features/api", label: "How to use the API" },
                      ],
                    },
                    {
                      group: "Development",
                      id: "how-to-guides/firefly-iii/development",
                      collapsed: true,
                      pages: [
                        {
                          page: "how-to/firefly-iii/development/translations",
                          label: "Translations",
                        },
                      ],
                    },
                  ],
                },
                {
                  group: "Data Importer",
                  id: "how-to-guides/data-importer",
                  collapsed: true,
                  pages: [
                    {
                      group: "How to install",
                      id: "how-to-guides/data-importer/how-to-install",
                      collapsed: true,
                      pages: [
                        {
                          page: "how-to/data-importer/installation/docker",
                          label: "Using Docker",
                        },
                        {
                          page: "how-to/data-importer/installation/portainer",
                          label: "Using Portainer",
                        },
                        {
                          page: "how-to/data-importer/installation/kubernetes",
                          label: "Using Kubernetes",
                        },
                        {
                          page: "how-to/data-importer/installation/self-managed",
                          label: "Using a self-managed server",
                        },
                      ],
                    },
                    {
                      page: "how-to/data-importer/how-to-configure",
                      label: "How to configure",
                    },
                    {
                      group: "How to upgrade",
                      id: "how-to-guides/data-importer/how-to-upgrade",
                      collapsed: true,
                      pages: [
                        { page: "how-to/data-importer/upgrade/docker", label: "Using Docker" },
                        {
                          page: "how-to/data-importer/upgrade/kubernetes",
                          label: "Using Kubernetes",
                        },
                        {
                          page: "how-to/data-importer/upgrade/self-managed",
                          label: "Using a self-managed server",
                        },
                      ],
                    },
                    {
                      group: "Importing data",
                      id: "how-to-guides/data-importer/importing-data",
                      collapsed: true,
                      pages: [
                        {
                          page: "how-to/data-importer/import/file",
                          label: "How to import files",
                        },
                        {
                          page: "how-to/data-importer/import/automated",
                          label: "How to automate the import",
                        },
                        {
                          page: "how-to/data-importer/import/json",
                          label: "How to manage JSON",
                        },
                        {
                          page: "how-to/data-importer/import/map-data",
                          label: "How to map data",
                        },
                        {
                          page: "how-to/data-importer/import/third-party-providers",
                          label: "How to use data providers",
                        },
                        {
                          page: "how-to/data-importer/import/transfers",
                          label: "How to import transfers between accounts",
                        },
                        {
                          page: "how-to/data-importer/import/duplicates",
                          label: "How to handle (missed) duplicates",
                        },
                        { page: "how-to/data-importer/import/gocardless", hidden: true },
                        { page: "how-to/data-importer/import/salt-edge", hidden: true },
                        { page: "how-to/data-importer/import/simplefin", hidden: true },
                      ],
                    },
                    {
                      group: "Advanced things",
                      id: "how-to-guides/data-importer/advanced-things",
                      collapsed: true,
                      pages: [
                        {
                          page: "how-to/data-importer/advanced/cli",
                          label: "How to import using CLI",
                        },
                        {
                          page: "how-to/data-importer/advanced/post",
                          label: "How to import using POST",
                        },
                        {
                          page: "how-to/data-importer/advanced/notifications",
                          label: "How to set up notifications",
                        },
                        {
                          page: "how-to/data-importer/advanced/custom-import-tag",
                          label: "How to set a custom import tag",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              group: "Reference guides",
              id: "reference-guides",
              pages: [
                { page: "references", label: "Overview" },
                {
                  group: "Firefly III",
                  id: "reference-guides/firefly-iii",
                  collapsed: true,
                  pages: [
                    { page: "references/firefly-iii/cli", label: "The CLI" },
                    { page: "references/firefly-iii/account-types", label: "Account types" },
                    {
                      page: "references/firefly-iii/transaction-types",
                      label: "Transaction types",
                    },
                    { page: "references/firefly-iii/search", label: "All search options" },
                    {
                      page: "references/firefly-iii/rule-triggers",
                      label: "All rule triggers",
                    },
                    {
                      page: "references/firefly-iii/rule-actions",
                      label: "All rule actions",
                    },
                    {
                      page: "references/firefly-iii/rule-expressions",
                      label: "Expressions",
                    },
                    {
                      group: "API",
                      id: "reference-guides/firefly-iii/api",
                      collapsed: true,
                      pages: [
                        { page: "references/firefly-iii/api", label: "The API" },
                        {
                          page: "references/firefly-iii/api/specials",
                          label: "Special endpoints",
                        },
                      ],
                    },
                    {
                      group: "Third parties",
                      id: "reference-guides/firefly-iii/third-parties",
                      collapsed: true,
                      pages: [
                        {
                          page: "references/firefly-iii/third-parties/host",
                          label: "Third parties that host Firefly III",
                        },
                        {
                          page: "references/firefly-iii/third-parties/apps",
                          label: "Third-party tools",
                        },
                      ],
                    },
                    { page: "references/firefly-iii/changelog", label: "Full changelog" },
                  ],
                },
                {
                  group: "Data Importer",
                  id: "reference-guides/data-importer",
                  collapsed: true,
                  pages: [
                    {
                      page: "references/data-importer/json",
                      label: "JSON configuration file",
                    },
                    { page: "references/data-importer/roles", label: "Data field roles" },
                    {
                      page: "references/data-importer/third-party-tools",
                      label: "Third-party tools",
                    },
                    {
                      page: "references/data-importer/public",
                      label: "Public installation",
                    },
                    {
                      page: "references/data-importer/duplicate-detection",
                      label: "Duplicate detection",
                    },
                    { page: "references/data-importer/changelog", label: "Full changelog" },
                  ],
                },
                {
                  group: "Frequently Asked Questions",
                  id: "reference-guides/frequently-asked-questions",
                  collapsed: true,
                  pages: [
                    {
                      group: "Firefly III",
                      id: "reference-guides/frequently-asked-questions/firefly-iii",
                      collapsed: true,
                      pages: [
                        {
                          page: "references/faq/firefly-iii/general",
                          label: "General questions",
                        },
                        { page: "references/faq/firefly-iii/using", label: "Using and running" },
                        {
                          page: "references/faq/firefly-iii/finances",
                          label: "Financial management",
                        },
                      ],
                    },
                    {
                      group: "Data Importer",
                      id: "reference-guides/frequently-asked-questions/data-importer",
                      collapsed: true,
                      pages: [
                        {
                          page: "references/faq/data-importer/general",
                          label: "General questions",
                        },
                        {
                          page: "references/faq/data-importer/import",
                          label: "Common import issues",
                        },
                        { page: "references/faq/data-importer/gocardless", label: "GoCardless" },
                      ],
                    },
                    { page: "references/faq/general", label: "General questions" },
                    { page: "references/faq/install", label: "Installing and running" },
                    { page: "references/faq/development", label: "Development" },
                    { page: "references/faq/docker", label: "Docker" },
                  ],
                },
              ],
            },
            {
              group: "Explanation",
              id: "explanation",
              pages: [
                { page: "explanation", label: "Overview" },
                {
                  group: "Data organization",
                  id: "explanation/data-organization",
                  collapsed: true,
                  pages: [
                    {
                      page: "explanation/data-classification/best-practices",
                      label: "Best practices",
                    },
                    {
                      page: "explanation/data-classification/what-to-use",
                      label: "Organizing transactions",
                    },
                  ],
                },
                {
                  group: "Financial concepts",
                  id: "explanation/financial-concepts",
                  collapsed: true,
                  pages: [
                    {
                      page: "explanation/financial-concepts/administrations",
                      label: "Administrations",
                    },
                    {
                      page: "explanation/financial-concepts/transactions",
                      label: "Transactions",
                    },
                    { page: "explanation/financial-concepts/accounts", label: "Accounts" },
                    { page: "explanation/financial-concepts/budgets", label: "Budgets" },
                    {
                      page: "explanation/financial-concepts/liabilities",
                      label: "Liabilities",
                    },
                    {
                      page: "explanation/financial-concepts/currencies",
                      label: "Currencies",
                    },
                    {
                      page: "explanation/financial-concepts/piggy-banks",
                      label: "Piggy banks",
                    },
                    {
                      page: "explanation/financial-concepts/subscriptions",
                      label: "Subscriptions",
                    },
                    {
                      page: "explanation/financial-concepts/recurring",
                      label: "Recurring transactions",
                    },
                    {
                      page: "explanation/financial-concepts/exchange-rates",
                      label: "Exchange rates",
                    },
                  ],
                },
                {
                  group: "Firefly III",
                  id: "explanation/firefly-iii",
                  collapsed: true,
                  pages: [
                    {
                      group: "About Firefly III",
                      id: "explanation/firefly-iii/about-firefly-iii",
                      collapsed: true,
                      pages: [
                        {
                          page: "explanation/firefly-iii/about/introduction",
                          label: "Introduction and features",
                        },
                        {
                          page: "explanation/firefly-iii/about/screenshots",
                          label: "Screenshots",
                        },
                        { page: "explanation/firefly-iii/about/demo", label: "Demo website" },
                      ],
                    },
                    {
                      group: "Background information",
                      id: "explanation/firefly-iii/background-information",
                      collapsed: true,
                      pages: [
                        {
                          page: "explanation/firefly-iii/background/personal-finances",
                          label: "Personal finances",
                        },
                        {
                          page: "explanation/firefly-iii/background/zero-based-budgeting",
                          label: "Zero based budgeting",
                        },
                        {
                          page: "explanation/firefly-iii/background/time-periods",
                          label: "Time periods",
                        },
                      ],
                    },
                  ],
                },
                {
                  group: "Data Importer",
                  id: "explanation/data-importer",
                  collapsed: true,
                  pages: [
                    { page: "explanation/data-importer/introduction", label: "About" },
                    {
                      page: "explanation/data-importer/separate-tool",
                      label: "Separate tool",
                    },
                    {
                      page: "explanation/data-importer/ignored-values",
                      label: "Ignored values",
                    },
                  ],
                },
                {
                  group: "More information",
                  id: "explanation/more-information",
                  collapsed: true,
                  pages: [
                    { page: "explanation/more-information/logo", label: "Logo and name" },
                    {
                      page: "explanation/more-information/architecture",
                      label: "Architecture",
                    },
                    { page: "explanation/more-information/security", label: "Security" },
                    { page: "explanation/more-information/license", label: "License" },
                    { page: "explanation/more-information/donations", label: "Donations" },
                    {
                      page: "explanation/more-information/what-its-not",
                      label: "Missing features",
                    },
                    {
                      page: "explanation/more-information/bending-and-breaking",
                      label: "(Security) testing",
                    },
                    {
                      page: "explanation/more-information/signatures",
                      label: "Digital signatures",
                    },
                  ],
                },
                { page: "explanation/other-tools", label: "Other tools" },
                { page: "explanation/code-of-conduct", label: "Code of conduct" },
                { page: "explanation/contributing", label: "Contribution guidelines" },
                { page: "explanation/support", hidden: true },
              ],
            },
          ],
        }),
      }
    ],
  },
  changelog: false,
});
