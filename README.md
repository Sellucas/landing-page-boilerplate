# Landing Page Boilerplate

This project provides a flexible starting point for building landing pages.

## Features

- **Next.js 14 & TypeScript**:
  - The latest version of the popular React framework with strongly typed JavaScript for a better developer experience.
- **UI & Styling**:
  - **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
  - **Framer Motion**: An animation library for React.
  - **shadcn/ui**: High-quality, accessible UI components.
- **Code Quality**:
  - **ESLint**: Airbnb Style Guide.
  - **Prettier**: Code formatter for consistent code style.
  - **Husky & Lint Staged**: Git hooks for automating tasks.
  - **Tailwind Class Sorting**: Automatic sorting of Tailwind CSS classes.
- **SEO Ready**: All essential SEO files preset.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Sellucas/landing-page-boilerplate.git
   cd landing-page-boilerplate
   ```

2. **Install dependencies:**:

   ```bash
    npm i
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Changing Remote URL**

   ```bash
   git remote set-url origin <new-remote-url>
   ```

## Scripts

Here are the main scripts available in this project:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run start`**: Starts the production server.
- **`npm run lint`**: Runs ESLint to lint the codebase.
- **`npm run prepare`**: Sets up Husky for git hooks.

## Changing Remote URL

If you've cloned this project and want to use it as a base for your own project, you might want to update the remote URL to point to your own repository on GitHub. You can do this using the following command:

```bash
git remote set-url origin <new-remote-url>
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a pull request.
