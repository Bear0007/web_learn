class CreatBox{
    constructor(select,data){
        this.ele = document.querySelector(select)
        this.title = data.title
        this.list = data.list
        this.render()
    }
    render(){
        let oh1 = this.ele.querySelector('h1')
        let ul1 = this.ele.querySelector('ul')
        oh1.innerHTML = this.title
        ul1.innerHTML = this.list.map(item=>
            `<li>${item}</li>`
        ).join("")
    }
}
export default CreatBox