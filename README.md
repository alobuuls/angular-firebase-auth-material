# 🚀 Angular Firebase Auth Material

Aplicación desarrollada en **Angular 16** que implementa un sistema completo de autenticación utilizando **Firebase Authentication**, **Angular Material** y **Route Guards**.

Incluye autenticación con correo y contraseña, inicio de sesión con proveedores externos y protección de rutas privadas.

---

## ⚙️ Requisitos del sistema

Antes de ejecutar el proyecto asegúrate de instalar:

- 📦 **Node.js:** `v18+` *(preferiblemente v18.10.0)*
- 📦 **npm:** `v9+`
- 🅰️ **Angular CLI:** `v16.x`
- 🔥 **Cuenta activa en Firebase**

---

## 🔍 Verificar versiones instaladas

```bash
node -v
npm -v
ng version
```

---

## 🚀 Instalación del proyecto

### 1️⃣ Clonar repositorio

```bash
git clone <URL_DEL_REPO>
cd angular-firebase-auth-material
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

## 🔥 Configurar Firebase

Crear proyecto en Firebase y reemplazar:

```ts
export const environment = {
 firebase:{
   apiKey:"",
   authDomain:"",
   projectId:"",
   appId:"",
 }
}
```

Habilitar:

- Email / Password Authentication
- Google Provider
- Github Provider

Desde:

```txt
Firebase → Authentication → Sign-in method
```

---

## ▶️ Ejecutar proyecto

```bash
ng serve
```

Abrir:

```bash
http://localhost:4200
```

---

## 🧠 Arquitectura del proyecto

Estructura basada en módulos y servicios desacoplados.

### 🔐 Auth

Contiene:

- Login
- Registro
- Social Login
- Logout

### 🛡️ Guards

Protección de rutas:

- `authGuard`
- `publicGuard`

### 🔥 Firebase Services

Manejo centralizado de:

- Registro
- Login
- Estado del usuario
- Providers externos
- Logout

---

## ⚙️ Funcionalidades principales

- 🔑 Login Email/Password
- 📝 Registro de usuarios
- 🔥 Firebase Authentication
- 🛡️ Protección de rutas
- 🌐 Login con Google
- 🐙 Login con Github
- 🚪 Logout
- 💬 Snackbars con Angular Material
- 👤 Estado global de autenticación

---

## 🛠️ Tecnologías utilizadas

- 🅰️ Angular 16
- 🔥 Firebase Authentication
- ⚡ TypeScript
- 🎨 Angular Material
- 🧩 Reactive Forms
- 🛡️ Route Guards
- 🔄 RxJS

---

## 📁 Estructura del proyecto

```bash
src/app
├── core/
│   ├── guards/
│   └── services/
│
├── pages/
│   ├── auth/
│   │   ├── login/
│   │   ├── register/
│   │   └── components/
│   │
│   └── home/
│
├── firebase.config.ts
├── app-routing.ts
└── app.config.ts
```

---

## 🔥 Conceptos aprendidos

Este proyecto practica:

- Firebase Authentication
- Route Guards
- Protección de rutas
- Social Providers
- Reactive Forms
- Angular Material
- Observables
- Authentication State
- Standalone Components

---

## 📄 Licencia

Proyecto educativo desarrollado para practicar autenticación moderna con Angular + Firebase.

---
```
