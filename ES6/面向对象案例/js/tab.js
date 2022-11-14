let that = this //设置全局变量
class Tab{
    //公有
    constructor(id){
        //获取元素
        that = this
        this.main = document.querySelector(id)
        this.add = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('.fisrstnav ul:first-child')
        this.tabscon = this.main.querySelector('.tabscon')
       
        this.init()
    }
    //获取所有的小li和section
    updateNode(){
        this.lis = this.main.querySelectorAll('li')
        this.section = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')//获取所有的删除按钮
    }
    //初始化操作 让相关元素绑定事件
    init(){
        this.updateNode()
        this.add.onclick = this.addTab //添加操作
        for( let i = 0; i < this.lis.length; i++){
            this.lis[i].index = i
            this.lis[i].addEventListener('click',this.toggleTab)//这里不加括号，加括号是立即调用
            this.remove[i].onclick = this.removeTab
        }
    }
    //切换功能
    toggleTab(){
        // console.log(this.index)
        that.clearClass() //这里是指向的实例对象
        this.className = 'liactive'
        that.section[this.index].className = 'conactive'
    }
    //清除样式
    clearClass(){
        for(let i = 0;i<this.lis.length;i++){
           this.lis[i].className = ''
           this.section[i].className = '' 
        }
    }
    //添加功能
    addTab(){
        // console.log(322)
        that.clearClass()
        let random = Math.random() //生成随机数
        console.log(random)
        let li = '<li class="liactive"><span>新选项卡'+'</span><span class="iconfont icon-guanbi"></span></li>'
        let section = '<section class="conactive">新内容'+ random +'</section>'
        that.ul.insertAdjacentHTML('beforeend',li)
        that.tabscon.insertAdjacentHTML('beforeend',section)
        that.init()
    }
    //删除功能
    removeTab(e){
        // console.log(555)
        e.stopPropagation()
        let index = this.parentNode.index
        console.log(index)
        that.lis[index].remove() //remove方法可以直接删掉指定的元素
        that.section[index].remove()
        that.init()
        //当我们删除了不是选中状态的这个li，让它的前一个li处于选定状态
        if(document.querySelector('.liactive')){
            return
        }
        index--
        that.lis[index] && that.lis[index].click() //调用点击事件，自动点击index设置active
    }
    //修改功能
    editTab(){

    }
}
new Tab('#tab')