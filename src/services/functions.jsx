
export function isActiveFilter(filter) {
  return filter.brand || filter.price || filter.from || filter.to;
}
