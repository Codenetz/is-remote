export default path => {
  if (!path.startsWith('http') || !path.startsWith('www')) return false;

  console.log('pass', path);
  return false;
};
