    # 📚 Algolab Frontend

Algolab Frontend, eğitim ve öğrenim takibi üzerine odaklanan çok modüllü bir React tabanlı kullanıcı arayüz projesidir. Projede farklı sayfalar ayrı klasörler (modüller) şeklinde yapılandırılmıştır: `Course`, `MyLearning`, ve `WhatToLearnNext`.

## 🧰 Kullanılan Teknolojiler

- React
- React Router DOM
- React Icons
- Lucide React
- CSS Modules / Custom Styling

## 🚀 Nasıl Çalıştırılır?

Her modül bağımsızdır ve ayrı ayrı çalıştırılmalıdır.

### 🔸 1. `Course` Modülünü Başlatmak İçin:

```bash
cd Course
npm install
npm run dev
```

### 🔸 2. `MyLearning` Modülünü Başlatmak İçin:

```bash
cd MyLearning
npm install
npm run dev
```

### 🔸 3. `WhatToLearnNext` Modülünü Başlatmak İçin:

```bash
cd WhatToLearnNext
npm install
npm run dev
```

> Not: Her modülün kendi içinde `package.json` dosyası bulunmaktadır. `npm run dev`, Vite gibi geliştirme araçları kullanılarak tanımlanmıştır.

## 📁 Proje Yapısı

```
Algolab Frontend/
├── Course/
├── MyLearning/
├── WhatToLearnNext/
├── node_modules/
├── package.json
```

## 📌 Notlar

- Proje, kullanıcı merkezli bir öğrenim platformunun ön yüz prototipi olarak geliştirilmiştir.
- Her modül tek başına çalıştırılabilir.
