export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

export const truncateText = (text, maxLength = 120) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const downloadResume = () => {
  window.open('/resume/resume-sahil-ghag.pdf', '_blank');
};