import axios from "axios";
import packageJson from '../../../package.json'

const state = {
    contactInfo: ''
}

const getters = {
    contactInfo: (state) => state.contactInfo
}

const actions = {
    sendContactInfo({commit},contactFormData) {
        const apiUrl = packageJson.projectUrl;
        axios.post(`${apiUrl}/api/contact`, contactFormData)
            .then(response => {
                commit('setContactInfo', response.data);
            })
            .catch(error => {
                console.log("Unable to send contact info : " + error);
            });
    }
}

const mutations = {
    setContactInfo(state,data){
        state.contactInfo = data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
