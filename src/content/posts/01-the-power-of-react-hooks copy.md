---
title: "How I do UI"
publishedAt: 2023-05-24
description: "Some basic rules I follow when doing ui"
slug: "how-i-do-ui"
isPublish: true
---

# 1. Do Not Use Margins

Margin collapse is terrible; it's extremely unintuitive. I usually add more padding elements rather than using margins because you can run into issues like margin collapse. With things like gap and more padding elements, you really don’t need to use margins. See here: [Rules of Margin Collapse](https://www.joshwcomeau.com/css/rules-of-margin-collapse/)

# 2. Stick to a Color Scheme

This is not specific to writing styling; it's crucial for the consistency of your design. Pick a few primary colors and a few secondary ones, then stick to them throughout your entire app. Using a color palette generator is usually not enough. You might not realize it, but you usually need more than 5 colors to look right. For one element, take a warning for example, you need the warning background, border, text, icon, and hover states. And do not pick those at whim either. Don’t waste time picking between #fcba03 and #f5be27. It should be clear that all these colors should be predefined. I highly recommend using [Tailwind’s color selection](https://tailwindcss.com/docs/customizing-colors).

# 3. Use a Predetermined System for Fonts

Just like with colors, you need to be consistent with your fonts. Start by picking a font. Make sure it has at least a 400 and 700 weight for normal and bold text, and that it has italic versions as well. You might not know which fonts look good, so just go to your favorite design site and look at what font they are using. It’s probably good because the good designers are all obsessed with type.

![Using Dev Tools to Find Font](https://lex-img-p.s3.us-west-2.amazonaws.com/img/f5760c82-f3de-40b8-8f39-8c3f42d9b25a-RackMultipart20231113-92-axr891.png)
_The website in the picture is [https://planetscale.com/](https://planetscale.com/)_

Make sure you have a system for the font size of all the header elements, paragraphs, labels, and everything else. Something like Tailwind makes this very easy. _Side note: Doesn't it seem like Tailwind makes a lot of this so much easier?_

# 4. Use Tailwind

> "Tailwind isn't just a faster way to write CSS; it's a design system."
> \- Theo @t3.gg

Yeah, just do that. It provides all the things above in a way that's easy to use. It's easier. You don't have to jump around everywhere. Tailwind is highly customizable. You can configure your design system (colors, spacing, typography, etc.) directly in the Tailwind configuration file. It also provides a powerful mobile-first grid system with built-in responsive variants. But you don't need me to tell you why Tailwind is so good, just go to [tailwindcss.com](https://tailwindcss.com)

---

I learned a lot of this from [Designing User Interfaces by Mike & Diana Malewicz](https://www.designingui.com/) and [Refactoring UI from the creators of Tailwind](https://www.refactoringui.com/). Both of these books cover similar concepts. It's good. Go read it. There will be more about UI to come.