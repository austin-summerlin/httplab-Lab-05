module.exports = rawRequest => {
  const [method, path] = rawRequest.split('/n')[0].split(' ');
  console.log('METHOD:', method, 'PATH:', path);
  return {
    method,
    path,
  };

};