module.exports = {
  async rewrites() {
    return [
      {
        source: '/about',
		has: [
			{
				type: "query",
				key: "page",
				value: "(?<page>.*)"
			}
		],
        destination: '/about/:page',
      },
	  {
        source: '/about/',
		has: [
			{
				type: "query",
				key: "page",
				value: "(?<page>.*)"
			}
		],
        destination: '/about/:page/',
      },
    ]
  },
}
