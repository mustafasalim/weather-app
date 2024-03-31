# Weather App

Bu projede, openweather api kullanılarak hava durumu uygulaması geliştirdim.Bu uygulamayı yaparken önceliğim responsive ve kullanıcı dostu bi uygulama yapmaktı.Uygulama içersinde aynı zamanda güncel hava durumu bilgilerine göre kullanıcıya bilgilendirme mesajları,eger kullanıcı konumu açıksa mevcut konuma göre güncel hava durumu bilgileri,kullanıcının girdigi kelimelere göre şehirlerin listelenmesi,Sıcaklık,nem ve rüzgar hızının kullanıcıya grafikler aracılıyla gösterilmesi gibi pek çok özellik bulunmaktadır.

## Uygulama Linki

https://weather-app-react-project-ecru.vercel.app/

## Başlatma

Projeyi başlatmak için

```bash
 pnpm install
 pnpm dev
```

## Özellikler

### Duyarlı Tasarım

Projeyi yaparken öncellik olarak her ekrana duyarlı bi tasarımı olmasıydı.Proje tasarımını yaparken tailwindcss kullandım.Aynı zamanda duyarlı tasarım yaparken tailwindcss kısmındada kendimi geliştirdim.
![Uygulama Ekran Görüntüsü](/public/images/readme-images/desktop.png) ![Uygulama Ekran Görüntüsü](/public/images/readme-images/tablet.png) ![Uygulama Ekran Görüntüsü](/public/images/readme-images/mobile.png)

### Grafik

Bu grafigi yapmamın amacı sıcaklık,nem,rüzgar hızı gibi günlük hayatta ihtiyacımız oldugu bilgileri kullanıcıya daha basit ve okunulabilir olarak göstermekdi. Aynı zamanda projenin daha zengin ve şık gözükmesiydi.

Grafik özelikleri

- Sıcaklık grafiği: Belirli bir zamanda sıcaklıktaki değişimi gösterir.
- Nem grafiği: Belirli bir zamandaki nem değişimini gösterir.
- Rüzgar hızı grafiği: Belirli bir zamanda rüzgar hızındaki değişimi gösterir.

![Uygulama Ekran Görüntüsü](/public/images/readme-images/chart.png)

### Auto-complete

Auto-complete bileşenini yaparken debounce teknigini kullandım.Bu teknigi kullanmamın sebebi belirli bi saniye içersinde kullanıcın yazmış oldugu girdiyi alıp openweather da şehirlerin oldugu api ya istege çıkmaktı. Api dan dönen sonuçları bileşen içersinde listeledim.Kullanıcı güncel hava durumunu görmek istedigi şehir seçtiginde ise o şehrin güncel hava durumu bilgilerini gösterir.

![Uygulama Ekran Görüntüsü](/public/images/readme-images/search.png)

### Coğrafi Konum

Cografi konumdaki amacım kullanıcın bulundugu bölgedeki güncel hava durumu bilgisinin kolay bi şekilde gösterilmesiydi.Eğer kullanıcı konumu açık ise auto-complete ki current locationa veya anasayfadaki current locationa tıkladıgında bulundugu konumun güncel hava durumunu gösterir.Eger kullanıcı konumu açık degil ise kullanıcıdan konum açmasını ister.Kullanıcı konum bilgisini reddetiyse ve daha sonrasında current locationa tıkladıgında kullanıcıya konumunu açmasını gerektigini gösteren mesajlar gösterilir

![Uygulama Ekran Görüntüsü](/public/images/readme-images/search.png)

## Teknik Detaylar

### Hava Durumu Simgeleri ve Arka Plan Görselleri

Burda apidan gelen bilgilere göre hava durumu iconları ve arka plan resimleri gelir.
iconlar ve arkaplan resimleri ikiye ayrılır.Gündüz oldugunda gündüz iconları ve arkaplan resimleri ,Gece oldugunda gece iconları ve arkaplan resimleri olarak gösterilir.Bunlar apidan dönen icon bilgilerine ve gün batımı ve gün dogumu bilgilerine göre gösterilir.

![Uygulama Ekran Görüntüsü](/public/images/readme-images/current.png)

### Hava Durumu Bilgilerndirme Mesajları

Güncel hava durumu bilgilerine göre kullanıcıya kısa bilgilendirme mesajları gösterir.Bu mesajlar güncel hava durumuna ve saat dilimine karşı degişkenlik gösterir

![Uygulama Ekran Görüntüsü](/public/images/readme-images/message.png)

### Hata Durumları

Uygulama içersinde olası bi hata durumunda kullanıcıya hata mesajları gösterilir.Bu mesajlar kullanıcının rahat anlıyabilecegi şekilde gösterilir.

![Uygulama Ekran Görüntüsü](/public/images/readme-images/error.png)

### ErrorBoundry

Error Boundaries, bir React uygulamasındaki olası hata durumlarını ele almak için kullanılan bir React bileşenidir. Bu hata sınırları, uygulamanın belirli bir bileşen ağacında bir hata oluştuğunda hatayı yakalar ve uygulamanın geri kalanını etkilemeden hatayı ele almanıza olanak tanır.

![Uygulama Ekran Görüntüsü](/public/images/readme-images/Screenshot.png)

## API

Bu API, Axios ve React Query kütüphaneleri kullanılarak oluşturulmuş bir hava durumu bilgisi dağıtım sistemidir. Axios, HTTP istekleri yapmak ve almak için kullanılırken, React Query bu istekleri yönetmek ve önbelleğe almak için kullanılır. API, kullanıcıların seçtikleri şehirler için hava durumu bilgilerini almaları için bir arayüz sağlar. Kullanıcılar API'ye bir istekte bulunarak, belirledikleri şehir için güncel hava durumu verilerine erişebilirler. API, istekleri işleyerek hava durumu verilerini kaynaklardan alır, işler ve kullanıcıya JSON formatında yanıt verir. Bu API, modern web uygulamaları için hava durumu verilerine erişim sağlamak üzere tasarlanmıştır.

## Teknolojiler ve Paketler

- phosphor-icons/react
- apexcharts
- axios
- classnames
- framer-motion
- react
- react-apexcharts
- react-dom
- react-hot-toast
- react-query
- react-router-dom
- react-tabs
- react-use
- zustand-
