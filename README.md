## How to run

## Tech Stack

- Next.js
- Tailwind CSS
- Nuqs
- React Query
- Zod

## Roadmap or potential improvements

- add skeleton to improve user experience.
- add transition to improve user experience.
- app icon remove background.
- corousel handle more keyboard events.

## Some notes

- Regarding the search functionality, I decided to fetch all breeds first and then implement filtering through the search bar, since the total number of breeds remains relatively constant.

- Bread images page use ssr to meet efficacy requirement, because this page will load a lot of images.

- `/photo/[id]` page can be ignored. Plan to do Intercepting Routes but it's hard to integrate with prev/next image feature.

- > When the user refreshes the web page by browser, the same search condition should be kept.

  not sure the meaning of this requirement, so I guess it means the result should be cached.
