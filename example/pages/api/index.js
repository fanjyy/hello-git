export default {
    Tabs:{
        props:[{
            name:'type',
            intro:'选项卡基本样式，可选值 <code>line</code> / <code>card</code> / <code>radius</code>',
            type:'String',
            default:'line'
        },{
            name:'not-animated',
            intro:'关闭页面切换动画',
            type:'boolean',
            default:'false'
        },{
            name:'fixed',
            intro:'是否将导航悬浮在顶部并跟随屏幕滚动',
            type:'boolean',
            default:'false'
        },{
            name:'scroll',
            intro:'当选项卡过多时，是否允许菜单滚动',
            type:'boolean',
            default:'false'
        },{
            name:'horizontal',
            intro:'是否纵向排列图标，只支持 <code>line</code> 和 <code>card</code> 类型的导航',
            type:'boolean',
            default:'false'
        }],
        events:[{
            name:'change',
            intro:'切换选项卡时触发',
            callback_intro:'index'
        }],
        slot:[{
            name:'label',
            intro:'选项卡标题'
        },{
            name:'ico',
            intro:'图标 class'
        }]
    },
    Checkbox:{
        props:[{
            name:'v-model',
            intro:'选中的值',
            type:'array',
            default:'[]'
        },{
            name:'left-ico',
            intro:'在左侧显示图标',
            type:'boolean',
            default:'false'
        },{
            name:'ico',
            intro:'使用的图标，在 <code>slot</code> 上可以单独定义',
            type:'string',
            default:'success-fill'
        }],
        events:[{
            name:'change',
            intro:'改变选中项时触发',
            callback_intro:'val'
        }],
        slot:[{
            name:'label',
            intro:'选项卡标题'
        },{
            name:'ico',
            intro:'图标 class'
        },{
            name:'disabled',
            intro:'是否禁用选项'
        }]
    },
    Radio:{
        props:[{
            name:'v-model',
            intro:'选中的值',
            type:'array',
            default:'[]'
        },{
            name:'left-ico',
            intro:'在左侧显示图标',
            type:'boolean',
            default:'false'
        },{
            name:'ico',
            intro:'使用的图标，在 <code>slot</code> 上可以单独定义',
            type:'string',
            default:'success-fill'
        }],
        events:[{
            name:'change',
            intro:'改变选中项时触发',
            callback_intro:'val'
        }],
        slot:[{
            name:'label',
            intro:'选项卡标题'
        },{
            name:'ico',
            intro:'图标 class'
        },{
            name:'disabled',
            intro:'是否禁用选项'
        }]
    },
    Modal:{
        props:[{
            name:'v-model',
            intro:'是否显示弹窗',
            type:'boolean',
            default:'false'
        },{
            name:'title',
            intro:'弹窗标题',
            type:'string',
            default:''
        },{
            name:'type',
            intro:'弹窗类型，可选值 <code>alert confirm panel</code>',
            type:'string',
            default:'alert'
        },{
            name:'position',
            intro:'显示的位置，可选值 <code>top bottom left right center full</code>',
            type:'string',
            default:'center'
        },{
            name:'cancel-ico',
            intro:'取消按钮的图标',
            type:'string',
            default:''
        },{
            name:'cancel-txt',
            intro:'取消按钮的文字',
            type:'string',
            default:'取消'
        },{
            name:'ok-ico',
            intro:'确定按钮的图标',
            type:'string',
            default:''
        },{
            name:'ok-txt',
            intro:'确定按钮的文字',
            type:'string',
            default:'确定'
        },{
            name:'shade-color',
            intro:'遮罩的颜色',
            type:'string',
            default:'rgba(0,0,0,.8)'
        },{
            name:'shade-close',
            intro:'点击遮罩是否关闭弹窗',
            type:'boolean',
            default:'true'
        },{
            name:'auto-close',
            intro:'自动关闭毫秒',
            type:'number',
            default:'0'
        }],
        events:[{
            name:'close',
            intro:'弹窗关闭时触发',
            callback_intro:''
        }],
        slot:[{
            name:'* default',
            intro:'弹窗内容'
        }]
    },
    Button:{
        props:[{
            name:'type',
            intro:'按钮类型 <code>primary info success warning error</code>',
            type:'string',
            default:'primary'
        },{
            name:'mini',
            intro:'小号按钮',
            type:'boolean',
            default:'false'
        },{
            name:'plain',
            intro:'线条按钮',
            type:'boolean',
            default:'false'
        },{
            name:'inline',
            intro:'内联按钮 <code>display:inline-block</code>',
            type:'boolean',
            default:'false'
        },{
            name:'disabled',
            intro:'禁用按钮',
            type:'boolean',
            default:'false'
        },{
            name:'loading',
            intro:'加载状态的按钮',
            type:'boolean',
            default:'false'
        },{
            name:'stiff',
            intro:'直角按钮',
            type:'boolean',
            default:'false'
        },{
            name:'ico',
            intro:'图标 class',
            type:'boolean',
            default:'false'
        },{
            name:'margin',
            intro:'按钮边距',
            type:'string|number',
            default:''
        }],
        slot:[{
            name:'* default',
            intro:'按钮文字'
        }]
    },
    ButtonGroup:{
        props:[{
            name:'vertical',
            intro:'将按钮组竖向排列',
            type:'boolean',
            default:'false'
        },{
            name:'说明',
            intro:'可以为按钮组内的按钮批量定义这些属性 <br/><code>type<br/>mini<br/>plain<br/>stiff<br/>margin<br/>disabled</code>',
        }]
    },
    Switch:{
        props:[{
            name:'v-model',
            intro:'默认值',
            type:'String  Boolean  Number',
            default:'false'
        },{
            name:'label',
            intro:'标题',
            default:''
        },{
            name:'ico',
            intro:'标题图标',
            default:''
        },{
            name:'true',
            intro:'选中时的值',
            type:'String  Boolean  Number',
            default:'true'
        },{
            name:'false',
            intro:'未选中时的值',
            type:'String   Boolean  Number',
            default:'false'
        },{
            name:'disabled',
            intro:'禁用',
            type:'Boolean',
            default:'false'
        }]
    },
    
}