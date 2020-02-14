// 全局路由
var router = []
router.push(
    {
        name:"首页",
        path:'vivews/home.html',
        icon:"fa fa-home "
    },
    {
        name:"table表格",
        path:'vivews/table.html',
        icon:"fa fa-table",
    },
    {
        name:"login模板",
        path:'../login.html',
        icon:"fa fa-bars",
    },
    {
        name:"404模板",
        path:'../404.html',
        icon:"fa fa-bar-chart"
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
            location.href = 'vivews/login.html';
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
            name:"home 首页",
            path:'vivews/home.html',
            icon:"fa fa-home "
        },
        {
            name:"table 表格",
            path:'vivews/table.html',
            icon:"fa fa-table",
            
        },
        {
            name:"button 按钮",
            path:'vivews/button.html',
            icon:"fa fa-bandcamp",
        }, 
        {
            name:"system 生态",
            path:'vivews/System.html',
            icon:"fa fa-cogs",
        }, 
    ]
}else if(localStorage.getItem('token')==''|| localStorage.getItem('token') == undefined || localStorage.getItem('token') ==null){
    // 判断非法修改token
    location.href = 'vivews/login.html';
} 
else{
    // routerGuard.router =[ {
    //     name:"首页",
    //     path:'vivews/home.html',
    //     icon:"fa fa-home "
    // }]
    location.href = 'vivews/login.html';
}
