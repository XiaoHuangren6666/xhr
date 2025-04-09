# Fullstack Finance Tracker

## 项目简介
Fullstack Finance Tracker 是一个全栈应用程序，旨在帮助用户记录和管理他们的每日收支情况。该项目使用 Node.js 作为后端框架，Vue 3 作为前端框架，并使用 MySQL 数据库进行数据存储。

## 功能
- **用户管理系统**：用户可以注册和登录，以便安全地访问他们的收支记录。
- **收支记录管理**：用户可以输入项目名、金额和来源，并保存收支记录。
- **日历视图**：用户可以通过日历选择特定日期，查看该日期的收支记录。

## 技术栈
- **后端**：Node.js, Express, MySQL
- **前端**：Vue 3, Vue Router, Vuex

## 项目结构
```
fullstack-finance-tracker
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── controllers
│   │   │   ├── userController.js
│   │   │   └── financeController.js
│   │   ├── models
│   │   │   ├── userModel.js
│   │   │   └── financeModel.js
│   │   ├── routes
│   │   │   ├── userRoutes.js
│   │   │   └── financeRoutes.js
│   │   └── config
│   │       └── db.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── App.vue
│   │   ├── main.js
│   │   ├── components
│   │   │   ├── CalendarView.vue
│   │   │   ├── FinanceForm.vue
│   │   │   └── UserManagement.vue
│   │   ├── views
│   │   │   ├── HomeView.vue
│   │   │   ├── LoginView.vue
│   │   │   └── RegisterView.vue
│   │   └── store
│   │       └── index.js
│   ├── package.json
│   └── README.md
├── README.md
└── .gitignore
```

## 安装与运行
1. 克隆项目：
   ```
   git clone <repository-url>
   ```
2. 进入后端目录并安装依赖：
   ```
   cd backend
   npm install
   ```
3. 配置数据库连接（在 `backend/src/config/db.js` 中）。
4. 启动后端服务器：
   ```
   npm start
   ```
5. 进入前端目录并安装依赖：
   ```
   cd frontend
   npm install
   ```
6. 启动前端应用：
   ```
   npm run serve
   ```

## 贡献
欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证
该项目使用 MIT 许可证。