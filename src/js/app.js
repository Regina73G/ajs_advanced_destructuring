export function outputSpecialAttacks({ special }) {
  return special.map((item) => {
    const { id, name, icon, description = "Описание недоступно"} = item;
    return { id, name, description, icon };
  });
}