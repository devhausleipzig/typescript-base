export const h1 = function(text: string): string {
  return "# " + text;
}

export const h2 = function(text: string): string {
  return "## " + text;
}

export const listItem = function(text: string): string {
  return "- " + text;
}

export const list = function(items: string[]): string {
  const itemsWithDashAddedInFront = items.map(listItem);
  return itemsWithDashAddedInFront.join("\n")
}