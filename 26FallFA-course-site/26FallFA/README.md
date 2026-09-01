# 2026 秋季泛函分析课程主页

这是给助教维护的课程主页框架。平时基本不用修改 HTML、CSS 或 JavaScript。

## 第一次部署（只做一次）

1. 登录 GitHub，新建一个名为 `course` 的公开仓库（如果你已经有 `course` 仓库，就直接使用现有仓库）。
2. 在仓库中建立文件夹 `26FallFA`。
3. 把本压缩包里 `26FallFA` 文件夹中的全部内容上传到仓库的 `26FallFA` 文件夹。
4. 打开仓库 `Settings` → `Pages`。
5. 在 `Build and deployment` 中选择 `Deploy from a branch`。
6. Branch 选择 `main`，文件夹选择 `/(root)`，保存。
7. 稍后访问：
   `https://xue-086.github.io/course/26FallFA/`

如果你的仓库并不叫 `course`，需要同步修改 `_config.yml` 里的 `baseurl`。

---

## 你平时只需要认识这几个地方

### 1. 发公告

打开 `_data/announcements.yml`，加：

```yaml
- date: "2026-09-08"
  zh: "第一次作业已经发布。"
  en: "Homework 1 has been posted."
```

### 2. 上传老师讲义

先把 PDF 放到：

`files/lectures/`

例如：

`lecture03.pdf`

然后打开 `_data/schedule.yml`，在对应周写：

```yaml
lecture: "lecture03.pdf"
```

### 3. 发布作业

把题目 PDF 放到：

`files/homework/`

例如：

`hw01.pdf`

然后在 `_data/homework.yml` 加：

```yaml
- id: 1
  title_zh: "作业 1"
  title_en: "Homework 1"
  file: "hw01.pdf"
  solution: ""
  note_zh: ""
  note_en: ""
```

如果还想让课程安排表里也显示该作业，在 `_data/schedule.yml` 对应一周写：

```yaml
homework: 1
```

### 4. 发布作业答案

把答案放到：

`files/solutions/`

例如：

`hw01-solution.pdf`

然后把 `_data/homework.yml` 中：

```yaml
solution: ""
```

改成：

```yaml
solution: "hw01-solution.pdf"
```

“答案”链接会自动出现。

### 5. 发布习题课讲义

把 PDF 放到：

`files/tutorials/`

然后在 `_data/tutorials.yml` 加：

```yaml
- date: "2026-09-11"
  title_zh: "习题课 1"
  title_en: "Tutorial 1"
  file: "tutorial01.pdf"
```

---

## 以后确定作业提交方式或联系方式

打开 `_data/course.yml`，把对应项目开头的 `#` 去掉并填写内容。

不填写时，网页会自动隐藏这些信息。

---

## 最重要的原则

- PDF 文件名尽量只用英文字母、数字、短横线，不要用空格。
- YAML 每一层缩进使用两个空格。
- 不要删除英文冒号 `:` 后面的空格。
- 修改后在 GitHub 点击 `Commit changes`，网站会自动重新部署。
- 页面代码有问题时，优先检查最近一次修改的 `.yml` 文件有没有缩进或引号错误。
