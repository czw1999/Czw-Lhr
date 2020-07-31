module.exports = {
    title: 'HaiRong.Li',
    description: '只对溶溶心动',
    dest: './dist',
    base: '/L/',
    port: '52000',
    head: [
        ['link', {rel: 'icon', href: '/img/logo.favicon'}],
        ['link', {rel: 'stylesheet', href: '/css/style.css'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}