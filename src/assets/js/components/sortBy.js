const sortBy = (haystack, needle) =>
  haystack.sort((a, b) => (a[needle] > b[needle] ? 1 : b[needle] > a[needle] ? -1 : 0));

export default sortBy;
