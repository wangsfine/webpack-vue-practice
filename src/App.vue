
<script>
export default () => (
    <div class="app">
        <router-view/>
    </div>
)
</script>

<style lang="less" scoped>
    @bgColor: #1291cc;
    .app {
        width: 100%;
        height: 100%;
        background-color: @bgColor;
        animation: slide-in 1s;
        /deep/ .login {
            color: #ffffff;
        }
    }
    @keyframes slide-in {
        from {
            opacity: 0.5;;
        }
        to {
            opacity: 1;
        }
    }
</style>