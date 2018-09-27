# 文件列表

## 柱状图

### 柱状图功能

- 自适应宽高
- 可定义 X/Y 显示数据（分段）数量
- 可为每类数据设定颜色
- 根据百分比加入特征颜色

### 柱状图文件结构

- 文件夹: `src/NCHistogram`
  - `import NCHistogramController from './NCHistogram/NCHistogram.js';`
- `NCHistogram.js`
  - 柱状图主类
  - 导入了 `NCHistogramBox`, `NCHistogramInfo`, `NCHistogramNumberBox`
- `NCHistogramBox.js`
  - 图表显示框架（最外层）
  - 导入了 `NCHistogramGroup`
- `NCHistogramGroup.js`
  - 单个组（例如1月中的多个数据）
  - 导入了 `NCHistogramHis`
  - 包括 X 轴数字
- `NCHistogramHis.js`
  - 每根柱状条
- `NCHistogramInfo.js`
  - 色彩备注区
  - 导入了 `NCHistogramInfoName`
- `NCHistogramInfoName.js`
  - 单个色块和备注信息
- `NCHistogramNumberBox.js`
  - Y 轴刻度区
  - 导入了 `NCHistogramNumber`
- `NCHistogramNumber.js`
  - Y 轴单个刻度数字块