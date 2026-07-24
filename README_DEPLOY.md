Deployment instructions

1) Create a GitHub repository (public) and set remote `origin`.

2) Push the current folder to GitHub:

```bash
git init
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git add .
git commit -m "chore: prepare for deployment"
git push -u origin main
```

3) GitHub Pages
- After pushing, the `.github/workflows/gh-pages.yml` will run on push to `main` and publish the repository content to the `gh-pages` branch. In the repository settings > Pages, set the source to the `gh-pages` branch (root).

4) Vercel (for Next.js)
- Go to https://vercel.com and import the repository. Vercel auto-detects Next.js and deploys the `next-portfolio` app. Use the Project Settings to set the Root Directory to `next-portfolio` if Vercel doesn't auto-detect.

5) FormSubmit activation
- After deploying, trigger a form submission from the live site. FormSubmit will send an activation email for your deployed domain — click the activation link in that email to enable deliveries.

6) Optional: Netlify
- You can also connect the repo to Netlify and set the publish directory to `/` for the static root site, or use Netlify for functions.

If you want, I can push this repo for you if you add a GitHub remote or provide a personal access token. Otherwise, run the commands above and tell me once you pushed — I'll help finish the domain & FormSubmit activation steps.