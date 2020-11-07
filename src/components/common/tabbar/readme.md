############
使用说明：
######
1.需要将该插件引入到对应的项目中
######
2.在项目中需要挂载  Tabbar 与 TabbarItem 两个组件
######
3.在TabbarItem 中有两个具名插槽，icon 表示图标字体，text表示文字内容
######
4.在APP.vue中使用
    <Tabbar>
        <TabbarItem>
              <div slot = "icon"></div> 
              <div slot = "text"></div> 
        </TabbarItem>
    </Tabbar>
#####
5.在TabbarItem组件上可以设置的属性
    1.path属性：设置路由的路径
    2.col属性：设置点击状态的颜色    