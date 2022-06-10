var e=Object.defineProperty,l=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(l,o,r)=>o in l?e(l,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[o]=r,n=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&a(e,t,n[t]);if(o)for(var t of o(n))r.call(n,t)&&a(e,t,n[t]);return e};import{h as t}from"./index.e75893be.js";import{a1 as i,r as d,t as u,p as s,d as c,_ as m,b as p,e as g,f,g as h,h as b,w as y,k as C,u as F,a4 as v,o as k,l as _,a8 as w,a9 as x,j as T,Z as V}from"./vendor.1eb01a02.js";const S={name:"DialogAddHotGood",props:{type:String,configType:Number,reload:Function},setup(e){const l=i(null),o=d({visible:!1,ruleForm:{name:"",link:"",id:"",sort:""},rules:{name:[{required:"true",message:"名称不能为空",trigger:["change"]}],id:[{required:"true",message:"编号不能为空",trigger:["change"]}],sort:[{required:"true",message:"排序不能为空",trigger:["change"]}]},id:""});return n(n({},u(o)),{open:e=>{o.visible=!0,e?(o.id=e,(e=>{p.get(`/indexConfigs/${e}`).then((e=>{o.ruleForm={name:e.configName,id:e.goodsId,link:e.redirectUrl,sort:e.configRank}}))})(e)):o.ruleForm={name:"",id:"",link:"",sort:""}},close:()=>{o.visible=!1},formRef:l,submitForm:()=>{l.value.validate((l=>{if(l){if(t(o.ruleForm.name)||t(o.ruleForm.link))return void m.error("不要输入表情包，再输入就打死你个龟孙儿~");if(o.ruleForm.name.length>128)return void m.error("商品名称不能超过128个字符");if(o.ruleForm.sort<0||o.ruleForm.sort>200)return void m.error("排序值不能小于 0 或大于 200");"add"==e.type?p.post("/indexConfigs",{configType:e.configType||3,configName:o.ruleForm.name,redirectUrl:o.ruleForm.link,goodsId:o.ruleForm.id,configRank:o.ruleForm.sort}).then((()=>{m.success("添加成功"),o.visible=!1,e.reload&&e.reload()})):p.put("/indexConfigs",{configId:o.id,configType:e.configType||3,configName:o.ruleForm.name,redirectUrl:o.ruleForm.link,goodsId:o.ruleForm.id,configRank:o.ruleForm.sort}).then((()=>{m.success("修改成功"),o.visible=!1,e.reload&&e.reload()}))}}))},handleClose:()=>{l.value.resetFields()}})}},I=y();s("data-v-284d9796");const P={class:"dialog-footer"},D=C("取 消"),U=C("确 定");c();const z=I(((e,l,o,r,a,n)=>{const t=g("el-input"),i=g("el-form-item"),d=g("el-form"),u=g("el-button"),s=g("el-dialog");return f(),h(s,{title:"add"==o.type?"添加商品":"修改商品",modelValue:e.visible,"onUpdate:modelValue":l[6]||(l[6]=l=>e.visible=l),width:"400px",onClose:r.handleClose},{footer:I((()=>[b("span",P,[b(u,{onClick:l[5]||(l[5]=l=>e.visible=!1)},{default:I((()=>[D])),_:1}),b(u,{type:"primary",onClick:r.submitForm},{default:I((()=>[U])),_:1},8,["onClick"])])])),default:I((()=>[b(d,{model:e.ruleForm,rules:e.rules,ref:"formRef","label-width":"100px",class:"good-form"},{default:I((()=>[b(i,{label:"商品名称",prop:"name"},{default:I((()=>[b(t,{type:"text",modelValue:e.ruleForm.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.ruleForm.name=l)},null,8,["modelValue"])])),_:1}),b(i,{label:"跳转链接",prop:"link"},{default:I((()=>[b(t,{type:"text",modelValue:e.ruleForm.link,"onUpdate:modelValue":l[2]||(l[2]=l=>e.ruleForm.link=l)},null,8,["modelValue"])])),_:1}),b(i,{label:"商品编号",prop:"id"},{default:I((()=>[b(t,{type:"number",min:"0",modelValue:e.ruleForm.id,"onUpdate:modelValue":l[3]||(l[3]=l=>e.ruleForm.id=l)},null,8,["modelValue"])])),_:1}),b(i,{label:"排序值",prop:"sort"},{default:I((()=>[b(t,{type:"number",modelValue:e.ruleForm.sort,"onUpdate:modelValue":l[4]||(l[4]=l=>e.ruleForm.sort=l)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue","onClose"])}));S.render=z,S.__scopeId="data-v-284d9796";const O={hot:3,new:4,recommend:5},j={name:"Hot",components:{DialogAddGood:S},setup(){const e=F(),l=v(),o=i(null),r=i(null),a=d({loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10,type:"add",configType:3}),t=e.beforeEach((e=>{["hot","new","recommend"].includes(e.name)&&(a.configType=O[e.name],a.currentPage=1,s())}));k((()=>{a.configType=O[l.name],s()})),_((()=>{t()}));const s=()=>{a.loading=!0,p.get("/indexConfigs",{params:{pageNumber:a.currentPage,pageSize:a.pageSize,configType:a.configType}}).then((e=>{a.tableData=e.list,a.total=e.totalCount,a.currentPage=e.currPage,a.loading=!1}))};return n(n({},u(a)),{multipleTable:o,handleSelectionChange:e=>{a.multipleSelection=e},addGood:r,handleAdd:()=>{a.type="add",r.value.open()},handleEdit:e=>{a.type="edit",r.value.open(e)},handleDelete:()=>{a.multipleSelection.length?p.delete("/indexConfigs",{data:{ids:a.multipleSelection.map((e=>e.configId))}}).then((()=>{m.success("删除成功"),s()})):m.error("请选择项")},handleDeleteOne:e=>{p.delete("/indexConfigs",{data:{ids:[e]}}).then((()=>{m.success("删除成功"),s()}))},getIndexConfig:s,changePage:e=>{a.currentPage=e,s()}})}},N=y();s("data-v-c24c5f2c");const R={class:"header"},A=C("增加"),G=C("批量删除"),E=b("a",{style:{cursor:"pointer"}},"删除",-1);c();const q=N(((e,l,o,r,a,n)=>{const t=g("el-button"),i=g("el-popconfirm"),d=g("el-table-column"),u=g("el-table"),s=g("el-pagination"),c=g("el-card"),m=g("DialogAddGood"),p=w("loading");return f(),h(V,null,[b(c,{class:"index-container"},{header:N((()=>[b("div",R,[b(t,{type:"primary",size:"small",icon:"el-icon-plus",onClick:r.handleAdd},{default:N((()=>[A])),_:1},8,["onClick"]),b(i,{title:"确定删除吗？",onConfirm:r.handleDelete},{reference:N((()=>[b(t,{type:"danger",size:"small",icon:"el-icon-delete"},{default:N((()=>[G])),_:1})])),_:1},8,["onConfirm"])])])),default:N((()=>[x(b(u,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:r.handleSelectionChange},{default:N((()=>[b(d,{type:"selection",width:"55"}),b(d,{prop:"configName",label:"商品名称"}),b(d,{label:"跳转链接"},{default:N((e=>[b("a",{target:"_blank",href:e.row.redirectUrl},T(e.row.redirectUrl),9,["href"])])),_:1}),b(d,{prop:"configRank",label:"排序值",width:"120"}),b(d,{prop:"goodsId",label:"商品编号",width:"200"}),b(d,{prop:"createTime",label:"添加时间",width:"200"}),b(d,{label:"操作",width:"100"},{default:N((e=>[b("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:l=>r.handleEdit(e.row.configId)},"修改",8,["onClick"]),b(i,{title:"确定删除吗？",onConfirm:l=>r.handleDeleteOne(e.row.configId)},{reference:N((()=>[E])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data","onSelectionChange"]),[[p,e.loading]]),b(s,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:r.changePage},null,8,["total","page-size","current-page","onCurrentChange"])])),_:1}),b(m,{ref:"addGood",reload:r.getIndexConfig,type:e.type,configType:e.configType},null,8,["reload","type","configType"])],64)}));j.render=q,j.__scopeId="data-v-c24c5f2c";export default j;
