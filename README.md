# Serverside-notebook

Bu proje React,redux,nodejs,expressJs kullanılarak geliştirilmiştir.

## Projeyi ayağa kaldırmak için izlenecek adımlar.

### `node server.js`
İlk olarak ana dizine gidilerek **npm install** komutu koşulup backEnd için kullanılan npm paketleri local'e indirilmelidir.

Ana dizine giderek node server.js koşularak backend ayağa kaldırılmalıdır.
PORT:5000

### `npm start`
İlk olarak proje dizinine (`cd frontEnd`) giderek **npm install** komutu koşulup frontEnd için kullanılan npm paketleri local'e indirilmelidir.

Proje dizinine (`cd frontEnd`) giderek npm start koşularak proje ayağı kaldırılmalıdır.

Tarayıcıda http://localhost:3000 otomatik olarak açılacaktır.

## BackEnd

http://localhost:5000 da çalışılmıştır.
**http://localhost:5000/api/notebooks/** adresine get isteği yapıldığında, backend'de notebooks klasörü içerisinde ki **.txt** dosyaları getirilmektedir.

Yeni bir **note** eklenmek istenildiğinde **http://localhost:5000/api/notebooks/save** adresine **post** isteğinde bulunulmalıdır.

## FrontEnd

Halihazırda bulunan dosyalar **liste** şeklinde sayfanın sol tarafına yerleştirilmiştir.
Liste içeriklerini görmek ve güncellemek için, sayfanın sağ tarafında **textarea** eklenmiştir.
