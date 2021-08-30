<template>
  <div class="login">
    <img 
      class="logo" 
      src="../assets/img/baidu.png" 
      alt="logo"
    >
    <Form
      ref="ruleForm"
      class="form"
      :model="ruleForm"
      :rules="rules"
    >
      <Form-item prop="username">
        <Input
          v-model="ruleForm.username"
          placeholder="username"
        />
      </Form-item>
      <Form-item prop="password">
        <Input
          v-model="ruleForm.password"
          type="password"
          placeholder="password"
        />
      </Form-item>
      <Form-item>
        <Button 
          type="primary"
          long
          @click="handleClick"
        >
          Login
        </Button>
      </Form-item>
    </Form>
  </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
          ruleForm: {
            username: '',
            password: '',
          },
          rules: {
            username: [
              {
                required: true,
                message: 'please input your username',
                trigger: 'change',
              }
            ],
            password: [
              {
                required: true,
                message: 'please input your password',
                trigger: 'change',
              }
            ],
          }
        };
    },
    methods: {
      handleClick() {
        this.$refs.ruleForm.validate((valid) => {
          valid && this.$router.replace({ name: 'Index'})
        });
      }
    },
}
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logo {
        max-width: 200px;
    }
    .form {
      width: 300px;
      margin-top: 50px;
      margin-bottom: 50px;
    }
}
</style>>
