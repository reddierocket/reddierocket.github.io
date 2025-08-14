// Change this version whenever you update your site
const version = '1.0.0';

function addVersionParam(url) {
  if (!url || url.startsWith('http') || url.startsWith('#')) return url;
  return url + (url.includes('?') ? '&' : '?') + 'v=' + version;
}

// Update all anchor tags
document.querySelectorAll('a').forEach(link => {
  link.href = addVersionParam(link.getAttribute('href'));
});

// Update all scripts
document.querySelectorAll('script[src]').forEach(script => {
  if (!script.src.includes('cache-bust.js')) {
    script.src = addVersionParam(script.getAttribute('src'));
  }
});

// Update all stylesheets
document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
  link.href = addVersionParam(link.getAttribute('href'));
});

// Update all images
document.querySelectorAll('img').forEach(img => {
  img.src = addVersionParam(img.getAttribute('src'));
});
