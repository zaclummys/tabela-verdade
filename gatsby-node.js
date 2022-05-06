module.exports.createPages = async ({  actions }) => {
    const { createRedirect } = actions;

    createRedirect({
        fromPath: '/',
        toPath: '/en-US',
        conditions: {
            country: ['us', 'gb'],
        }
    });
};