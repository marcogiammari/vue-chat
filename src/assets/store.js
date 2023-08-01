import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    auth: false,
    errors: [],
    registrationErrors: [],
    user: {},

    async getUser() {
        await axios.get('/api/user').then((res) => {
            console.log(res);
            if (res.statusText = "OK") {
                this.auth = true;
                this.user = res.data;
            }
        }).catch((err) => {
            console.log(err);
        });
    },

    async getToken() {
        await axios.get('/sanctum/csrf-cookie');
    },

    async handleLogin(email, pw) {
        await axios.post('/login', {
            email: email,
            password: pw
        }).then((res) => {
            console.log(res);
            return 'success'
        }).catch((err) => {
            if (err.response.data.errors) {
                this.errors = err.response.data.errors
                console.log(this.errors);
            }
            console.log(err);
        })
        this.getUser()
    },

    async handleLogout() {
        await axios.post("/logout");
        this.auth = false;
        this.user = null;
    },

    async handleRegister(name, email, pw, pwConfirm) {
        await axios.post("/register", {
            name: name,
            email: email,
            password: pw,
            password_confirmation: pwConfirm
        }).then((res) => {
            console.log(res);
            return 'success'
        }).catch((err) => {
            if (err.response.data.errors) {
                this.registrationErrors = err.response.data.errors
                console.log(this.registrationErrors);
            }
            console.log(err);
        });;
    }
})