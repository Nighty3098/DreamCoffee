export const optimizedImage = (url, width = 400) => {
  // Если это изображение с Unsplash, добавляем параметры для оптимизации
  if (url.includes('unsplash.com')) {
    return `${url}?w=${width}&q=80&auto=format,compress`;
  }
  return url;
};
