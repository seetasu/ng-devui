### d-data-table 参数

|        参数名         |             类型              | 默认值 |                                               说明                                               | 跳转 Demo                                                              |
| :-------------------: | :---------------------------: | :----- | :----------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------- |
|      dataSource       |            `any[]`            | --     |                                     数据源，用于渲染表格数据                                     | [基本用法](/components/datatable/demo#basic-usage)                     |
|         lazy          |           `boolean`           | --     |                                       可选，是否懒加载数据                                       | [列表数据懒加载](/components/datatable/demo#lazy-loading-of-list-data) |
|      scrollable       |           `boolean`           | --     |                       可选，表格在超出容器时，是否可以通过滚动查看表格内容                       | [表格交互](/components/datatable/demo#table-interaction)               |
|       maxWidth        |          `string px`          | --     |                              可选，限制表格最大宽度，默认撑满父容器                              |
|       maxHeight       |          `string px`          | --     |                                     可选，限制最大高度，默认                                     | [表头固定](/components/datatable/demo#table-fixing)                    |
|         type          | `'striped'、'borderless'、''` | ''     |      可选，表格类型，striped表示斑马纹类型，borderless表示表格内容没有分割线、默认普通表格       | [基本用法](/components/datatable/demo#basic-usage)                     |
|  rowHoveredHighlight  |           `boolean`           | true   |                              可选，鼠标悬浮行时是否高亮,默认高亮认                               |
| generalRowHoveredData |           `boolean`           | false  |      可选，使用配置column方式实现table,鼠标悬浮行时$hovered是否记录到rowItem中，默认不记录       |
|       cssClass        |           `string`            | --     |                                       可选，自定义表格样式                                       |
|      tableWidth       |           `string`            | 100%   |                                          可选，表格宽度                                          |
|      tableHeight      |           `string`            | --     |                                          可选，表格高度                                          | [虚拟滚动](/components/datatable/demo#virtual-scroll)                  |
|   checkableRelation   |      `CheckableRelation`      | --     |                             可选，配置树形表格的父子选中是否互相关联                             | [树形表格](/components/datatable/demo#tree-form)                       |
|   loadChildrenTable   |           `Promise`           | --     |                            可选，展开子表格的回调，用于异步加载子表格                            | [树形表格](/components/datatable/demo#tree-form)                       |
| loadAllChildrenTable  |           `Promise`           | --     |                      可选，表头展开所有子表格的回调，用于异步加载所有子表格                      | [树形表格](/components/datatable/demo#tree-form)                       |
|     colDraggable      |           `boolean`           | false  |                                    可选，表格列是否可拖动排序                                    | [列拖拽](/components/datatable/demo#column-dragging)                   |
|    colDropFreezeTo    |           `number`            | 0      |                            可选，表格列可拖动排序时配置前n列不可拖动                             | [列拖拽](/components/datatable/demo#column-dragging)                   |
|     virtualScroll     |           `boolean`           | false  |                                      可选，是否开启虚拟滚动                                      | [虚拟滚动](/components/datatable/demo#virtual-scroll)                  |
|    virtualItemSize    |           `number`            | 40     |                       可选，虚拟滚动时每一行的高度，默认为表格默认行高40px                       | [虚拟滚动](/components/datatable/demo#virtual-scroll)                  |
|  virtualMinBufferPx   |           `number`            | 80     |                    可选，虚拟滚动时缓冲区最小像素高度，低于该值时将加载新结构                    | [虚拟滚动](/components/datatable/demo#virtual-scroll)                  |
|  virtualMaxBufferPx   |           `number`            | 200    |                                可选，虚拟滚动时缓冲区最大像素高度                                | [虚拟滚动](/components/datatable/demo#virtual-scroll)                  |
|   tableWidthConfig    |     `TableWidthConfig[]`      | []     |                                       可选，配置表格的列宽                                       | [基本用法](/components/datatable/demo#basic-usage)                     |
|       checkable       |           `boolean`           | --     |                               可选，Datatable是否提供勾选行的功能                                | [表格交互](/components/datatable/demo#table-interaction)               |
|     checkOptions      |     `TableCheckOptions[]`     | --     |                                   可选，表头选中的下拉项及操作                                   | [自定义表格选中操作](/components/datatable/demo#table-check-options)   |
|  headerCheckDisabled  |           `boolean`           | --     |                                  可选，表头checkbox是否disabled                                  |
|  headerCheckVisible   |           `boolean`           | true   |                                    可选，表头checkbox是否可见                                    |
|   showExpandToggle    |           `boolean`           | --     |            可选，是否提供显示扩展行的功能，为true则在配置了扩展行的行前面生成操作按钮            | [扩展行](/components/datatable/demo#expand-row)                        |
|     showSortIcon      |           `boolean`           | true   |                              可选，是否显示排序未激活图标，默认显示                              | [表格交互](/components/datatable/demo#table-interaction)               |
|      hideColumn       |          `string[]`           | --     |                                         可选，用于隐藏列                                         |
|    pageAllChecked     |           `boolean`           | --     |                                     可选，选中当前页所有row                                      |
|   onlyOneColumnSort   |           `boolean`           | --     |                              可选，是否限制多列排序的输出限制为一项                              | [表格交互](/components/datatable/demo#table-interaction)               |
|       multiSort       |       `SortEventArg` []       | []     |                            可选，多列选择数组，用来指导那几列会被排序                            | [表格交互](/components/datatable/demo#table-interaction)               |
|      resizeable       |           `boolean`           | --     |                                    可选，是否可以拖拽调整列宽                                    | [表格交互](/components/datatable/demo#table-interaction)               |
|        timeout        |           `number`            | 300    | 可选，同时绑定单击、双击事件时，用于区分点击的时间间隔, 默认300ms，两个事件不同时使用可以指定为0 |
|  headerExpandConfig   |      `TableExpandConfig`      | --     |                                   可选，配置header下的额外内容                                   | [扩展行](/components/datatable/demo#expand-row)                        |
|    beforeCellEdit     |           `Promise`           | --     |         可选，单元格编辑前的拦截方法, <br>resolve(extraOptions)将更新该列的extraOptions          | [编辑单元格](/components/datatable/demo#edit-cell)                     |


### d-data-table 事件

|         事件          |                  类型                  |                           说明                           |                        跳转 Demo                         |
| :-------------------: | :------------------------------------: | :------------------------------------------------------: | :------------------------------------------------------: |
|    rowCheckChange     | `EventEmitter<RowCheckChangeEventArg>` |                 某一行的勾选状态变化事件                 |
|    checkAllChange     |        `EventEmitter<boolean>`         |                当前页码全勾选状态变化事件                |
|        resize         |  `EventEmitter<ColumnResizeEventArg>`  |               列宽变化事件，返回单元格信息               | [表格交互](/components/datatable/demo#table-interaction) |
|  childrenTableClose   |          `EventEmitter<any>`           |              子列表关闭事件，返回列表行信息              |
| allChildrenTableClose |          `EventEmitter<any>`           |                    全部子列表关闭事件                    |
|    multiSortChange    |     `EventEmitter<SortEventArg[]>`     | 多列选择Change事件，用来更新多列选择数组，返回单元格信息 | [表格交互](/components/datatable/demo#table-interaction) |
|       cellClick       |  `EventEmitter<CellSelectedEventArg>`  |            表格单元格点击事件，返回单元格信息            | [表格交互](/components/datatable/demo#table-interaction) |
|      cellDBClick      |  `EventEmitter<CellSelectedEventArg>`  |            表格单元格双击事件，返回单元格信息            | [表格交互](/components/datatable/demo#table-interaction) |
|       rowClick        |  `EventEmitter<RowSelectedEventArg>`   |                表格行点击事件，返回行信息                | [表格交互](/components/datatable/demo#table-interaction) |
|      rowDBClick       |  `EventEmitter<RowSelectedEventArg>`   |                表格行双击事件，返回行信息                | [表格交互](/components/datatable/demo#table-interaction) |
|     detialToggle      |          `EventEmitter<any>`           |            扩展行展开收起事件，返回行状态信息            |
|     cellEditStart     |  `EventEmitter<CellSelectedEventArg>`  |          表格单元格开始编辑事件，返回单元格信息          |
|      cellEditEnd      |  `EventEmitter<CellSelectedEventArg>`  |          表格单元格结束编辑事件，返回单元格信息          |    [编辑单元格](/components/datatable/demo#edit-cell)    |
|   tableScrollEvent    |         `EventEmitter<Event>`          |                     表格内部滚动事件                     |


### d-data-table 公共方法

|            方法名            |           参数            | 默认值 |                                 说明                                 |                        跳转 Demo                         |
| :--------------------------: | :-----------------------: | :----- | :------------------------------------------------------------------: | :------------------------------------------------------: |
|        getCheckedRows        |            --             | --     |                         获取当前选中的行数据                         | [表格交互](/components/datatable/demo#table-interaction) |
|      setRowCheckStatus       | `RowCheckChangeEventArg`  | --     |        设置某一行的选中状态，可以处理表头、父子表格的选中关系        | [表格交互](/components/datatable/demo#table-interaction) |
|     setTableCheckStatus      |   `TableCheckStatusArg`   | --     |                     设置当前表格的全选、半选状态                     |
|   setRowChildToggleStatus    | `RowToggleStatusEventArg` | --     | 设置某一行的子表格展开、收起状态，处理异步加载子表格的选中状态时调用 |     [树形表格](/components/datatable/demo#tree-form)     |
| setTableChildrenToggleStatus |      `open: boolean`      | --     |                设置当前表格的所有子表格展开、收起状态                |     [树形表格](/components/datatable/demo#tree-form)     |
|     cancelEditingStatus      |            --             | --     |                     取消正在编辑单元格的编辑状态                     |    [编辑单元格](/components/datatable/demo#edit-cell)    |

### rowItem参数(行数据rowItem为dataSource的数组元素，可以初始化行数据的以下字段配置表格的行为)

|       参数        |   类型    | 默认值 |             说明             |                        跳转 Demo                         |
| :---------------: | :-------: | :----- | :--------------------------: | :------------------------------------------------------: |
|     $checked      | `boolean` | false  |      可选，该行是否选中      | [表格交互](/components/datatable/demo#table-interaction) |
|   $halfChecked    | `boolean` | false  |      可选，该行是否半选      | [表格交互](/components/datatable/demo#table-interaction) |
| $isChildTableOpen | `boolean` | false  | 可选，该行下的子表格是否展开 |     [树形表格](/components/datatable/demo#tree-form)     |
|     children      |   array   | --     |    配置该行的子table数据     |     [树形表格](/components/datatable/demo#tree-form)     |
|  $checkDisabled   | `boolean` | false  |    可选，该行是否禁止选中    | [表格交互](/components/datatable/demo#table-interaction) |
|   $checkBoxTips   | `string`  | --     | 可选，配置该行checkbox的提示 | [表格交互](/components/datatable/demo#table-interaction) |

### dTableHead 参数

|    参数名     |         类型          | 默认值 |                                 说明                                 | 跳转 Demo                                                            |
| :-----------: | :-------------------: | :----- | :------------------------------------------------------------------: | :------------------------------------------------------------------- |
|   checkable   |       `boolean`       | --     | 可选，在表头第一列显示checkbox，用于全选，可以跟行数据的选中状态联动 | [表格交互](/components/datatable/demo#table-interaction)             |
| checkOptions  | `TableCheckOptions[]` | --     |                     可选，表头选中的下拉项及操作                     | [自定义表格选中操作](/components/datatable/demo#table-check-options) |
| checkDisabled |       `boolean`       | --     |                    可选，表头checkbox是否disabled                    |


### dHeadCell 参数

|        参数名        |                    类型                    | 默认值 |                             说明                              | 跳转 Demo                                                |
| :------------------: | :----------------------------------------: | :----- | :-----------------------------------------------------------: | :------------------------------------------------------- |
|    resizeEnabled     |                 `boolean`                  | --     |                   可选，该列宽度是否可调整                    | [表格交互](/components/datatable/demo#table-interaction) |
|       maxWidth       |                `string px`                 | --     |                  可选，调整宽度时的最大宽度                   |
|       minWidth       |                `string px`                 | --     |                  可选，调整宽度时的最小宽度                   |
|      filterable      |                 `boolean`                  | --     |                   可选，该列宽度是否可过滤                    | [表格交互](/components/datatable/demo#table-interaction) |
| customFilterTemplate |               `TemplateRef`                | --     |                 可选，过滤弹出框的自定义模板                  | [表格交互](/components/datatable/demo#table-interaction) |
|       searchFn       | `(term: string) => Observable<Array<any>>` |        |               可选，过滤时输入关键字的匹配方法                |
|      filterList      |                  `array`                   | --     |              过滤列表，当filterable为true时必选               | [表格交互](/components/datatable/demo#table-interaction) |
|    filterMultiple    |                 `boolean`                  | --     |      可选，设置该列为多选或单选, true为多选，false为单选      | [表格交互](/components/datatable/demo#table-interaction) |
|    filterBoxWidth    |                  `string`                  | --     |                 过滤弹出框的宽度，如：‘300px’                 |
|   filterBoxHeight    |                  `string`                  | --     |                 过滤弹出框的高度，如：‘400px’                 |
|     beforeFilter     |      `function、Promise、Observable`       | --     | 可选，表格过滤弹出框弹出前的回调函数，返回false可阻止弹框弹出 | [表格交互](/components/datatable/demo#table-interaction) |
|       sortable       |                 `boolean`                  | --     |                     可选，该列是否可排序                      | [表格交互](/components/datatable/demo#table-interaction) |
|    sortDirection     |              `SortDirection`               | --     |                  可选，设置该列的已排序状态                   | [表格交互](/components/datatable/demo#table-interaction) |
|     nestedColumn     |                 `boolean`                  | --     |           可选，是否展示树形表格的表头展开\折叠图标           | [树形表格](/components/datatable/demo#tree-form)         |
|    iconFoldTable     |                `DOMString`                 | --     |                可选，自定义树形表格的折叠图标                 | [树形表格](/components/datatable/demo#tree-form)         |
|   iconUnFoldTable    |                `DOMString`                 | --     |                可选，自定义树形表格的展开图标                 | [树形表格](/components/datatable/demo#tree-form)         |
|      fixedLeft       |                  `string`                  | --     |            可选，该列固定到左侧的距离，如：‘100px’            | [固定列](/components/datatable/demo#fixed-column)        |
|      fixedRight      |                  `string`                  | --     |            可选，该列固定到右侧的距离，如：‘100px’            | [固定列](/components/datatable/demo#fixed-column)        |

### dHeadCell 事件

|           事件           |        类型         |                        说明                         | 跳转 Demo                                                |
| :----------------------: | :-----------------: | :-------------------------------------------------: | :------------------------------------------------------- |
|       filterChange       |  `FilterConfig[]`   |        确认筛选回调事件，返回选中的筛选数组         | [表格交互](/components/datatable/demo#table-interaction) |
|        sortChange        |   `SortEventArg`    |           排序回调事件，返回该列排序信息            | [表格交互](/components/datatable/demo#table-interaction) |
|     resizeStartEvent     |    `MouseEvent`     |              该列宽度调整开始时的事件               |
|      resizingEvent       | `{ width: string }` |              该列宽度调整进行中的事件               |
|      resizeEndEvent      | `{ width: string }` |              该列宽度调整结束时的事件               | [表格交互](/components/datatable/demo#table-interaction) |
| toggleChildrenTableEvent |      `boolean`      | 所有子表格展开收起事件，true表示展开，false表示收起 |

### dTableCell 参数

|     参数名      |              类型               | 默认值 |                              说明                              | 跳转 Demo                                          |
| :-------------: | :-----------------------------: | :----- | :------------------------------------------------------------: | :------------------------------------------------- |
|    editable     |            `boolean`            | --     |                     可选，单元格是否可编辑                     | [编辑单元格](/components/datatable/demo#edit-cell) |
|   editableTip   |        `'hover'、'btn'`         | --     |         可选，编辑提示，hover背景变色，btn展示编辑按钮         | [编辑单元格](/components/datatable/demo#edit-cell) |
|  nestedColumn   |            `boolean`            | --     |        可选，树形表格下该行有子表格时展示展开、折叠图标        | [树形表格](/components/datatable/demo#tree-form)   |
|   nestedLayer   |            `number`             |        |           树形表格下的层级,nestedColumn为true时必选            | [树形表格](/components/datatable/demo#tree-form)   |
|     rowItem     |             `array`             | --     | 行数据，nestedColumn为true时必选，也可作为单元格编辑的回调参数 | [树形表格](/components/datatable/demo#tree-form)   |
| beforeEditStart | `function、Promise、Observable` | --     |    可选，单元格开始编辑前回调，返回false阻止单元格开始编辑     | [编辑单元格](/components/datatable/demo#edit-cell) |
|  beforeEditEnd  | `function、Promise、Observable` | --     |   可选，单元格结束编辑前的回调，返回false阻止单元格结束编辑    | [编辑单元格](/components/datatable/demo#edit-cell) |
|  iconFoldTable  |           `DOMString`           | --     |                 可选，自定义树形表格的折叠图标                 | [树形表格](/components/datatable/demo#tree-form)   |
| iconUnFoldTable |           `DOMString`           | --     |                 可选，自定义树形表格的展开图标                 | [树形表格](/components/datatable/demo#tree-form)   |
|    fixedLeft    |            `string`             | --     |            可选，该列固定到左侧的距离，如：‘100px’             | [固定列](/components/datatable/demo#fixed-column)  |
|   fixedRight    |            `string`             | --     |            可选，该列固定到右侧的距离，如：‘100px’             | [固定列](/components/datatable/demo#fixed-column)  |
|     editing     |            `boolean`            | --     |         可选，使用[(editing)]获取和控制单元格编辑状态          | [编辑单元格](/components/datatable/demo#edit-cell) |
|      field      |            `string`             | --     |  单元格所属列的字段，作为beforeEditStart、beforeEditEnd的参数  | [编辑单元格](/components/datatable/demo#edit-cell) |

### dTableCell 事件

|         事件          |   类型    |                          说明                           | 跳转 Demo                                          |
| :-------------------: | :-------: | :-----------------------------------------------------: | :------------------------------------------------- |
|    editStatusEvent    | `boolean` |                   单元格编辑状态事件                    | [编辑单元格](/components/datatable/demo#edit-cell) |
| toggleChildTableEvent | `boolean` | 当前行的子表格展开收起事件，true表示展开，false表示收起 | [树形表格](/components/datatable/demo#tree-form)   |

#### 使用自定义模板方式时配置dTableBody的行模板
实现参考**[树形表格](/components/datatable/demo#tree-form)**
``` xml
<ng-template
  let-rowItem="rowItem"
  let-rowIndex="rowIndex"
  let-nestedLayer="nestedLayer"
  let-nestedIndex="nestedIndex">
  <tr dTableRow></tr>
</ng-template>
// rowItem: 行数据
// rowIndex: 行序号
// nestedLayer: 树形表格下该行所属表格的层级，由组件生成，最外层表格为0，自增长
// nestedIndex: 树形表格下的行索引，由组件生成
```

#### 配置数据为空的时候的提示模板

表格接受 `#noResultTemplateRef` 模板，实现参考**[异步加载数据](/components/datatable/demo#async-loading)**

#### 自定义过滤弹出框
实现参考**[表格交互](/components/datatable/demo#table-interaction)**
``` xml
<ng-template
 let-filterList ="filterListDisplay"
 let-dropdown="dropdown"
 let-column="column">
  <!--cell 内容-->
</ng-template>

// filterListDisplay: 传入的filterList的值
// dropdown: 获取dropdown的引用，主要用于控制弹出框的打开和关闭
// column: 使用配置column实现的,当前列的元信息，对应DataTableColumnTmplComponent类
```

#### DataTable类型定义

``` javascript
export interface CheckableRelation {
  upward: boolean; // 选中子关联父
  downward: boolean; // 选中父关联子
}

export interface TableWidthConfig {
  field: string; // 列名
  width: string; // 宽度，单位px
}

export interface RowCheckChangeEventArg {
  rowIndex: number; // 行序号
  nestedIndex: string; // 树形表格下的行索引，由组件生成
  rowItem: any; // 行数据
  checked: boolean; // 是否选中
}

export interface TableCheckStatusArg {
  pageAllChecked?: boolean; // 全选
  pageHalfChecked?: boolean; // 半选
}

export interface RowToggleStatusEventArg {
  rowItem: any; // 行数据
  open: boolean; // 子表格是否展开
}

export interface FilterConfig {
  id: number | string;
  name: string;
  value: any;
  checked?: boolean;
}

export interface SortEventArg {
  field?: string; // 列名
  direction: SortDirection; // 顺序
}

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
  default = ''
}

export interface TableCheckOptions {
  label: string;
  onChecked: Function;
}

export interface TableExpandConfig {
    expand ? : boolean, // 是否展开
    expandTemplateRef ? : ElementRef, //自定义模板
    description ? : string // 简单描述文字
}
```



### 以下为通过配置column来实现table时的才有的参数和方法

### d-column 参数 

|               参数                |              类型               | 默认值            |                                          说明                                           | 跳转 Demo                                                |
| :-------------------------------: | :-----------------------------: | :---------------- | :-------------------------------------------------------------------------------------: | :------------------------------------------------------- |
|             editable              |            `boolean`            | false             |                          可选，在d-column上指定该列是否可编辑                           | [编辑单元格](/components/datatable/demo#edit-cell)       |
|             maxWidth              |           `string px`           | --                |                                     可选，最大宽度                                      |
|             minWidth              |           `string px`           | --                |                                     可选，最小宽度                                      |
|               field               |            `string`             | --                |                                        该列字段                                         | [基本用法](/components/datatable/demo#basic-usage)       |
|              header               |            `string`             | --                |                                      该列表头文字                                       | [基本用法](/components/datatable/demo#basic-usage)       |
|             sortable              |            `boolean`            | --                |                                    可选，是否可排序                                     | [表格交互](/components/datatable/demo#table-interaction) |
|             editable              |            `boolean`            | --                |                                    可选，是否可编辑                                     | [表格交互](/components/datatable/demo#table-interaction) |
|               width               |         `string px、%`          | --                |                                          宽度                                           | [基本用法](/components/datatable/demo#basic-usage)       |
|           nestedColumn            |            `Boolean`            | false             |       可选，指定该列作为树形表格的操作列，即有展开\折叠按钮和内容缩进表明层级关系       | [树形表格](/components/datatable/demo#tree-form)         |
|     extraOptions.editableTip      |           `'btn'、''`           | --                | 可选，可编辑提示，'btn'表示鼠标悬浮单元格出现编辑按钮，未配置时鼠标悬浮单元格背景色变化 | [编辑单元格](/components/datatable/demo#edit-cell)       |
|    extraOptions.iconFoldTable     |           `Template`            | --                |                            可选，自动定义树形表格的折叠图标                             | [树形表格](/components/datatable/demo#tree-form)         |
|   extraOptions.iconUnFoldTable    |           `Template`            | --                |                            可选，自动定义树形表格的展开图标                             | [树形表格](/components/datatable/demo#tree-form)         |
| extraOptions.showHeadTableToggler |            `boolean`            | false             |                       可选，树形表格是否在header出现展开\折叠图标                       | [树形表格](/components/datatable/demo#tree-form)         |
|               order               |            `number`             | Number. MAX_VALUE |                                      可选，列序号                                       | [基本用法](/components/datatable/demo#basic-usage)       |
|            filterable             |            `boolean`            | --                |                                    可选，是否可筛选                                     | [表格交互](/components/datatable/demo#table-interaction) |
|            filterList             |             `array`             | --                |                    传入需要操作的筛选列表，当filterable为true时必选                     | [表格交互](/components/datatable/demo#table-interaction) |
|          filterMultiple           |            `boolean`            | true              |                 可选，选择筛选列表为多选或单选, true为多选，false为单选                 | [表格交互](/components/datatable/demo#table-interaction) |
|       customFilterTemplate        |          `TemplateRef`          | --                |            可选，表格过滤弹出框的自定义模板，参考DOC下‘自定义过滤弹出框’使用            | [表格交互](/components/datatable/demo#table-interaction) |
|           beforeFilter            | `function、Promise、Observable` | --                |              可选，表格过滤弹出框弹出前的回调函数，返回false可阻止弹框弹出              | [表格交互](/components/datatable/demo#table-interaction) |
|             cellClass             |            `string`             | --                |                                  该列单元格自定义class                                  |
|             fixedLeft             |            `string`             | --                |                            该列固定到左侧的距离，如：‘100px’                            | [固定列](/components/datatable/demo#fixed-column)        |
|            fixedRight             |            `string`             | --                |                            该列固定到右侧的距离，如：‘100px’                            | [固定列](/components/datatable/demo#fixed-column)        |
|          filterBoxWidth           |              `any`              | --                |                              过滤弹出框的宽度，如：‘300px’                              |
|          filterBoxHeight          |              `any`              | --                |                              过滤弹出框的高度，如：‘400px’                              |

### d-column 事件

|     事件     |       类型       |                 说明                 | 跳转 Demo                                                |
| :----------: | :--------------: | :----------------------------------: | :------------------------------------------------------- |
| filterChange | `FilterConfig[]` | 确认筛选回调事件，返回选中的筛选数组 | [表格交互](/components/datatable/demo#table-interaction) |

### rowItem参数
|       参数        |        类型         | 默认值 |                                                   说明                                                    |
| :---------------: | :-----------------: | :----- | :-------------------------------------------------------------------------------------------------------: |
| $editDeniedConfig |       `array`       | --     | 可选，与column配合配置该行的某些单元格的编辑权限, <br>例如: 配置为['age']，表示field为age的单元格不可编辑 |
|   $expandConfig   | `TableExpandConfig` | --     |                                        可选，配置该行下的额外内容                                         |
|     $rowClass     |      `string`       | --     |                                        可选，配置该行的自定义class                                        |
|     $hovered      |      `boolean`      | false  |                          鼠标悬浮该行元素时该值为true, <br>离开该行时该值为false                          |

#### 自定义单元格

单元格数据(cellItem, 通过rowItem[column.field]取值)为string类型时，组件可直接展示，当单元格数据为object类型，或者想定义该列单元格的特殊行为时，需要自定义单元格来进行展示；
例如：我们想 `Gender` 这一列的数据大写展示, 并在鼠标移动上去展示一个提示，相关节选代码如下

``` 
<d-column field="gender" header="Gender" [sortable]="true" [width]="'100px'">
  <d-cell>
    <ng-template let-cellItem="cellItem">
      <span dTooltip [content]='cellItem' [position]="'bottom'">
        {{cellItem.toUpperCase()}}
      </span>
    </ng-template>
  </d-cell>
</d-column>
```

#### 自定义单元格编辑模板

Datatable支持通过模板自定义单元格编辑功能

``` 
<d-column field="lastName" header="Last Name" [fieldType]="'customized'" [editable]="true">
  <d-cell-edit>
    <ng-template let-rowItem="rowItem" let-column="column">
      <input [(ngModel)]="rowItem[column.field]" maxlength="5" />
    </ng-template>
  </d-cell-edit>
</d-column>
```

自定义单元格和配置单元格编辑时的完整template如下

``` xml
<ng-template
  let-rowIndex="rowIndex"
  let-colIndex="colIndex"
  let-rowItem="rowItem"
  let-column="column"
  let-cellItem="cellItem"
  let-tableLevel="tableLevel">
  <!--cell 内容-->
</ng-template>

// rowIndex: 行序号
// colIndex: 列序号
// rowItem: 当前行的数据，对应 filed 和 cellItem的键值对
// column: 当前列的元信息，对应DataTableColumnTmplComponent类
// cellItem: 当前单元格的值, 通过rowItem[column.field]取值
// tableLevel: 树形表格下所属表格的层级，最外层为0，自增长
```

#### 自定义表头单元格

如果需要表头单元格，列入想展示效果为鼠标移动在表格上方会提示 `Gender is a head cell template` .

``` xml
<d-column field="gender" header="Gender" [sortable]="true" [width]="'100px'">
  <d-head-cell>
    <ng-template let-column="column">
      <span dTooltip [content]="column.header + ' is a head cell template'" [position]="'bottom'">
        {{column.header}}
      </span>
    </ng-template>
  </d-head-cell>
</d-column>

// column: 为column输入值，对应 `DataTableColumnTmplComponent` 类
```

#### 多行表头和表头合并单元格

* 需要在d-column使用时候，增加

``` javascript
advancedHeader: Array < {
    header: string;
    rowspan: number;
    colspan: number;
}
```

注意: 空单元格也需要表示，并根据内容把rowspan/colspan置为0，如果同时使用列宽拖拽和多行表头，请为列内容附上宽度width，如果第一行的列宽度不正确，请手动为advancedHeader[rowNumber]增加一个属性$width
