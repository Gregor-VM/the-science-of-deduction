# The Science of Deduction 🔍

![The Science of Deduction Logo](/public/logo.ico)

> Disclaimer: This website was made with educational purposes, the project is under the MIT License.

The website of the famous detective **Sherlock Holmes**, this website will help train you observation and deductive skills in the training section. You will be provided with an image and you will have all the time to try to rack you brain and guess as most information as you can. An AI assitant will tell what of the information that you provided is **known to be correct**.

### Website

The project is live [here!](https://the-science-of-deduction.netlify.app/)

### Capture

![The Science of Deduction Capture](/public/capture.jpg)

## How does this works under the hood? 🔬

On the repo there is a document called _data.ts_ (in _src/utils/data.ts_) in which there's a list of object following the format:

```
[{
    original: "https:...", // the original link of the reddit post
    type: Type.desk, // the type of the puzzle
    image: "https:...", // the image that will be shown
    facts: `The owner of the image have x years old` // all the know facts
}]
```

As you can see, a string with the known facts are provided. This is a very time-consuming tasks and is the reason the project doesn't have many puzzles.

One way to achieve something better will be provide the model (the model use now is _openchat-3.5-1210_ which is free to use but doesn't allow images) with the actual image of the puzzles. I have considered this but the performance of any current model is just not good enough as the average reddit user and I want to keep the page to be open source and free to use.

### How can I add my own puzzles? 🧩

So, if you want to contribute by putting you own puzzle you are more than welcome, just add the puzzle in the format shown above (and remember to add the type if it doesn't exists).

## How can I contribute to this repo? 🤓

If you are interested in contributing to this project use [Astro](https://astro.build/)

To run it, you need to have installed [Node.js & npm](https://nodejs.org/en/download/), and [pnpm](https://pnpm.io/installation), them you can use the following commands.

The project also use [Tailwind CSS](https://tailwindcss.com/docs/installation).

_All commands are run from the root of the project, from a terminal:_

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

**Any contribution is truly appreciated!**

#### LICENSE 📜

This project is under the [MIT License](/LICENSE).

Don't forget to leave a star 🌟
