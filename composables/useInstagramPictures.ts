export default function () {
  const instagramPictures = ref([
    "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359235772-2W6OJCYTUD8RO9MU4L8E/image-asset.jpeg?format=500w",
    "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359236681-2472G2MEENVRUW4AH169/image-asset.jpeg?format=500w",
    "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359237196-HBF79NBBJYKLHI2XUGJG/image-asset.jpeg?format=500w",
    "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359235772-2W6OJCYTUD8RO9MU4L8E/image-asset.jpeg?format=500w",
    "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359236681-2472G2MEENVRUW4AH169/image-asset.jpeg?format=500w",
    "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359237196-HBF79NBBJYKLHI2XUGJG/image-asset.jpeg?format=500w",
  ]);

  return useState("instagram-pictures", () => instagramPictures);
}