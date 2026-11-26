# David Coronado — Portfolio

Personal portfolio for David Coronado, a Statistics and Sport Analytics student at Rice University.

**Live site:** https://davcrown.github.io

## Pages

| Page | What it covers |
|---|---|
| `index.html` | Home: introduction and featured work |
| `about.html` | Personal story |
| `experience.html` | Work, research and leadership timeline |
| `projects.html` | All projects, competitions and reports |
| `skills.html` | Skills, education, honors and coursework |
| `spurs2-hackathon.html` | Spurs² Hackathon winning project |
| `cfb-ratings.html` | CFB Bayesian Ratings dashboard |
| `rupd-dashboard.html` | RUPD Crime Log Dashboard |
| `nba-mvp.html` | Synthesizing the MVP study |

## How it's built

Plain HTML and one stylesheet (`style.css`), hosted on GitHub Pages with no build step. The site accent color is the `--accent` variable at the top of `style.css`.

The two Shiny dashboards are embedded with `embed.js`: each shows a screenshot until a visitor clicks to load the live app, so page views don't wake the shinyapps.io servers.

Images live in `docs/assets/`, and the downloadable resume is `docs/David-Coronado-Resume.pdf`.
