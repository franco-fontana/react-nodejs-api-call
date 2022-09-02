export async function getAllCars() {
  //   const rowData = [
  //     { make: "Ford", model: "Mondeo", price: 32000 },
  //     { make: "Porsche", model: "Boxter", price: 72000 },
  //     { make: "Toyota", model: "Celica", price: 35000 },
  //   ];

  try {
    const response = await fetch(
      "https://www.ag-grid.com/example-assets/row-data.json"
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}
