'use strict';

// Add rel attributes for links that open in a new tab for security.
document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  const existingRel = link.getAttribute('rel') || '';
  const relTokens = new Set(existingRel.split(/\s+/).filter(Boolean));
  relTokens.add('noopener');
  relTokens.add('noreferrer');
  link.setAttribute('rel', Array.from(relTokens).join(' '));
});
