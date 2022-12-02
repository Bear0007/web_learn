import CreatBox from './CreatBox.js'
class son extends  CreatBox{
    constructor(select,data){
        super(select,data)
        this.img = data.image

        this.render() //这里重新调用一下，因为img没被渲染
    }
    
    
    render(){
        super.render()
        let imgUrl = this.ele.querySelector('img')
        imgUrl.src = this.img
    }
}
export {son}