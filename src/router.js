// 该文件由gen-router.js自动生成，请勿手动修改
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
var routes = [
  {path: '/auto-select', component: ()=> import(/* webpackChunkName: "auto-select" */ "@/views/auto-select.vue")  },
  {path: '/avue', component: ()=> import(/* webpackChunkName: "avue" */ "@/views/avue.vue")  },
  {path: '/avue2', component: ()=> import(/* webpackChunkName: "avue2" */ "@/views/avue2.vue")  },
  {path: '/blur_submit_demo', component: ()=> import(/* webpackChunkName: "blur_submit_demo" */ "@/views/blur_submit_demo.vue")  },
  {path: '/boxsizing-height', component: ()=> import(/* webpackChunkName: "boxsizing-height" */ "@/views/boxsizing-height.vue")  },
  {path: '/boxsizing-width', component: ()=> import(/* webpackChunkName: "boxsizing-width" */ "@/views/boxsizing-width.vue")  },
  {path: '/chat-demo', component: ()=> import(/* webpackChunkName: "chat-demo" */ "@/views/chat-demo.vue")  },
  {path: '/childcompclass', component: ()=> import(/* webpackChunkName: "childcompclass" */ "@/views/childcompclass.vue") ,name: "父子组件样式重名 " },
  {path: '/cleave', component: ()=> import(/* webpackChunkName: "cleave" */ "@/views/cleave.vue")  },
  {path: '/cm-calendar-demo', component: ()=> import(/* webpackChunkName: "cm-calendar-demo" */ "@/views/cm-calendar-demo.vue")  },
  {path: '/cm-tree-demo', component: ()=> import(/* webpackChunkName: "cm-tree-demo" */ "@/views/cm-tree-demo.vue")  },
  {path: '/createElement-bind', component: ()=> import(/* webpackChunkName: "createElement-bind" */ "@/views/createElement-bind.vue")  },
  {path: '/currency', component: ()=> import(/* webpackChunkName: "currency" */ "@/views/currency.vue") ,name: "货币类库 " },
  {path: '/datepicker', component: ()=> import(/* webpackChunkName: "datepicker" */ "@/views/datepicker.vue")  },
  {path: '/datetimepicker', component: ()=> import(/* webpackChunkName: "datetimepicker" */ "@/views/datetimepicker.vue")  },
  {path: '/dialogtable', component: ()=> import(/* webpackChunkName: "dialogtable" */ "@/views/dialogtable.vue")  },
  {path: '/disabled', component: ()=> import(/* webpackChunkName: "disabled" */ "@/views/disabled.vue") ,name: "disabled禁用bug " },
  {path: '/el-selectoffset', component: ()=> import(/* webpackChunkName: "el-selectoffset" */ "@/views/el-selectoffset.vue")  },
  {path: '/elinputclass-demo', component: ()=> import(/* webpackChunkName: "elinputclass-demo" */ "@/views/elinputclass-demo.vue")  },
  {path: '/eltable-maxheight', component: ()=> import(/* webpackChunkName: "eltable-maxheight" */ "@/views/eltable-maxheight.vue")  },
  {path: '/eltable_print', component: ()=> import(/* webpackChunkName: "eltable_print" */ "@/views/eltable_print.vue")  },
  {path: '/prepared', component: ()=> import(/* webpackChunkName: "prepared" */ "@/views/prepared.vue")  },
  {path: '/scoped1', component: ()=> import(/* webpackChunkName: "scoped1" */ "@/views/scoped1.vue")  },
  {path: '/scoped2', component: ()=> import(/* webpackChunkName: "scoped2" */ "@/views/scoped2.vue")  },
  {path: '/shake', component: ()=> import(/* webpackChunkName: "shake" */ "@/views/shake.vue")  },
  {path: '/stash-demo', component: ()=> import(/* webpackChunkName: "stash-demo" */ "@/views/stash-demo.vue")  },
  {path: '/sticky-demo', component: ()=> import(/* webpackChunkName: "sticky-demo" */ "@/views/sticky-demo.vue")  },
  {path: '/table-dropdown', component: ()=> import(/* webpackChunkName: "table-dropdown" */ "@/views/table-dropdown.vue")  },
  {path: '/table3', component: ()=> import(/* webpackChunkName: "table3" */ "@/views/table3.vue")  },
  {path: '/table_fixedheader', component: ()=> import(/* webpackChunkName: "table_fixedheader" */ "@/views/table_fixedheader.vue")  },
  {path: '/tooltip-text', component: ()=> import(/* webpackChunkName: "tooltip-text" */ "@/views/tooltip-text.vue")  },
  {path: '/v-table-scroll', component: ()=> import(/* webpackChunkName: "v-table-scroll" */ "@/views/v-table-scroll.vue")  },
  {path: '/vxe-table', component: ()=> import(/* webpackChunkName: "vxe-table" */ "@/views/vxe-table.vue")  },

];

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router

