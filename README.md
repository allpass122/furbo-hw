## How to run

Already deployed on vercel: https://weogje41.vercel.app/
If you want to run it locally, you can run `npm install` and `npm run dev`, just like a common next.js project.

## Tech Stack

- Next.js
- Tailwind CSS
- Nuqs
- React Query
- Zod
- Npm
- Lodash

## Roadmap or potential improvements

✅ RWD
✅ SSR
✅ A11Y
✅ SEO

- add skeleton to improve user experience.
- add transition to improve user experience.
- app icon remove background.
- corousel handle more keyboard events.
- handle searchBar upper/lower case.
- support dark mode.
- improve performance in slow 3G network.

## Some notes

- SearchBar with debounce implemented.

- Regarding the search functionality, I decided to fetch all breeds first and then implement filtering through the search bar, since the total number of breeds remains relatively constant.

- Bread images page use ssr to meet efficacy requirement, because this page will load a lot of images.

- `/photo/[id]` page can be ignored. Plan to do Intercepting Routes but it's hard to integrate with prev/next image feature.

- > When the user refreshes the web page by browser, the same search condition should be kept.

  not sure the meaning of this requirement, so I guess it means the result should be cached.

- I can not find fast 3G throttle, so I test in 3G network. And I found sometimes could not meet the requirement of 5s. Loading images is slow, but layout can be painted in time.
