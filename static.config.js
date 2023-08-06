export default {
  paths: {
    "/ads.txt": {
      page: "ads.txt",
      getContent: async () => {
        const res = await fetch("/ads.txt");
        return await res.text();
      },
    },
  },
};
