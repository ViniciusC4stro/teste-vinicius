import axios from '@/config/axios';

export default {
    namespaced: true,
    state: {
        notifications: [],
        loading: [],
        event: {
            dateTime: undefined,
            name: undefined,
            data: {},
        },
        methodExecutedApi: undefined,
    },
    getters: {
        isLoading: (state) => (key) => {
            var loading = state.loading.find((value) => {
                return value === key;
            });

            if (loading) return true;
            return false;
        },
    },
    mutations: {
        addLoading: (state, key) => {
            state.loading.push(key);
        },
        removeLoading: (state, listKey) => {
            listKey.forEach(function (key) {
                let filter = state.loading.filter(function (item) {
                    return item != key;
                });
                state.loading = filter;
            });
        },
        addEvent: (state, obj) => {
            setTimeout(function () {
                state.event.dateTime = new Date();
                state.event.name = obj.name;
                state.event.data = obj.data;
            }, 100);
        },
        removeEvent: (state) => {
            state.event = {};
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