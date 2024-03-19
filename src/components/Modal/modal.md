### modal使用
```javascript
  <SdMoadl 
    title="弹窗"
    closable={true}
    onOK={()=>{}}
    onCancel={()=>{}}
    okText="Confirm"
    cancelText="Cancel"
  />
```
### SdModal.createDialog() Api使用
```javascript
    SdModal.createDialog({
        title:"弹窗",
        children:<span>弹窗内容</span>,
        onOk:()=>{}
    })
```
### 通用属性参考

| 参数     | 说明     | 类型     | 默认值    |
| -------- | -------- | -------- | -------- |
| cancelButtonProps | cancel 按钮 props | ButtonProps | -         |
| cancelText | 设置 Modal.confirm 取消按钮文字 | string | Cancel         |
| className | 容器类名 | string | -         |
| closable | 是否显示右上角的关闭按钮 | boolean | false        |
| children | 内容 | ReactNode | -         |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 footer: null | React.ReactNode | -         |
| getContainer | 指定 Modal 挂载的 HTML 节点，false 为挂载在当前 dom | HTMLElement | document.body        |
| mask | 是否展示遮罩 | boolean | false         |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true         |
| okButtonProps | ok 按钮 props | ButtonProps | -         |
| okText | 确认按钮文字 | string | Confirm         |
| style | 确认按钮文字 | string | Confirm         |
| okText | 可用于设置浮层的样式，调整浮层位置等 | CSSProperties | -         |
| title | 标题 | string | -         |
| width | 宽度 | string / number | -         |
| onCancel | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | function(close) | -         |
| onOk | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | function(close) | -         |


