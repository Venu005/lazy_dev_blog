const similarItems = (currentItem: any, allItems: any, slug: string) => {
  let categories: [] = [];
  let tags: [] = [];

  if (currentItem.data.categories.length > 0) {
    categories = currentItem.data.categories;
  }
  if (currentItem.data.tags.length > 0) {
    tags = currentItem.data.tags;
  }

  const filterByCategories = allItems.filter(
    (item: { data: { categories: string } }) =>
      categories.find((category) => item.data.categories.includes(category))
  );

  const filterByTags = allItems.filter((item: { data: { tags: string } }) =>
    tags.find((tag) => item.data.tags.includes(tag))
  );

  const mergedItems = [...new Set([...filterByCategories, ...filterByTags])];

  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};

export default similarItems;
