# The site
My Curriculum Vitae page

Everyone needs a CV, and since I worked mostly in web projects it's seems fair to have a CV in my personal page.

> A forever never finished project

## The "whys"
In this section I have some explanations about why some decisions where made.
Since it is a very simplist project I had to take some decision that for a real full feldged project may sounds odd or not very wise, but for this context, and for simplisity it works for this project.

### Why [Next.js](https://nextjs.org/)?
This project could be very well made only using react as a static page, nextjs is defenetly a overkill for this project.
Honestly, the reason was very selfish: I have experience with nextjs, but at my current work I don't have much opportunities to work it it, so I decided to do this project in nextjs just to challange my previous knolagede and also keep up with the current stat of nextjs.

### Why simulate a backend?
Well, thanks to nextjs's SSR I could make a logical separation from web components and content without sacrificing performance or UX with loading time.
Yes, but you are using `force-dynamic`, which means you are always SSR the page, instead of render it a build time.

### Why this project structure feels kind odd?

