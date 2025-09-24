<div align="center">
<a href="https://oopsiq.onrender.com/"><img src="/public/logo.png" width="60px"></a>
</div>

<div align="center">
<h1>OopsIQ</h1>
<p>The ultimate learner's companior for transforming notes into interactive quizzes to help maximize learning retention</p>
</div>

## Deployed Link
[OOPS IQ](https://oopsiq.onrender.com/)


## Technologies

- 🎯 [NextJS](https://nextjs.org) - UI framework
- ☑️ [Vercel](https://vercel.com) - Hosting and deployment
- 💅🏽 [TailwindCSS](https://tailwindcss.com) /CSS - Styling and UI
- 🤖 [Gemini](https://gemini.google.com) / AI API

## Run Project Locally

Follow the steps below to run quiznote locally on your machine

> [!note]
> For the Google AI Hackathon judges, please ignore the steps below and insert the `GOOGLE_SERVICE_KEY` sent via the test email into a `.env.local` file to start the program.

- `git clone https://github.com/deepakkumartripathi119/OopsIQ`

- Rename `.env.example` to `.env.local`
- Get your private keys from [google cloud IAM & Admin](https://cloud.google.com)
- Create a project that has access to all Vertext AI resource
- Export the service account key to `JSON`
- convert the `JSON` content to `base64`
- Set the value of `GOOGLE_SERVICE_KEY` to the Base64 JSON

```bash

cd OopsIQ

npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Important files and folders

| File(s)                                       | Description                                   |
| --------------------------------------------- | --------------------------------------------- |
| [`route.ts`](./src/app/api/generate/route.ts) | Integration file for setting up Gemini prompt |
| [`page.tsx`](./src/app/page.tsx)              | Homepage route                                |
| [`components`](./src/components/)             | Where components are stored                   |
| [`store`](./src/store/)                       | State management store                        |

<br /><br />

<div align="center">
  <p>Built for the <a href="https://googleai.devpost.com/?ref_feature=challenge&ref_medium=discover">Google AI Hackathon</a></p>
  <p>Powered by</p>
  <a href="https://gemini.google.com"><img src="/public/images/gemini.png" width="150px"></a>
</div>
