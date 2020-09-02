// 全局路由
var router = []
router.push(
    {
        name:"控制台",
        icon:"fa fa-home ",
        children:[
            {
                name:"首页",
                path:'views/home.html',
            }
        ]
    }
)
// router 监听器
class RouterWatcher{
    constructor(opts){
        this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {};
        this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {};
        for(let key in opts.data){
            this.setData(key)
        }
    }
 
    getBaseType(target) {
        const typeStr = Object.prototype.toString.apply(target);
     
        return typeStr.slice(8, -1);
    }
    setData(_key){
        Object.defineProperty(this,_key,{
            get: function () {
                return this.$data[_key];
            },
            set : function (val) {
                const oldVal = this.$data[_key];
                if(oldVal === val)return val;
                this.$data[_key] = val;
                this.$watch[_key] && typeof this.$watch[_key] === 'function' && (
                    this.$watch[_key].call(this,val,oldVal)
                );
                return val;
            },
        });
    }
}
// 监听token的变化
let routerGuard = new RouterWatcher({
    data:{
        token: localStorage.getItem('token'),
        router:router
    },
    watch:{
        token(newVal,oldVal){
            location.href = 'views/login.html';
        },
        router(newVal,oldVal){
            router = newVal;
        }
    }
})

// 路由权限 需要后端配合返回的数据类型
// 动态路由
if(localStorage.getItem('token') === 'a66abb5684c45962d887564f08346e8d'){
    routerGuard.router = [
        {
            name:"控制台",
            icon:"fa fa-home ",
            children:[
            
                {
                    name:"首页",
                    path:'views/home.html',
                }
            ]
        },
        {
            name:"组件",
            icon:"fa fa-table",
            children:[
                {
                    name:"卡片",
                    path:'views/assembly/card.html',
                },
                {
                    name:"折叠面板",
                    path:'views/assembly/folding-panel.html',
                },
                {
                    name:"选项卡",
                    path:'views/assembly/tab.html',
                },
                {
                    name:"按钮",
                    path:'views/assembly/button.html',
                },
                {
                    name:"模态框",
                    path:'views/assembly/dialogue.html',
                },
                {
                    name:"表单元素",
                    path:'views/assembly/input.html',
                },
                {
                    name:"表格",
                    path:'views/assembly/table.html',
                },
                {
                    name:"分页",
                    path:'views/assembly/paging.html',
                }
            ]
        }
        ,
        {
            name:"插件",
            icon:"fa fa-paperclip",
            children:[
                {
                    name:"树形控件",
                    path:'views/instrument/tree.html',
                },
                {
                    name:"工具函数",
                    path:'views/instrument/util.html',
                },
            ]
        },
        {
            name:"生态系统",
            icon:"fa fa-cogs",
            children:[
                {
                    name:"Router",
                    path:'views/System/router.html',
                },
                {
                    name:"Request",
                    path:'views/System/request.html',
                },
                {
                    name:"Meetion",
                    path:'views/System/meetion.html',
                },
            ]
        }
    ]
}else if(localStorage.getItem('token')==''|| localStorage.getItem('token') == undefined || localStorage.getItem('token') ==null){
    // 判断非法修改token
    location.href = 'views/login.html';
} 
else{
    // routerGuard.router =[ {
    //     name:"首页",
    //     path:'views/home.html',
    //     icon:"fa fa-home "
    // }]
    location.href = 'views/login.html';
}
