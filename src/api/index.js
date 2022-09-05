import axios from 'axios'
import qs from 'qs'
import store from '@/vuex'
import router from '@/router'

function checkPermission(data){
    if(data.result.success==444){
       alert(data.result.info)
       store.dispatch("doLogout")
       router.push("/login")
       return false;
    }
}

const config={
    baseURL: process.env.VUE_APP_API,
    timeout: 10000
  }

async function get(url,data){
    config['url']=url
    config['headers']={'token':store.state.user.token,'Content-Type':'application/x-www-form-urlencoded'}
    config['method']='get'
    const result=await axios.post(url,qs.stringify(data),config)

    checkPermission(result.data)
    return result.data
}

async function post(url,data){
    config['url']=url
    config['headers']={'token':store.state.user.token,'Content-Type':'application/x-www-form-urlencoded'}
    config['method']='post'
    const result=await axios.post(url,qs.stringify(data),config)

    checkPermission(result.data)
    return result.data
}


export {get,post} 