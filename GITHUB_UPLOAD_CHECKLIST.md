# GitHub Upload Checklist

Before pushing:
- [ ] `.env` is NOT present
- [ ] `node_modules` is NOT present
- [ ] `.env.example` is present
- [ ] All 8 phase folders are present
- [ ] README.md is present
- [ ] Postman collection is present
- [ ] Project passes `npm run check`
- [ ] Project runs with `npm install` and `npm start`
- [ ] MongoDB connection string is configured locally
- [ ] Gemini API key is configured locally
- [ ] Demo video is uploaded separately to Google Drive with appropriate sharing access
- [ ] GitHub repository is Public

Recommended commands:

```bash
git init
git add .
git commit -m "Initial FitSense AI project submission"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```
