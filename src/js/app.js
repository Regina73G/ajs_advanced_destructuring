export function outputSpecialAttacks({ special }) {
  const result = [];
  special.map((item) => {
    const newItem = { ...item };
    if (!newItem.hasOwnProperty("description")) {
      newItem.description = "Описание недоступно";
    }
    result.push(newItem);
  });
  return result;
}