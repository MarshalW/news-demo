# News Demo

## 准备工作

下载源代码：

```
git clone https://github.com/MarshalW/news-demo.git
```

下载依赖库：

```
npm install
```


## 最简单的示例

react和react transform boilerplate最简单的集成。

切换版本：

```
git checkout helloworld
```

然后：

```
npm start
```

再浏览器打开：http://localhost:3000/


## 集成redux，实现同步的新闻列表

切换版本：

```
git checkout sync_news_list
```

然后：

```
npm start
```

再浏览器打开：http://localhost:3000/

## 实现异步的新闻列表

新闻数据通过ajax获取（`news.json`)。为了模拟网络加载慢情况下loading效果，使用`Promise`做了一个延时。

切换版本：

```
git checkout async_news_list
```

然后：

```
npm start
```

再浏览器打开：http://localhost:3000/



