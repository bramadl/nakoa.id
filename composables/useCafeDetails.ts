export default function () {
  const cafeDetails = ref([
    {
      name: "Coffee",
      description: "All our coffee selections in hot, iced, and frappe",
      amount: 18,
    },
    {
      name: "Non-coffee",
      description: "Our non-coffee beverages in hot, iced, and frappe",
      amount: 25,
    },
    {
      name: "Snack",
      description: "Mouthwatering sweet & savory snack selections",
      amount: 20,
    },
  ]);

  return useState("cafe-details", () => cafeDetails);
}