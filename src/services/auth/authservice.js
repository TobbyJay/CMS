import axios from "@/gateway/backendapi";

const authService = {
    resetPassword(email) {
        return new Promise((resolve, reject) => {
            axios.post(`/existingUserPasswordReset/${email}`)
                .then(res => {
                    resolve(res.data);
                })
                .catch(error => {
                    NProgress.done();
                    if (error.response) {
                        resolve(error.response)
                    } else {
                        /*eslint no-undef: "warn"*/
                        reject(error)
                    }
                })
        })
    },

    forgotPassword(email) {
        return new Promise((resolve, reject) => {
            axios.post(`/forgotpassword/${email}`)
                .then(res => {
                    resolve(res.data);
                })
                .catch(error => {
                    NProgress.done();
                    if (error.response) {
                        resolve(error.response)
                    } else {
                        /*eslint no-undef: "warn"*/
                        reject(error)
                    }
                })
        })
    }
}

export default authService;