export const h1 = function(text: string): string {
  return "# " + text + "\n\n";
}

export const h2 = function(text: string): string {
  return "## " + text + "\n\n";
}

export const listItem = function(text: string): string {
  return "- " + text + "\n";
}

export const list = function(items: string[]): string {
  const itemsWithDashAddedInFront = items.map(listItem);
  return itemsWithDashAddedInFront.join("")
}