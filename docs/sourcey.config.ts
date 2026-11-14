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
      { type: "link", href: "/support/", label: "Support" },
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

          ],
        }),
      },
      {
        "tab": "Tutorials",
        "slug": "tutorials",
        "source": markdown({
          root: "docs/tutorials",
          groups: [
            {
              group: "tutorials",
              id: "ungrouped-2",
              pages: [
                { page: "index", label: "Tutorials" },
                {
                  group: "Firefly III",
                  id: "firefly-iii",
                  collapsed: false,
                  pages: [
                    {
                      group: "Your finances",
                      id: "firefly-iii/your-finances",
                      collapsed: false,
                      pages: [
                        { page: "finances/first-steps", label: "My first accounts" },
                        {
                          page: "finances/first-accounts",
                          label: "Create accounts and transactions",
                        },
                        {
                          page: "finances/subscription",
                          label: "Manage a subscription",
                        },
                        { page: "finances/refund", label: "Process a refund" },
                        { page: "finances/mortgage", label: "Manage your mortgage" },
                        { page: "finances/currencies", hidden: true },
                      ],
                    },
                    {
                      group: "Data management",
                      id: "firefly-iii/data-management",
                      collapsed: false,
                      pages: [
                        {
                          page: "firefly-iii/importing-data",
                          label: "Importing data",
                        },
                        {
                          page: "firefly-iii/exporting-data",
                          label: "Exporting data",
                        },
                      ],
                    },
                  ],
                },
                {
                  group: "Data Importer",
                  id: "data-importer",
                  collapsed: false,
                  pages: [
                    {
                      group: "Files",
                      id: "data-importer/files",
                      collapsed: false,
                      pages: [
                        { page: "data-importer/csv", label: "Import a CSV file" },
                        {
                          page: "data-importer/camt",
                          label: "Import a CAMT.05x file",
                        },
                      ],
                    },
                    {
                      group: "Data providers",
                      id: "data-importer/data-providers",
                      collapsed: false,
                      pages: [
                        {
                          page: "data-importer/data-providers",
                          label: "What are data providers?",
                        },
                        { page: "data-importer/basiq", label: "import from basiq.io" },
                        {
                          page: "data-importer/eb",
                          label: "Import from Enable Banking",
                        },
                        { page: "data-importer/fints", label: "Import from FinTS" },
                        {
                          page: "data-importer/gocardless",
                          label: "Import from GoCardless",
                        },
                        {
                          page: "data-importer/sophtron",
                          label: "Import from Sophtron",
                        },
                        {
                          page: "data-importer/lunchflow",
                          label: "Import from Lunch Flow",
                        },
                        {
                          page: "data-importer/obg",
                          label: "Import from Open Banking/HBCI",
                        },
                        {
                          page: "data-importer/simplefin",
                          label: "Import from SimpleFIN",
                        },
                        {
                          page: "data-importer/teller",
                          label: "Import from teller.io",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ]
        }),
      },
      {
        "tab": "How-to guides",
        "slug":"how-to",
        "source": markdown({
          root: "docs/how-to",
          groups: [
            {
              group: "",
              id: "ungrouped-3",
              pages: [
                { page: "index", label: "How-to" },
                {
                  group: "General",
                  id: "general",
                  collapsed: false,
                  pages: [
                    { page: "general/debug", label: "How to debug things" },
                    {
                      page: "general/report-security-issues",
                      label: "How to report security issues",
                    },
                  ],
                },
                {
                  group: "How to install",
                  id: "how-to-guides/firefly-iii/how-to-install",
                  collapsed: false,
                  pages: [
                    {
                      page: "firefly-iii/installation/docker",
                      label: "Using Docker",
                    },
                    {
                      page: "firefly-iii/installation/portainer",
                      label: "Using Portainer",
                    },
                    {
                      page: "firefly-iii/installation/kubernetes",
                      label: "Using Kubernetes",
                    },
                    {
                      page: "firefly-iii/installation/self-managed",
                      label: "Using a self-managed server",
                    },
                    {
                      page: "firefly-iii/installation/hosted",
                      label: "Third party hosting",
                    },
                  ],
                },
                {
                  group: "How to upgrade",
                  id: "how-to-guides/firefly-iii/how-to-upgrade",
                  collapsed: false,
                  pages: [
                    { page: "firefly-iii/upgrade/docker", label: "Using Docker" },
                    {
                      page: "firefly-iii/upgrade/kubernetes",
                      label: "Using Kubernetes",
                    },
                    {
                      page: "firefly-iii/upgrade/self-managed",
                      label: "Using a self-managed server",
                    },
                  ],
                },
                {
                  group: "Advanced installation",
                  id: "how-to-guides/firefly-iii/advanced-installation",
                  collapsed: false,
                  pages: [
                    {
                      page: "firefly-iii/advanced/notifications",
                      label: "How to set up notifications",
                    },
                    {
                      page: "firefly-iii/advanced/authentication",
                      label: "How to use different authentication",
                    },
                    {
                      page: "firefly-iii/advanced/backup",
                      label: "How to make a backup",
                    },
                    {
                      page: "firefly-iii/advanced/locales",
                      label: "How to set up your local language",
                    },
                    {
                      page: "firefly-iii/advanced/cron",
                      label: "How to configure cron jobs",
                    },
                  ],
                },
                {
                  group: "Your finances",
                  id: "how-to-guides/firefly-iii/your-finances",
                  collapsed: false,
                  pages: [
                    {
                      page: "firefly-iii/finances/accounts",
                      label: "How to manage accounts",
                    },
                    {
                      page: "firefly-iii/finances/budgets",
                      label: "How to manage budgets",
                    },
                    {
                      page: "firefly-iii/finances/transactions",
                      label: "How to organize transactions",
                    },
                    { page: "firefly-iii/finances/cash", label: "How to track cash" },
                    {
                      page: "firefly-iii/finances/subscriptions",
                      label: "How to use subscriptions",
                    },
                    {
                      page: "firefly-iii/finances/reconcile",
                      label: "How to reconcile accounts",
                    },
                    {
                      page: "firefly-iii/finances/liabilities",
                      label: "How to manage liabilities",
                    },
                    {
                      page: "firefly-iii/finances/recurring",
                      label: "How to use recurring transactions",
                    },
                    {
                      page: "firefly-iii/finances/piggy-banks",
                      label: "How to use piggy banks",
                    },
                    {
                      page: "firefly-iii/finances/reports",
                      label: "How to read reports",
                    },
                  ],
                },
                {
                  group: "More features",
                  id: "how-to-guides/firefly-iii/more-features",
                  collapsed: false,
                  pages: [
                    {
                      page: "firefly-iii/features/multi-user",
                      label: "Make it multi-user",
                    },
                    { page: "firefly-iii/features/rules", label: "How to use rules" },
                    {
                      page: "firefly-iii/features/expressions",
                      label: "How to use expressions",
                    },
                    {
                      page: "firefly-iii/features/webhooks",
                      label: "How to use webhooks",
                    },
                    {
                      page: "firefly-iii/features/search",
                      label: "How to use the search",
                    },
                    {
                      page: "firefly-iii/features/currencies",
                      label: "How to use currencies",
                    },
                    { page: "firefly-iii/features/cli", label: "How to use the CLI" },
                    { page: "firefly-iii/features/api", label: "How to use the API" },
                  ],
                },
                {
                  group: "Development",
                  id: "how-to-guides/firefly-iii/development",
                  collapsed: false,
                  pages: [
                    {
                      page: "firefly-iii/development/translations",
                      label: "Translations",
                    },
                  ],
                },
              ],
            },
          ],
        }),
      },
      {
        "tab": "Reference guides",
        "slug":"references",
        "source": markdown({
          root: "docs/references",
          groups: [
            {
              "group": "",
              "id": "ungrouped-4",
              "pages": [
                { page: "index", label: "Reference guides" },
                {
                  group: "Firefly III",
                  id: "reference-guides/firefly-iii",
                  collapsed: false,
                  pages: [
                    { page: "firefly-iii/cli", label: "The CLI" },
                    { page: "firefly-iii/account-types", label: "Account types" },
                    {
                      page: "firefly-iii/transaction-types",
                      label: "Transaction types",
                    },
                    { page: "firefly-iii/search", label: "All search options" },
                    {
                      page: "firefly-iii/rule-triggers",
                      label: "All rule triggers",
                    },
                    {
                      page: "firefly-iii/rule-actions",
                      label: "All rule actions",
                    },
                    {
                      page: "firefly-iii/rule-expressions",
                      label: "Expressions",
                    },
                    {
                      group: "API",
                      id: "reference-guides/firefly-iii/api",
                      collapsed: false,
                      pages: [
                        { page: "firefly-iii/api", label: "The API" },
                        {
                          page: "firefly-iii/api/specials",
                          label: "Special endpoints",
                        },
                      ],
                    },
                    {
                      group: "Third parties",
                      id: "reference-guides/firefly-iii/third-parties",
                      collapsed: false,
                      pages: [
                        {
                          page: "firefly-iii/third-parties/host",
                          label: "Third parties that host Firefly III",
                        },
                        {
                          page: "firefly-iii/third-parties/apps",
                          label: "Third-party tools",
                        },
                      ],
                    },
                    { page: "firefly-iii/changelog", label: "Full changelog" },
                  ],
                },
                {
                  group: "Data Importer",
                  id: "reference-guides/data-importer",
                  collapsed: false,
                  pages: [
                    {
                      page: "data-importer/json",
                      label: "JSON configuration file",
                    },
                    { page: "data-importer/roles", label: "Data field roles" },
                    {
                      page: "data-importer/third-party-tools",
                      label: "Third-party tools",
                    },
                    {
                      page: "data-importer/public",
                      label: "Public installation",
                    },
                    {
                      page: "data-importer/duplicate-detection",
                      label: "Duplicate detection",
                    },
                    { page: "data-importer/changelog", label: "Full changelog" },
                  ],
                },
                {
                  group: "Frequently Asked Questions",
                  id: "reference-guides/frequently-asked-questions",
                  collapsed: false,
                  pages: [
                    {
                      group: "Firefly III",
                      id: "reference-guides/frequently-asked-questions/firefly-iii",
                      collapsed: false,
                      pages: [
                        {
                          page: "faq/firefly-iii/general",
                          label: "General questions",
                        },
                        { page: "faq/firefly-iii/using", label: "Using and running" },
                        {
                          page: "faq/firefly-iii/finances",
                          label: "Financial management",
                        },
                      ],
                    },
                    {
                      group: "Data Importer",
                      id: "reference-guides/frequently-asked-questions/data-importer",
                      collapsed: false,
                      pages: [
                        {
                          page: "faq/data-importer/general",
                          label: "General questions",
                        },
                        {
                          page: "faq/data-importer/import",
                          label: "Common import issues",
                        },
                        { page: "faq/data-importer/gocardless", label: "GoCardless" },
                      ],
                    },
                    { page: "faq/general", label: "General questions" },
                    { page: "faq/install", label: "Installing and running" },
                    { page: "faq/development", label: "Development" },
                    { page: "faq/docker", label: "Docker" },
                  ],
                },

                  ]
            }
          ],
        }),
      },

      {
        "tab": "Explanation",
        "slug": "explanation",
        "source": markdown({
          root: "docs/explanation",
          groups: [
            {
              "group": "",
              "id": "ungrouped-5",
              "pages": [
                  { page: "index", label: "Explanation" },
                {
                  group: "Data organization",
                  id: "data-organization",
                  collapsed: true,
                  pages: [
                    {
                      page: "data-classification/best-practices",
                      label: "Best practices",
                    },
                    {
                      page: "data-classification/what-to-use",
                      label: "Organizing transactions",
                    },
                  ],
                },
                {
                  group: "Financial concepts",
                  id: "financial-concepts",
                  collapsed: true,
                  pages: [
                    {
                      page: "financial-concepts/administrations",
                      label: "Administrations",
                    },
                    {
                      page: "financial-concepts/transactions",
                      label: "Transactions",
                    },
                    { page: "financial-concepts/accounts", label: "Accounts" },
                    { page: "financial-concepts/budgets", label: "Budgets" },
                    {
                      page: "financial-concepts/liabilities",
                      label: "Liabilities",
                    },
                    {
                      page: "financial-concepts/currencies",
                      label: "Currencies",
                    },
                    {
                      page: "financial-concepts/piggy-banks",
                      label: "Piggy banks",
                    },
                    {
                      page: "financial-concepts/subscriptions",
                      label: "Subscriptions",
                    },
                    {
                      page: "financial-concepts/recurring",
                      label: "Recurring transactions",
                    },
                    {
                      page: "financial-concepts/exchange-rates",
                      label: "Exchange rates",
                    },
                  ],
                },
                {
                  group: "Firefly III",
                  id: "firefly-iii",
                  collapsed: true,
                  pages: [
                    {
                      group: "About Firefly III",
                      id: "firefly-iii/about-firefly-iii",
                      collapsed: true,
                      pages: [
                        {
                          page: "firefly-iii/about/introduction",
                          label: "Introduction and features",
                        },
                        {
                          page: "firefly-iii/about/screenshots",
                          label: "Screenshots",
                        },
                        { page: "firefly-iii/about/demo", label: "Demo website" },
                      ],
                    },
                    {
                      group: "Background information",
                      id: "firefly-iii/background-information",
                      collapsed: true,
                      pages: [
                        {
                          page: "firefly-iii/background/personal-finances",
                          label: "Personal finances",
                        },
                        {
                          page: "firefly-iii/background/zero-based-budgeting",
                          label: "Zero based budgeting",
                        },
                        {
                          page: "firefly-iii/background/time-periods",
                          label: "Time periods",
                        },
                      ],
                    },
                  ],
                },
                {
                  group: "Data Importer",
                  id: "data-importer",
                  collapsed: true,
                  pages: [
                    { page: "data-importer/introduction", label: "About" },
                    {
                      page: "data-importer/separate-tool",
                      label: "Separate tool",
                    },
                    {
                      page: "data-importer/ignored-values",
                      label: "Ignored values",
                    },
                  ],
                },
                {
                  group: "More information",
                  id: "more-information",
                  collapsed: true,
                  pages: [
                    { page: "more-information/logo", label: "Logo and name" },
                    {
                      page: "more-information/architecture",
                      label: "Architecture",
                    },
                    { page: "more-information/security", label: "Security" },
                    { page: "more-information/license", label: "License" },
                    { page: "more-information/donations", label: "Donations" },
                    {
                      page: "more-information/what-its-not",
                      label: "Missing features",
                    },
                    {
                      page: "more-information/bending-and-breaking",
                      label: "(Security) testing",
                    },
                    {
                      page: "more-information/signatures",
                      label: "Digital signatures",
                    },
                  ],
                },
                { page: "other-tools", label: "Other tools" },
                { page: "code-of-conduct", label: "Code of conduct" },
                { page: "contributing", label: "Contribution guidelines" },
                { page: "support", label: "Support", hidden: false },


                ]
            }
          ]
        }),
      }

        ]
  },
  changelog: false
    }
);
