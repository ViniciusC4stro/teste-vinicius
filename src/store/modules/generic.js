import axios from '@/config/axios';

export default {
    namespaced: true,
    state: {
        user: "",
        notifications: [],
        loading: [],
        methodExecutedApi: undefined,
    },
    mutations: {
        addUser: (state, name) => {
            state.user = name;
        },
    },
    actions: {
        postApi: async function (context, params) {

            //context.commit('cleanMethodExecutedApi');
            return axios
                .post(params.url, params.obj, {
                    headers: '',
                })
                .then(
                    (response) => {
                        if (response.data.success) {
                            // context.commit('addMethodExecutedApi', 'postApi');
                            // context.commit('removeNotificarions');
                            return response.data;
                        } else {
                            // context.commit('addNotifications', response.data.notifications);
                            //   context.commit('addToast', 'postApiError');
                            return response.data;
                        }
                    },
                    (err) => {
                        if (err.response)
                            if (err.response.status === 403)
                                /* context.commit('addNotifications', [
                                     { message: 'Usuário sem permissão para adicionar!' },
                                 ]);*/

                                //  if (!err.response) context.commit('addNotificationErrorApi');
                                return false;
                    }
                );
        },
    },
}