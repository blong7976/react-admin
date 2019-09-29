const menulist = [
    {
        title:'首页',
        key:'/Index',
        icon:'home'
    },
    {
        title:'商品管理',
        key:'/Product',
        icon:'appstore',
        children:[
            {
                title:'商品管理',
                key:'/Product',
                icon:'bars'
            },
            {
                title:'品类管理',
                key:'/Catrproy',
                icon:'tool'
            }
        ]
    },
    {
        title:'用户管理',
        key:'/User',
        icon:'home'
    },
    {
        title:'角色管理',
        key:'/Role',
        icon:'pie-chart'
    }
]
export default menulist