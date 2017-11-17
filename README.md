oiko_s
===

Oiko_s is a WordPress starter theme based on the SASS version of [\_s](https://underscores.me) that provides a simple and relatively unopinionated layer of build tools on top of the basic theme.

Features
---

oiko_s includes:

* A base set of npm packages
* A base webpack config
* SASS compilation
* ES2015/ES6 transpilation using Babel
* Live Reload

Rationale
---

\_s is a brilliant starter theme that sets some great standards for coding to and serves as an excellent starting point. But it's (probably deliberately) a little lacking in features.

And if you're looking for modern build tools then you can't beat the [Sage](https://roots.io/sage) framework from the [roots.io](https://roots.io) team.  It's well thought out, superbly executed, and full of modern tools. But it does too much for some jobs and requires an investment in learning the tools that Sage is based on.

So I wanted something in between. Something that gives me SASS and JS compilation and transpilation, and automatic reloading in the browser. But without dictating too much to me about how to build my project.

Getting Started
---------------

You'll want to download the theme, and then do some search and replacing to make it yours.

1. Search for `'oiko_s'` (inside single quotations) to capture the text domain.
2. Search for `oiko_s_` to capture all the function names.
3. Search for `Text Domain: oiko_s` in `style.css`.
4. Search for <code>&nbsp;oiko_s</code> (with a space before it) to capture DocBlocks.
5. Search for `oiko_s-` to capture prefixed handles.

Then, update the stylesheet header in `style.css`, the links in `footer.php` with your own information and rename `_s.pot` from `languages` folder to use the theme's slug. Next, update or delete this readme.

You'll need to have npm installed (I don't know which version - the latest probably).  You'll need to run `npm install` to get all the build tools and stuff.

Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!

Building
---

To build your theme run `npm run build`.

To build your theme for production run `npm run production`.

To run a watch process with Live Reload run `npm run watch`

