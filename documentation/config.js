module.exports = {
  cname: 'kitware.github.io',
  baseUrl: '/summarization',
  work: './build-tmp',
  config: {
    title: 'In-Situ Summarization',
    description: '"Gain knowledge on your in-situ simulations"',
    subtitle: '"Enable data insights without overload."',
    author: 'Kitware Inc.',
    timezone: 'UTC',
    url: 'https://kitware.github.io/summarization',
    root: '/summarization/',
    github: 'kitware/summarization',
  },
  copy: [
    { src: '../data/*', dest: './build-tmp/public/data' },
    { src: '../node_modules/arctic-viewer/dist/*', dest: './build-tmp/public/docs' },
  ],
};
