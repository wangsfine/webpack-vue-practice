<template>
  <svg><use :xlink:href="iconName" /></svg>
</template>
<script>

const context = require.context('../assets/svg', false, /\.svg$/i);
function importAll(context) {
    context.keys().forEach(context);
}
importAll(context);

export default {
    name: 'SvgIcon',
    props: {
        name: {
            type: String,
            required: true,
        }
    },
    computed: {
        iconName() {
            const { name } = this;
            return `#icon-${name}`;
        }
    }
}
</script>

<style>

</style>