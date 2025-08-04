const projects = [{
"title": "Invoice Genie",
"status": "In Progress",
"description": "Billing-focused fullstack project exploring Cursor, Bun, tRPC, and GCP integration. Building backend services to manage invoice lifecycle such as creation, status updates, and reminders. Frontend in React with modular components and Firestore for data persistence.",
"tech_stack": [
"Bun",
"TypeScript",
"tRPC",
"React",
"Google Firestore",
"Google Cloud Tasks",
"Cursor"
],
"highlights": [
"Built modular invoice lifecycle backend with Bun and tRPC",
"Frontend React components support future micro-frontend integration",
"Explored Google Cloud Tasks for async orchestration"
]
},
{
"title": "BTS Seom: Music Catalog",
"status": "Deployed Backend",
"description": "Fan-focused BTS music catalog that allows mood-based song tagging. Includes backend API and relational database with server-side rendering and optimized Prisma schema.",
"tech_stack": [
"Express",
"Node.js",
"Prisma",
"PostgreSQL",
"React",
"Vite"
],
"highlights": [
"Engineered backend API and relational DB for mood-based tagging",
"Built SSR frontend in React and Vite",
"Optimized Prisma schema for scalable filtering"
],
"links": {
"deployed_site": "https://bts-seom-frontend.onrender.com",
"github_repo": "https://github.com/JessWillCode/bts-seom/tree/main"
}
},
{
"title": "AItinerary",
"status": "Case Study",
"description": "AI-powered travel planner that generates custom itineraries from user prompts and geolocation. Integrates GPT, Firebase, Google Maps API, and LangChain. Paused pre-MVP but shared as a technical case study.",
"tech_stack": [
"React",
"Firebase",
"OpenAI API",
"LangChain",
"Google Maps API"
],
"highlights": [
"Designed UX for AI-curated travel plans",
"Chained GPT prompt flows using LangChain",
"Published case study documenting architecture and GenAI experimentation"
]
},
{
"title": "CoderHeroes Platform Contributions",
"status": "Shipped",
"description": "Shipped parent dashboard, task views, and optimized Axios data fetching in React. Integrated Ant Design and designed comic-inspired UI.",
"tech_stack": [
"React",
"Axios",
"Ant Design",
"Figma",
"Jest",
"React Testing Library"
],
"highlights": [
"Reduced frontend load times by 20%",
"Enhanced UX with comic-themed UI and Ant Design components",
"Increased test coverage and reduced bugs post-release"
],
    "links": {
        "deployed_site": "https://bts-seom-frontend.onrender.com",
        "github_repo": "https://github.com/JessWillCode/coder-heroes-fe",
        "case_study": "https://www.figma.com/slides/zgaoTK3yaSLsRpZajrXW8V/Coderheroes-UX-UI-Case-Study?node-id=12-656&t=UIHyuQsjB9l9y4UA-1"
    }
},
{
"title": "Underdog Devs Auth0 Refactor",
"status": "Complete",
"description": "Refactored Auth0 login flow to improve performance and modularity. Boosted login efficiency by 35% and raised frontend test coverage to 85%.",
"tech_stack": [
"Auth0",
"React",
"Node.js",
"Jest",
"React Testing Library"
],
"highlights": [
"Streamlined fullstack authentication flow",
"Improved modularity and efficiency of login system",
"Boosted test coverage to 85%"
],
    "links": {
        "deployed_site": "https://bts-seom-frontend.onrender.com",
        "github_repo": "https://github.com/JessWillCode/coder-heroes-fe"
    }
},
{
"title": "Fullstack Academy Internal Tools",
"status": "Live",
"description": "Automated internal success tracking with Google Apps Script, supporting 10+ engineering cohorts and contributing to improved retention and reduced costs.",
"tech_stack": [
"Google Apps Script",
"Google Sheets",
"Slack API"
],
"highlights": [
"Automated learner tracking across 10+ cohorts",
"Enabled data-driven academic support strategy",
"Contributed to 91% retention and 16% instructional cost rate"
]
}]

export default projects;