const getReleaseYear = (releaseDate, firstAirDate) => {
  if (releaseDate) {
    return releaseDate.slice(0, 4);
  } else if (firstAirDate) {
    return firstAirDate.slice(0, 4);
  }
  return '';
};

const getMovieOverview = overview => {
  const wordCount = overview.trim().split(' ').length;
  if (wordCount === 0) {
    return 'Sorry there is no overview of that movie';
  } else if (wordCount < 3 || wordCount > 90) {
    return 'Click to read more';
  }
  return overview;
};

export { getMovieOverview, getReleaseYear };
