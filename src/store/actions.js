import http from 'axios'
// import fetch from '@/api/fetch'


const actions = {
	// 获取登录状态
	change_name({ commit }, data){
		commit("UPDATE_NAME", data);return;

		fetch({
			url: "",
			method: 'post',
			data,
		})
		.then(res => {
			if(res.code == 200){
				// do something
			}else{
				// do something
			}
		});
	},
}

export default actions