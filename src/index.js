module.exports = (options = {}) => {
    return {
        enhanceAppFiles: [{
            name: 'intercom',
            content: 'import VueIntercom from "vue-intercom";' +
                `export default ({ Vue }) => { Vue.use(VueIntercom, ${JSON.stringify(options)}) }`
        }]
    }
};