function ajax(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('data-1111')
        },2000)
    })
  }
  let data = await ajax()
export default{
    name:'moduleA',
    data
}