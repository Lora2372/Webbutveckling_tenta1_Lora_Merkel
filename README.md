<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's hello-world starter
</h1>

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->

## How to install the project
Go to the github web page: https://github.com/Lora2372/Webbutveckling_tenta1_Lora_Merkel

Click code, then download ZIP, save it to your computer, and open it with your unzipping application of choice (such as winrar).
Extract it to a location of your choice. Open up visual studio code, click file, open folder, navigate to the project directory, and click select folder.
In code, click terminal, new terminal, and run the following commands:
npm install -g gatsby-cli
npm install
gatsby develop

Then you're good to go!

## Tentamen answers
Se samband och utvärdera alternativa lösningar vid val av programmeringsteknik vid utveckling av dynamiska webbplatser

### Difference between static and dynamic web applications
Static web applications are used primarily to showcase information, read-only if you will. They do not have databases and can not be interacted with.
Dynamic web applications on the other hand are interactable and can change their content frequently. As a result, they also take longer to load. They
can show different data for different users and or user interaction, or even depending on time of day. [3]

### Client-side rendering vs server-side rendering
With client-side rendering the database gives the browser everything it needs to render the page, it is cheaper for the website owner as it puts less strain on their servers.

With server-side rendering, on the other hand, all the pieces are put together on the server and sent to the browser as a single ready to load file, it is faster for the user but is also more expensive. Gatsby is one of the frameworks that can be used for server-side rendering. [4]

### Templating languages
PUG generates HTML dynamically, it's a templating framework which makes it faster to write, allows you to reuse previous code, allows you to separate your markup from your logic. There are other templating languages such as handlebars, mustache, and more. [1, 5]

### Frameworks
Frameworks have a predefined structure for building your web application, which is supposed to help developers to develop faster. [2]

### Personal thoughts and reflection
Whilst larger frameworks can certainly be useful for complex apps, they can be excessive for smaller apps and projects.

For small apps, I think a templating language would suffice.

Server-side rendering seems to give the user a faster loading experience. And because all the content is available for the SEO, it can request and index everything immediately. Whilst with client-side rendering the indexing can be delayed by up to a week because the JS needs to be fully rendered first. On the other hand server side rendering seems to be both more resource heavy, and could become expensive because all the rendering work is done by your servers. [4, 6]

### Sources:
1. https://www.quora.com/What-are-the-pros-and-cons-of-using-a-template-engine-like-Jade

2. https://stackoverflow.blog/2020/02/03/is-it-time-for-a-front-end-framework/

3. https://www.geeksforgeeks.org/difference-between-static-and-dynamic-web-pages/

4. https://www.botify.com/blog/client-side-server-side-rendering-seo

5. https://medium.com/@bretcameron/so-you-think-you-know-html-7813c03f8ff6

6. https://medium.com/@benjburkholder/javascript-seo-server-side-rendering-vs-client-side-rendering-bc06b8ca2383