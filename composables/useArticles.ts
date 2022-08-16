export default function () {
  type ArticleProps = {
    id: number;
    title: string;
    slug: string;
    tag: string;
    thumbnail: string;
  }[];
  
  const articles = ref<ArticleProps>([
    {
      id: 1,
      title: "How To Make A V60? Step By Step Coffee Guide",
      tag: "Journal",
      slug: "how-to-make-a-v60-step-by-step-coffee-guide",
      thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 2,
      title: "An Easy Going Moka, For Grumpy Mornings",
      tag: "Journal",
      slug: "an-easy-going-moka-for-grumpy-mornings",
      thumbnail: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
    },
    {
      id: 3,
      title: "Everything you need to know about roasting",
      thumbnail:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      tag: "Journal",
      slug: "everything-you-need-to-know-about-roasting"
    },
    {
      id: 4,
      title: "An easy going aeropress, enjoayble guide",
      thumbnail:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
      tag: "Journal",
      slug: "an-easy-going-aeropress,-enjoayble-guide"
    },
    {
      id: 5,
      title: "Everything you need to know about roasting",
      thumbnail:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      tag: "Journal",
      slug: "everything-you-need-to-know-about-roasting"
    },
    {
      id: 5,
      title: "Is Coffee Good for You?",
      thumbnail:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      tag: "Journal",
      slug: "is-coffee-good-for-you"
    },
  ]);

  return useState('articles', () => articles);
}